const express = require("express");

const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("librarian"), addBook);
router.put("/:id", authMiddleware, roleMiddleware("librarian"), updateBook);
router.delete("/:id", authMiddleware, roleMiddleware("librarian"), deleteBook);


router.get("/", authMiddleware, getAllBooks);
router.get("/:id", authMiddleware, getBookById);

module.exports = router;