package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"

	"Eventique/handlers"
    "Eventique/storage"
)

func main() {
	// Load environment variables from .env file (ignores if it doesn't exist)
	_ = godotenv.Load()

	r := chi.NewRouter()

	// Basic middlewares
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(corsMiddleware())

	// Root route
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		fmt.Fprintln(w, "Eventique Go Server Running on Port 3001!")
	})

	// Health check
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	// Test endpoint
	r.Get("/test", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		response := map[string]interface{}{
			"status":  "success",
			"message": "Server is working!",
			"time":    time.Now().Format(time.RFC3339),
			"port":    "3001",
		}
		json.NewEncoder(w).Encode(response)
	})

	// Auth endpoints
	r.Post("/signup", handlers.SignupHandler)
	r.Post("/login", handlers.LoginHandler)

	// User management endpoints
	r.Get("/users", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		users := []map[string]interface{}{
			{"id": 1, "email": "user1@example.com", "name": "User One"},
			{"id": 2, "email": "user2@example.com", "name": "User Two"},
		}
		json.NewEncoder(w).Encode(users)
	})

	r.Get("/users/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		id := chi.URLParam(r, "id")
		user := map[string]interface{}{
			"id":    id,
			"email": "user" + id + "@example.com",
			"name":  "User " + id,
		}
		json.NewEncoder(w).Encode(user)
	})

	// Database and repositories
	db := storage.Connect()
	defer db.Close()

	// Uploads directory
	uploadDir := getenv("UPLOAD_DIR", "uploads")
	if err := os.MkdirAll(uploadDir, 0755); err != nil {
		log.Fatalf("failed to create upload dir %s: %v", uploadDir, err)
	}

	// Run migrations (idempotent)
	if err := runMigrations(db); err != nil {
		log.Fatalf("failed to run migrations: %v", err)
	}

	// Mount static files for uploaded images
	r.Handle("/uploads/*", http.StripPrefix("/uploads/", http.FileServer(http.Dir(uploadDir))))

	// Event management (real handlers with DB)
	apiEvents := handlers.EventsHandler{Repo: storage.NewEventsRepo(db), UploadDir: uploadDir}
	r.Route("/api", func(api chi.Router) {
		api.Group(func(rg chi.Router) {
			apiEvents.Routes(rg)
		})
	})

	// Categories endpoint
	r.Get("/api/categories", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		categories := []map[string]interface{}{
			{"id": 1, "name": "Technology", "count": 15},
			{"id": 2, "name": "Music", "count": 8},
			{"id": 3, "name": "Business", "count": 12},
			{"id": 4, "name": "Sports", "count": 6},
			{"id": 5, "name": "Food", "count": 10},
		}
		json.NewEncoder(w).Encode(categories)
	})

	// Venues endpoint
	r.Get("/api/venues", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		venues := []map[string]interface{}{
			{"id": 1, "name": "Convention Center", "city": "San Francisco", "capacity": 1000},
			{"id": 2, "name": "Music Hall", "city": "Los Angeles", "capacity": 500},
			{"id": 3, "name": "Business Center", "city": "New York", "capacity": 200},
		}
		json.NewEncoder(w).Encode(venues)
	})

	// Configure server
	port := getenv("PORT", "3001")
	srv := &http.Server{
		Addr:         ":" + port,
		Handler:      r,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// Start server in goroutine
	go func() {
		log.Printf("🚀 Server starting on http://localhost:%s", port)
		log.Printf("📋 Available endpoints:")
		log.Printf("   GET  / - Root endpoint")
		log.Printf("   GET  /health - Health check")
		log.Printf("   GET  /test - Test endpoint")
		log.Printf("   POST /signup - User signup")
		log.Printf("   POST /login - User login")
		log.Printf("   GET  /users - Get all users")
		log.Printf("   GET  /users/{id} - Get user by ID")
		log.Printf("   GET  /api/events - Get all events")
		log.Printf("   GET  /api/events/{id} - Get event by ID")
		log.Printf("   POST /api/events - Create new event")
		log.Printf("   PUT  /api/events/{id} - Update event")
		log.Printf("   DELETE /api/events/{id} - Delete event")
		log.Printf("   GET  /api/events/search - Search events")
		log.Printf("   GET  /api/categories - Get categories")
		log.Printf("   GET  /api/venues - Get venues")
		
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("❌ Server failed to start: %v", err)
		}
	}()

	// Wait for interrupt signal
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	log.Println("🛑 Shutting down server...")

	// Graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("❌ Server forced to shutdown: %v", err)
	}

	log.Println("✅ Server exited gracefully")
}

// getenv helper function
func getenv(k, def string) string {
	if v := os.Getenv(k); v != "" {
		return v
	}
	return def
}

// Simple CORS middleware
func corsMiddleware() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

// runMigrations applies minimal schema if not present. Safe to run repeatedly.
func runMigrations(db *sql.DB) error {
    path := "server/migrations/001_init.sql"
    b, err := os.ReadFile(path)
    if err != nil {
        // If migrations file isn't found, do nothing but log
        log.Printf("migrations file not found at %s: %v", path, err)
        return nil
    }
    _, err = db.Exec(string(b))
    if err != nil {
        return err
    }
    return nil
}
