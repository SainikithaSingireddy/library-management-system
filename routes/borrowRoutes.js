const express = require("express");

const { borrowBook, returnBook, myBorrowedBooks } = require("../controllers/borrowController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/my-books", authMiddleware, myBorrowedBooks);
router.post("/:id/borrow", authMiddleware, borrowBook);
router.post("/:id/return", authMiddleware, returnBook);

module.exports = router;