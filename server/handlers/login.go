package handlers

import (
    "encoding/json"
    "net/http"
    "Eventique/storage"
    "Eventique/utils"
)

type LoginRequest struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
    // Set response headers
    w.Header().Set("Content-Type", "application/json")
    
    var loginReq LoginRequest
    if err := json.NewDecoder(r.Body).Decode(&loginReq); err != nil {
        utils.Error(w, http.StatusBadRequest, "Invalid JSON format")
        return
    }

    // Basic validation
    if loginReq.Email == "" || loginReq.Password == "" {
        utils.Error(w, http.StatusBadRequest, "Email and password are required")
        return
    }

    user := storage.FindUserByEmail(loginReq.Email)
    if user == nil {
        utils.Error(w, http.StatusUnauthorized, "Invalid credentials")
        return
    }

    if !utils.CheckPasswordHash(loginReq.Password, user.Password) {
        utils.Error(w, http.StatusUnauthorized, "Invalid credentials")
        return
    }

    utils.JSON(w, http.StatusOK, map[string]string{"message": "Login successful"})
}
