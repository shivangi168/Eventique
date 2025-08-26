package models

import "time"

type Event struct {
	ID               string     `json:"id"`
	Name             string     `json:"name"`
	Category         string     `json:"category"`
	StartsAt         time.Time  `json:"startsAt"`
	DurationMinutes  int        `json:"durationMinutes"`
	Description      string     `json:"description"`
	AddressLine1     string     `json:"addressLine1"`
	AddressLine2     string     `json:"addressLine2"`
	Country          string     `json:"country"`
	State            string     `json:"state"`
	City             string     `json:"city"`
	PostalCode       string     `json:"postalCode"`
	Latitude         *float64   `json:"latitude,omitempty"`
	Longitude        *float64   `json:"longitude,omitempty"`
	Tags             []string   `json:"tags"`
	CreatedAt        time.Time  `json:"createdAt"`
	UpdatedAt        time.Time  `json:"updatedAt"`
	Images           []EventImage   `json:"images,omitempty"`
	Tickets          *EventTickets  `json:"tickets,omitempty"`
}

type EventTickets struct {
	ID                   string     `json:"id"`
	EventID              string     `json:"eventId"`
	TotalCount           int        `json:"totalCount"`
	PerCustomerLimit     int        `json:"perCustomerLimit"`
	GroupMinQty          *int       `json:"groupMinQty,omitempty"`
	GroupDiscountPercent *float64   `json:"groupDiscountPercent,omitempty"`
	DiscountEndsAt       *time.Time `json:"discountEndsAt,omitempty"`
}

type EventImage struct {
	ID       string `json:"id"`
	EventID  string `json:"eventId"`
	FilePath string `json:"filePath"`
	Sort     int    `json:"sortOrder"`
}
