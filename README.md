📚 Library Management System – Backend
📌 Project Overview

This is a backend system for a Library Management System built using Node.js, Express.js, and MongoDB.
It supports authentication, role-based access control, book management, and borrowing/returning functionality.

🚀 Features
User Registration & Login (JWT Authentication)
Role-based Access Control (Member & Librarian)
Book CRUD Operations
Borrow & Return Books
Track Borrowed Books per User
Secure Password Hashing (bcrypt)
MongoDB Database Integration
🛠 Tech Stack
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (Authentication)
bcrypt (Password Security)
📁 Project Structure
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
├── server.js
├── package.json
└── README.md
🔐 Authentication Flow
User registers
User logs in
JWT token is generated
Token is used in protected routes
📌 API Endpoints
🔐 Auth
POST /api/auth/register
POST /api/auth/login
📚 Books
POST /api/books (Librarian only)
GET /api/books
GET /api/books/:id
PUT /api/books/:id
DELETE /api/books/:id
📖 Borrow System
POST /api/borrow/:id/borrow
POST /api/borrow/:id/return
GET /api/borrow/my-books
⚙️ Setup Instructions
1. Install dependencies
npm install
2. Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
3. Run the server
npm run dev

or

node server.js
🌐 Deployment

This backend can be deployed using:

Render
Railway
👤 Author

Sainikitha Singireddy
