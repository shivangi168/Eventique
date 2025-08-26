package handlers

import (
    "encoding/json"
    "net/http"
    "Eventique/models"
    "Eventique/storage"
    "Eventique/utils"
)

func SignupHandler(w http.ResponseWriter, r *http.Request) {
    var user models.User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        utils.Error(w, http.StatusBadRequest, "invalid JSON")
        return
    }

    if storage.FindUserByEmail(user.Email) != nil {
        utils.Error(w, http.StatusBadRequest, "Email already exists")
        return
    }

    hashedPassword, _ := utils.HashPassword(user.Password)
    user.Password = hashedPassword
    storage.AddUser(user)

    utils.JSON(w, http.StatusCreated, map[string]string{"message": "Signup successful"})
}
