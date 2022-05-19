"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../model/book");
class BookRepo {
    static findById(id) {
        return book_1.BookModel.findById(id).exec();
    }
    static getAllBooks() {
        return book_1.BookModel.find().exec();
    }
    static addBook(book) {
        return book_1.BookModel.create(book);
    }
}
exports.default = BookRepo;
