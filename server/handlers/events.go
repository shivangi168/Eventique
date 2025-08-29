package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"

	"Eventique/models"
	"Eventique/storage"
	"Eventique/utils"
)

type EventsHandler struct {
	Repo      *storage.EventsRepo
	UploadDir string
	BaseURL   string
}

func (h *EventsHandler) Routes(r chi.Router) {
	r.Post("/events", h.createEvent)          // Step 1
	r.Put("/events/{id}", h.updateEvent)
	r.Get("/events", h.listEvents)
	r.Get("/events/{id}", h.getEvent)

	r.Post("/events/{id}/tickets", h.upsertTickets) // Step 2a
	r.Put("/events/{id}/tickets", h.upsertTickets)

	r.Post("/events/{id}/images", h.uploadImages)   // Step 2b
	r.Delete("/events/{id}/images/{imageId}", h.deleteImage)
}

/* ---------- Event Create / Update / Read ---------- */

func (h *EventsHandler) createEvent(w http.ResponseWriter, r *http.Request) {
	var in struct {
		Name            string    `json:"name"`
		Category        string    `json:"category"`
		StartsAt        time.Time `json:"startsAt"`
		DurationMinutes int       `json:"durationMinutes"`
		Description     string    `json:"description"`
		AddressLine1    string    `json:"addressLine1"`
		AddressLine2    string    `json:"addressLine2"`
		Country         string    `json:"country"`
		State           string    `json:"state"`
		City            string    `json:"city"`
		PostalCode      string    `json:"postalCode"`
		Latitude        *float64  `json:"latitude"`
		Longitude       *float64  `json:"longitude"`
		Tags            []string  `json:"tags"`
	}
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		utils.Error(w, http.StatusBadRequest, "invalid JSON")
		return
	}
	if in.Name == "" || in.DurationMinutes <= 0 {
		utils.Error(w, http.StatusBadRequest, "name and durationMinutes required")
		return
	}
	e := &models.Event{
		Name:            in.Name,
		Category:        in.Category,
		StartsAt:        in.StartsAt,
		DurationMinutes: in.DurationMinutes,
		Description:     in.Description,
		AddressLine1:    in.AddressLine1,
		AddressLine2:    in.AddressLine2,
		Country:         in.Country,
		State:           in.State,
		City:            in.City,
		PostalCode:      in.PostalCode,
		Latitude:        in.Latitude, Longitude: in.Longitude,
		Tags:            in.Tags,
	}
	id, err := h.Repo.CreateEvent(r.Context(), e)
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, "db error")
		return
	}
	utils.JSON(w, http.StatusCreated, map[string]string{"id": id, "message": "event created"})
}

func (h *EventsHandler) updateEvent(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	var in models.Event
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		utils.Error(w, http.StatusBadRequest, "invalid JSON")
		return
	}
	if err := h.Repo.UpdateEvent(r.Context(), id, &in); err != nil {
		utils.Error(w, http.StatusInternalServerError, "db error")
		return
	}
	utils.JSON(w, http.StatusOK, map[string]string{"message": "event updated"})
}

func (h *EventsHandler) listEvents(w http.ResponseWriter, r *http.Request) {
	out, err := h.Repo.ListEvents(r.Context())
	if err != nil {
		utils.Error(w, http.StatusInternalServerError, "db error")
		return
	}
	utils.JSON(w, http.StatusOK, out)
}

func (h *EventsHandler) getEvent(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	e, err := h.Repo.GetEvent(r.Context(), id)
	if err != nil {
		utils.Error(w, http.StatusNotFound, "event not found")
		return
	}
	utils.JSON(w, http.StatusOK, e)
}

/* ---------- Tickets ---------- */
func (h *EventsHandler) upsertTickets(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	var in struct {
		TotalCount           int        `json:"totalCount"`
		PerCustomerLimit     int        `json:"perCustomerLimit"`
		GroupMinQty          *int       `json:"groupMinQty"`
		GroupDiscountPercent *float64   `json:"groupDiscountPercent"`
		DiscountEndsAt       *time.Time `json:"discountEndsAt"` // pass event end if you want "till event end"
	}
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		utils.Error(w, http.StatusBadRequest, "invalid JSON")
		return
	}
	t := &models.EventTickets{
		EventID:              id,
		TotalCount:           in.TotalCount,
		PerCustomerLimit:     in.PerCustomerLimit,
		GroupMinQty:          in.GroupMinQty,
		GroupDiscountPercent: in.GroupDiscountPercent,
		DiscountEndsAt:       in.DiscountEndsAt,
	}
	if t.TotalCount < 0 || t.PerCustomerLimit <= 0 {
		utils.Error(w, http.StatusBadRequest, "invalid ticket values")
		return
	}
	if err := h.Repo.UpsertTickets(r.Context(), t); err != nil {
		utils.Error(w, http.StatusInternalServerError, "db error")
		return
	}
	utils.JSON(w, http.StatusOK, map[string]string{"message": "tickets saved"})
}

/* ---------- Images (max 5) ---------- */
func (h *EventsHandler) uploadImages(w http.ResponseWriter, r *http.Request) {
	eventID := chi.URLParam(r, "id")

	if err := r.ParseMultipartForm(25 << 20); err != nil { // 25 MB
		utils.Error(w, http.StatusBadRequest, "cannot parse form")
		return
	}
	files := r.MultipartForm.File["images"]
	if len(files) == 0 {
		utils.Error(w, http.StatusBadRequest, "no files")
		return
	}
	if len(files) > 5 {
		utils.Error(w, http.StatusBadRequest, "max 5 images")
		return
	}

	var saved []string
	for _, fh := range files {
		p, err := h.saveOneImage(r.Context(), fh)
		if err != nil {
			utils.Error(w, http.StatusBadRequest, err.Error())
			return
		}
		saved = append(saved, p)
	}
	if err := h.Repo.AddImages(r.Context(), eventID, saved); err != nil {
		utils.Error(w, http.StatusInternalServerError, "db error")
		return
	}
	utils.JSON(w, http.StatusCreated, map[string]any{"message": "images uploaded", "paths": saved})
}

func (h *EventsHandler) saveOneImage(ctx context.Context, fh *multipart.FileHeader) (string, error) {
	ext := filepath.Ext(fh.Filename)
	if ext == "" { ext = ".jpg" }
	// rudimentary content-type check
	if fh.Size > 10<<20 { // 10MB per image
		return "", errors.New("image too large (max 10MB)")
	}
	src, err := fh.Open()
	if err != nil { return "", err }
	defer src.Close()

	name := uuid.New().String() + ext
	full := filepath.Join(h.UploadDir, name)

	dst, err := os.Create(full)
	if err != nil { return "", err }
	defer dst.Close()

	if _, err = io.Copy(dst, src); err != nil { return "", err }

	// public-ish path served by /uploads
	return "/uploads/" + name, nil
}

func (h *EventsHandler) deleteImage(w http.ResponseWriter, r *http.Request) {
	// Optional: implement delete by removing db row + file
	utils.Error(w, http.StatusNotImplemented, "not implemented")
}

/* Utility for parsing int from query if ever needed */
func atoi(s string) *int {
	if s == "" { return nil }
	i, _ := strconv.Atoi(s)
	return &i
}
