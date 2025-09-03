package handlers

import (
    "encoding/json"
    "net/http"
    "Eventique/models"
    "Eventique/storage"
    "Eventique/utils"
)

func SignupHandler(w http.ResponseWriter, r *http.Request) {
    // Set response headers
    w.Header().Set("Content-Type", "application/json")
    
    var user models.User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        utils.Error(w, http.StatusBadRequest, "Invalid JSON format")
        return
    }

    // Basic validation
    if user.Email == "" || user.Password == "" {
        utils.Error(w, http.StatusBadRequest, "Email and password are required")
        return
    }

    // Check if user already exists
    if storage.FindUserByEmail(user.Email) != nil {
        utils.Error(w, http.StatusConflict, "Email already exists")
        return
    }

    // Hash password
    hashedPassword, err := utils.HashPassword(user.Password)
    if err != nil {
        utils.Error(w, http.StatusInternalServerError, "Failed to process password")
        return
    }
    
    user.Password = hashedPassword
    storage.AddUser(user)

    utils.JSON(w, http.StatusCreated, map[string]string{"message": "Signup successful"})
}
