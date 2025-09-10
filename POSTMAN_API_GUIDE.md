# 🚀 Eventique API - Postman Testing Guide

## Base URL: `http://localhost:3001`

## 📋 All Available APIs

### 🔍 **Health & Status APIs**
1. **GET** `/` - Root endpoint
2. **GET** `/health` - Health check
3. **GET** `/test` - Test endpoint

### 👤 **Authentication APIs**
4. **POST** `/signup` - User registration
5. **POST** `/login` - User login

### 👥 **User Management APIs**
6. **GET** `/users` - Get all users
7. **GET** `/users/{id}` - Get user by ID

### 🎉 **Event Management APIs**
8. **GET** `/api/events` - Get all events
9. **GET** `/api/events/{id}` - Get event by ID
10. **POST** `/api/events` - Create new event
11. **PUT** `/api/events/{id}` - Update event
12. **DELETE** `/api/events/{id}` - Delete event
13. **GET** `/api/events/search` - Search events

### 📂 **Category & Venue APIs**
14. **GET** `/api/categories` - Get all categories
15. **GET** `/api/venues` - Get all venues

---

## 🧪 **Postman Test Examples**

### 1. **Health Check**
```
GET http://localhost:3001/health
```
**Expected Response:** `ok`

### 2. **Test Endpoint**
```
GET http://localhost:3001/test
```
**Expected Response:**
```json
{
  "status": "success",
  "message": "Server is working!",
  "time": "2024-01-01T10:00:00Z",
  "port": "3001"
}
```

### 3. **User Signup**
```
POST http://localhost:3001/signup
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```
**Expected Response:**
```json
{
  "message": "Signup successful"
}
```

### 4. **User Login**
```
POST http://localhost:3001/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```
**Expected Response:**
```json
{
  "message": "Login successful"
}
```

### 5. **Get All Users**
```
GET http://localhost:3001/users
```
**Expected Response:**
```json
[
  {
    "id": 1,
    "email": "user1@example.com",
    "name": "User One"
  },
  {
    "id": 2,
    "email": "user2@example.com",
    "name": "User Two"
  }
]
```

### 6. **Get User by ID**
```
GET http://localhost:3001/users/1
```
**Expected Response:**
```json
{
  "id": "1",
  "email": "user1@example.com",
  "name": "User 1"
}
```

### 7. **Get All Events**
```
GET http://localhost:3001/api/events
```
**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Tech Conference 2024",
    "description": "Annual technology conference",
    "date": "2024-01-15",
    "location": "San Francisco",
    "price": 299.99,
    "category": "Technology"
  },
  {
    "id": 2,
    "name": "Music Festival",
    "description": "Summer music festival",
    "date": "2024-06-20",
    "location": "Los Angeles",
    "price": 150.00,
    "category": "Music"
  }
]
```

### 8. **Get Event by ID**
```
GET http://localhost:3001/api/events/1
```
**Expected Response:**
```json
{
  "id": "1",
  "name": "Event 1",
  "description": "Description for event 1",
  "date": "2024-01-15",
  "location": "Location 1",
  "price": 99.99,
  "category": "General"
}
```

### 9. **Create New Event**
```
POST http://localhost:3001/api/events
Content-Type: application/json

{
  "name": "New Event",
  "description": "This is a new event",
  "date": "2024-02-15",
  "location": "New York",
  "price": 199.99,
  "category": "Business"
}
```
**Expected Response:**
```json
{
  "name": "New Event",
  "description": "This is a new event",
  "date": "2024-02-15",
  "location": "New York",
  "price": 199.99,
  "category": "Business",
  "id": 999,
  "created_at": "2024-01-01T10:00:00Z"
}
```

### 10. **Update Event**
```
PUT http://localhost:3001/api/events/1
Content-Type: application/json

{
  "name": "Updated Event",
  "description": "This event has been updated",
  "price": 299.99
}
```
**Expected Response:**
```json
{
  "name": "Updated Event",
  "description": "This event has been updated",
  "price": 299.99,
  "id": "1",
  "updated_at": "2024-01-01T10:00:00Z"
}
```

### 11. **Delete Event**
```
DELETE http://localhost:3001/api/events/1
```
**Expected Response:**
```json
{
  "message": "Event 1 deleted successfully",
  "id": "1"
}
```

### 12. **Search Events**
```
GET http://localhost:3001/api/events/search?q=tech&category=Technology
```
**Expected Response:**
```json
{
  "query": "tech",
  "category": "Technology",
  "results": [
    {
      "id": 1,
      "name": "Search Result 1",
      "category": "Technology"
    },
    {
      "id": 2,
      "name": "Search Result 2",
      "category": "Technology"
    }
  ]
}
```

### 13. **Get Categories**
```
GET http://localhost:3001/api/categories
```
**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Technology",
    "count": 15
  },
  {
    "id": 2,
    "name": "Music",
    "count": 8
  },
  {
    "id": 3,
    "name": "Business",
    "count": 12
  }
]
```

### 14. **Get Venues**
```
GET http://localhost:3001/api/venues
```
**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Convention Center",
    "city": "San Francisco",
    "capacity": 1000
  },
  {
    "id": 2,
    "name": "Music Hall",
    "city": "Los Angeles",
    "capacity": 500
  }
]
```

---

## 🎯 **Postman Collection Setup**

1. **Create a new collection** called "Eventique API"
2. **Set base URL** as `http://localhost:3001`
3. **Add all the requests** above to your collection
4. **Test each endpoint** to verify they work

## 🔧 **Troubleshooting**

- **Server not responding**: Make sure the server is running on port 3001
- **CORS errors**: The server has CORS enabled for all origins
- **Connection refused**: Check if port 3001 is available

## 📊 **Status Codes**

- `200` - Success
- `201` - Created (for POST requests)
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## 🚀 **Quick Start**

1. **Start the server:**
   ```bash
   cd server
   $env:PORT="3001"; go run main.go
   ```

2. **Test in Postman:**
   - Import the collection
   - Set base URL to `http://localhost:3001`
   - Start testing!

All APIs are now ready for testing in Postman! 🎉
