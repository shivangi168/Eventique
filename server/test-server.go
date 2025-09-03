package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	})

	http.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		response := map[string]string{
			"status":  "success",
			"message": "Test server is working!",
		}
		json.NewEncoder(w).Encode(response)
	})

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	fmt.Println("🚀 Test server starting on http://localhost:3001")
	fmt.Println("📋 Available endpoints:")
	fmt.Println("   GET  / - Hello World")
	fmt.Println("   GET  /test - JSON test")
	fmt.Println("   GET  /health - Health check")

	log.Fatal(http.ListenAndServe(":3001", nil))
}
