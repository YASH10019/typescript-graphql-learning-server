"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    authorId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Author' }
});
exports.BookModel = (0, mongoose_1.model)('Book', exports.bookSchema);
