package storage

import (
	"context"
	"sort"
	"time"

	"github.com/google/uuid"

	"Eventique/models"
)

// EventsMemoryRepo provides an in-memory implementation for EventsRepo-like APIs
// to allow running the server without a database.
type EventsMemoryRepo struct {
	events map[string]models.Event
	images map[string][]models.EventImage
	tickets map[string]models.EventTickets
}

func NewEventsMemoryRepo() *EventsMemoryRepo {
	return &EventsMemoryRepo{
		events:  make(map[string]models.Event),
		images:  make(map[string][]models.EventImage),
		tickets: make(map[string]models.EventTickets),
	}
}

func (r *EventsMemoryRepo) CreateEvent(_ context.Context, e *models.Event) (string, error) {
	id := uuid.New().String()
	now := time.Now().UTC()
	e.ID = id
	e.CreatedAt = now
	e.UpdatedAt = now
	r.events[id] = *e
	return id, nil
}

func (r *EventsMemoryRepo) UpdateEvent(_ context.Context, id string, e *models.Event) error {
	if _, ok := r.events[id]; !ok { return nil }
	e.ID = id
	e.CreatedAt = r.events[id].CreatedAt
	e.UpdatedAt = time.Now().UTC()
	r.events[id] = *e
	return nil
}

func (r *EventsMemoryRepo) UpsertTickets(_ context.Context, t *models.EventTickets) error {
	if t.ID == "" { t.ID = uuid.New().String() }
	r.tickets[t.EventID] = *t
	return nil
}

func (r *EventsMemoryRepo) AddImages(_ context.Context, eventID string, paths []string) error {
	for i, p := range paths {
		img := models.EventImage{ ID: uuid.New().String(), EventID: eventID, FilePath: p, Sort: i }
		r.images[eventID] = append(r.images[eventID], img)
	}
	return nil
}

func (r *EventsMemoryRepo) ListEvents(_ context.Context) ([]models.Event, error) {
	var list []models.Event
	for _, e := range r.events { list = append(list, e) }
	sort.Slice(list, func(i, j int) bool { return list[i].CreatedAt.After(list[j].CreatedAt) })
	return list, nil
}

func (r *EventsMemoryRepo) GetEvent(_ context.Context, id string) (*models.Event, error) {
	e, ok := r.events[id]
	if !ok { return nil, ErrNotFound }
	if imgs, ok := r.images[id]; ok { e.Images = imgs }
	if t, ok := r.tickets[id]; ok { t.EventID = id; e.Tickets = &t }
	return &e, nil
}

// ErrNotFound is a minimal sentinel error for not-found cases in memory repo
type notFound struct{}
func (notFound) Error() string { return "not found" }
var ErrNotFound error = notFound{}


