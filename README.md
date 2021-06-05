# Broken app

## Requests:

### 1. Signup
#### Method: `POST`
#### URL: `localhost:4000/api/auth/signup`
#### Body:
```json
{
  "user": {
    "full_name": "John Doe",
    "username": "john_doe",
    "password": "123456",
    "email": "john_doe@mail.com"
  }
}
```

---

### 2. Signin
#### Method: `POST`
#### URL: `localhost:4000/api/auth/signin`
#### Body:
```json
{
  "user": {
    "username": "john_doe",
    "password": "123456"
  }
}
```

---

### 3. Create game
#### Method: `POST`
#### URL: `localhost:4000/api/game/create`
#### Headers: `Authorization: <token>`
#### Body:
```json
{
  "game": {
    "title": "sudoku",
    "studio": "studio 1",
    "esrb_rating": "x",
    "user_rating": 4,
    "have_played": true
  }
}
```

---

### 4. Get all games
#### Method: `GET`
#### URL: `localhost:4000/api/game/all`
#### Headers: `Authorization: <token>`

---

### 5. Get game by id
#### Method: `GET`
#### URL: `localhost:4000/api/game/1`
#### Headers: `Authorization: <token>`

---

### 6. Update game by id
#### Method: `PUT`
#### URL: `localhost:4000/api/game/update/1`
#### Headers: `Authorization: <token>`
#### Body:
```json
{
  "game": {
    "title": "tic-tac-toe",
    "studio": "studio 99",
    "esrb_rating": "w",
    "user_rating": 5,
    "have_played": false
  }
}
```

---

### 7. Delete game by id
#### Method: `DELETE`
#### URL: `localhost:4000/api/game/remove/1`
#### Headers: `Authorization: <token>`
