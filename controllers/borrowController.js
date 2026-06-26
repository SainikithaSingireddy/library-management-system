const Book = require("../models/Book");
const Borrow = require("../models/Borrow");

const borrowBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const userId = req.user._id;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (book.availableQuantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Book is not available",
      });
    }

    const alreadyBorrowed = await Borrow.findOne({
      memberId: userId,
      bookId,
      status: "borrowed",
    });

    if (alreadyBorrowed) {
      return res.status(400).json({
        success: false,
        message: "You already borrowed this book",
      });
    }

    const borrow = await Borrow.create({
      memberId: userId,
      bookId,
    });

    book.availableQuantity -= 1;
    await book.save();

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const returnBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const userId = req.user._id;

    const borrowRecord = await Borrow.findOne({
      memberId: userId,
      bookId,
      status: "borrowed",
    });

    if (!borrowRecord) {
      return res.status(400).json({
        success: false,
        message: "No active borrow record found",
      });
    }

    borrowRecord.status = "returned";
    borrowRecord.returnDate = new Date();
    await borrowRecord.save();

    const book = await Book.findById(bookId);
    book.availableQuantity += 1;
    await book.save();

    res.status(200).json({
      success: true,
      message: "Book returned successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const myBorrowedBooks = async (req, res) => {
  try {
    const userId = req.user._id;

    const records = await Borrow.find({
      memberId: userId,
      status: "borrowed",
    }).populate("bookId");

    res.status(200).json({
      success: true,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  borrowBook,
  returnBook,
  myBorrowedBooks,
};