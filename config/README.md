### Library Management System – Backend
### Project Overview

This is a backend system for a Library Management System built using Node.js, Express.js, and MongoDB.
It supports authentication, role-based access control, book management, and borrowing/returning functionality.

### Features
User Registration & Login (JWT Authentication)
Role-based Access Control (Member & Librarian)
Book CRUD Operations
Borrow & Return Books
Track Borrowed Books per User
Secure Password Hashing (bcrypt)
MongoDB Database Integration

### Tech Stack
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (Authentication)
bcrypt (Password Security)

### Project Structure
library-management-system/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── server.js

### Authentication Flow
User registers
User logs in
JWT token is generated
Token is used in protected routes

### API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Books
POST /api/books (Librarian only)
GET /api/books
GET /api/books/:id
PUT /api/books/:id
DELETE /api/books/:id
Borrow
POST /api/borrow/:id/borrow
POST /api/borrow/:id/return
GET /api/borrow/my-books

### Setup Instructions
npm install

### Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### Run server:

npm run dev

### Deployment

Backend can be deployed using:
Render
Railway

### Author
Sainikitha Singireddy