"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorModel = void 0;
const mongoose_1 = require("mongoose");
const book_1 = require("./book");
const authorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    books: [{ type: book_1.bookSchema, ref: 'Book' }]
});
exports.AuthorModel = (0, mongoose_1.model)('Author', authorSchema);
