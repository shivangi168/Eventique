package storage

import (
	"context"
	"database/sql"
	"strings"

	"github.com/google/uuid"
	"Eventique/models"
)

type EventsRepo struct{ DB *sql.DB }

// EventsRepository defines the contract required by handlers.
// Both the DB-backed repo and the in-memory repo implement this.
type EventsRepository interface {
    CreateEvent(ctx context.Context, e *models.Event) (string, error)
    UpdateEvent(ctx context.Context, id string, e *models.Event) error
    UpsertTickets(ctx context.Context, t *models.EventTickets) error
    AddImages(ctx context.Context, eventID string, paths []string) error
    ListEvents(ctx context.Context) ([]models.Event, error)
    GetEvent(ctx context.Context, id string) (*models.Event, error)
}

func NewEventsRepo(db *sql.DB) *EventsRepo { return &EventsRepo{DB: db} }

func (r *EventsRepo) CreateEvent(ctx context.Context, e *models.Event) (string, error) {
	id := uuid.New().String()
	tags := "{" + strings.Join(e.Tags, ",") + "}"
	_, err := r.DB.ExecContext(ctx, `
		INSERT INTO events (id,name,category,starts_at,duration_minutes,description,
			address_line1,address_line2,country,state,city,postal_code,latitude,longitude,tags)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
	`, id, e.Name, e.Category, e.StartsAt, e.DurationMinutes, e.Description,
		e.AddressLine1, e.AddressLine2, e.Country, e.State, e.City, e.PostalCode,
		e.Latitude, e.Longitude, tags)
	return id, err
}

func (r *EventsRepo) UpdateEvent(ctx context.Context, id string, e *models.Event) error {
	tags := "{" + strings.Join(e.Tags, ",") + "}"
	_, err := r.DB.ExecContext(ctx, `
	  UPDATE events SET
	    name=$2, category=$3, starts_at=$4, duration_minutes=$5, description=$6,
	    address_line1=$7, address_line2=$8, country=$9, state=$10, city=$11, postal_code=$12,
	    latitude=$13, longitude=$14, tags=$15, updated_at=now()
	  WHERE id=$1
	`, id, e.Name, e.Category, e.StartsAt, e.DurationMinutes, e.Description,
		e.AddressLine1, e.AddressLine2, e.Country, e.State, e.City, e.PostalCode,
		e.Latitude, e.Longitude, tags)
	return err
}

func (r *EventsRepo) UpsertTickets(ctx context.Context, t *models.EventTickets) error {
	if t.ID == "" { t.ID = uuid.New().String() }
	_, err := r.DB.ExecContext(ctx, `
	  INSERT INTO event_tickets (id,event_id,total_count,per_customer_limit,group_min_qty,group_discount_percent,discount_ends_at)
	  VALUES ($1,$2,$3,$4,$5,$6,$7)
	  ON CONFLICT (id) DO UPDATE SET
	    total_count=EXCLUDED.total_count,
	    per_customer_limit=EXCLUDED.per_customer_limit,
	    group_min_qty=EXCLUDED.group_min_qty,
	    group_discount_percent=EXCLUDED.group_discount_percent,
	    discount_ends_at=EXCLUDED.discount_ends_at
	`, t.ID, t.EventID, t.TotalCount, t.PerCustomerLimit, t.GroupMinQty, t.GroupDiscountPercent, t.DiscountEndsAt)
	return err
}

func (r *EventsRepo) AddImages(ctx context.Context, eventID string, paths []string) error {
	tx, err := r.DB.BeginTx(ctx, nil)
	if err != nil { return err }
	defer tx.Rollback()

	for i, p := range paths {
		_, err = tx.ExecContext(ctx, `
		  INSERT INTO event_images (event_id, file_path, sort_order)
		  VALUES ($1,$2,$3)
		`, eventID, p, i)
		if err != nil { return err }
	}
	return tx.Commit()
}

func (r *EventsRepo) ListEvents(ctx context.Context) ([]models.Event, error) {
	rows, err := r.DB.QueryContext(ctx, `
	  SELECT id,name,category,starts_at,duration_minutes,city,state,country,tags FROM events ORDER BY created_at DESC
	`)
	if err != nil { return nil, err }
	defer rows.Close()

	var list []models.Event
	for rows.Next() {
		var e models.Event
		var tags []byte
		if err := rows.Scan(&e.ID, &e.Name, &e.Category, &e.StartsAt, &e.DurationMinutes, &e.City, &e.State, &e.Country, &tags); err != nil {
			return nil, err
		}
		list = append(list, e)
	}
	return list, nil
}

func (r *EventsRepo) GetEvent(ctx context.Context, id string) (*models.Event, error) {
	var e models.Event
	var tags []byte
	err := r.DB.QueryRowContext(ctx, `
	  SELECT id,name,category,starts_at,duration_minutes,description,
	         address_line1,address_line2,country,state,city,postal_code,latitude,longitude,tags,created_at,updated_at
	  FROM events WHERE id=$1
	`, id).Scan(&e.ID, &e.Name, &e.Category, &e.StartsAt, &e.DurationMinutes, &e.Description,
		&e.AddressLine1, &e.AddressLine2, &e.Country, &e.State, &e.City, &e.PostalCode, &e.Latitude, &e.Longitude, &tags, &e.CreatedAt, &e.UpdatedAt)
	if err != nil { return nil, err }

	// images
	imgRows, err := r.DB.QueryContext(ctx, `SELECT id, file_path, sort_order FROM event_images WHERE event_id=$1 ORDER BY sort_order`, id)
	if err == nil {
		defer imgRows.Close()
		for imgRows.Next() {
			var im models.EventImage
			im.EventID = id
			imgRows.Scan(&im.ID, &im.FilePath, &im.Sort)
			e.Images = append(e.Images, im)
		}
	}

	// tickets (optional)
	var t models.EventTickets
	err = r.DB.QueryRowContext(ctx, `
	  SELECT id, total_count, per_customer_limit, group_min_qty, group_discount_percent, discount_ends_at
	  FROM event_tickets WHERE event_id=$1 LIMIT 1
	`, id).Scan(&t.ID, &t.TotalCount, &t.PerCustomerLimit, &t.GroupMinQty, &t.GroupDiscountPercent, &t.DiscountEndsAt)
	if err == nil {
		t.EventID = id
		e.Tickets = &t
	}
	return &e, nil
}
