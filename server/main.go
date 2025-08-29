package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"

	"Eventique/handlers"
)

func main() {
	_ = godotenv.Load()

	r := chi.NewRouter()

	// Standard middlewares for stability and diagnostics
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(simpleCORS())

	// Root route
	r.Get("/", func(w http.ResponseWriter, _ *http.Request) {
		fmt.Fprintln(w, "Eventique Go Server Running! (NO DB MODE)")
	})

	// Health check (always OK)
	r.Get("/health", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok - no db mode"))
	})

	// Auth endpoints
	r.HandleFunc("/signup", handlers.SignupHandler)
	r.HandleFunc("/login", handlers.LoginHandler)

	// Static file serving
	uploadDir := getenv("UPLOAD_DIR", "./uploads")
	_ = os.MkdirAll(uploadDir, 0755)
	r.Handle("/uploads/*", http.StripPrefix("/uploads/", http.FileServer(http.Dir(uploadDir))))

	// Dummy API routes for testing (you can expand these)
	r.Route("/api", func(api chi.Router) {
		api.Get("/events", func(w http.ResponseWriter, _ *http.Request) {
			w.WriteHeader(http.StatusOK)
			w.Write([]byte(`[
				{"id":1, "name":"Mock Event 1"},
				{"id":2, "name":"Mock Event 2"}
			]`))
		})
	})

	// Start the server with timeouts to avoid abrupt resets
	port := getenv("PORT", "8080")
	srv := &http.Server{
		Addr:              ":" + port,
		Handler:           r,
		ReadTimeout:       15 * time.Second,
		ReadHeaderTimeout: 10 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       60 * time.Second,
		MaxHeaderBytes:    1 << 20,
	}
	log.Println("Server is running on http://localhost:" + port)
	log.Fatal(srv.ListenAndServe())
}

func getenv(k, def string) string {
	if v := os.Getenv(k); v != "" {
		return v
	}
	return def
}

// simpleCORS enables permissive CORS for local testing
func simpleCORS() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
			w.Header().Set("Access-Control-Expose-Headers", "Content-Length, Content-Type")
			w.Header().Set("Access-Control-Allow-Credentials", "true")

			if r.Method == http.MethodOptions {
				w.WriteHeader(http.StatusNoContent)
				return
			}
			next.ServeHTTP(w, r)
		})
	}
}
