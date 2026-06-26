# Library Management System – Backend

## Project Overview

This is a backend application for managing books, members, and borrowing activities in a library. The project is built using **Node.js**, **Express.js**, and **MongoDB Atlas**. It implements secure authentication, role-based authorization, and RESTful APIs for library operations.

---

## Features

- User Registration
- User Login with JWT Authentication
- Password Hashing using bcrypt
- Role-Based Authorization (Member & Librarian)
- Book Management (CRUD Operations)
- Borrow Book
- Return Book
- View Borrowed Books
- MongoDB Database Integration
- Input Validation and Error Handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- express-validator
- CORS

---

## Project Structure

```text
library-management-system/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   └── borrowController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Book.js
│   └── Borrow.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   └── borrowRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Authentication Flow

1. User registers an account.
2. User logs in with email and password.
3. Server verifies the credentials.
4. A JWT token is generated.
5. The token is used to access protected routes.
6. Role-based middleware controls access to librarian-only APIs.

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Books

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/books` | Add Book (Librarian Only) |
| GET | `/api/books` | Get All Books |
| GET | `/api/books/:id` | Get Book by ID |
| PUT | `/api/books/:id` | Update Book |
| DELETE | `/api/books/:id` | Delete Book |

### Borrow

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/borrow/:id/borrow` | Borrow Book |
| POST | `/api/borrow/:id/return` | Return Book |
| GET | `/api/borrow/my-books` | View Borrowed Books |

---

## Installation & Setup

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the application

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000
```

---

## Deployment

The project can be deployed using:

- Render
- Railway

---

## Author

**Sainikitha Singireddy**