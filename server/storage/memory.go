package storage

import (
    "Eventique/models"
)

var Users = []models.User{}
var LastID = 0

func AddUser(user models.User) {
    LastID++
    user.ID = LastID
    Users = append(Users, user)
}

func FindUserByEmail(email string) *models.User {
    for i := range Users {
        if Users[i].Email == email {
            return &Users[i]
        }
    }
    return nil
}
