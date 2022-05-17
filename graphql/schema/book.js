"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookInput = exports.Book = void 0;
const type_graphql_1 = require("type-graphql");
const mongoose_1 = require("mongoose");
require("reflect-metadata");
let Book = class Book {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], Book.prototype, "authorId", void 0);
Book = __decorate([
    (0, type_graphql_1.ObjectType)()
], Book);
exports.Book = Book;
let BookInput = class BookInput {
    constructor(name, genre, authorId) {
        this.name = name;
        this.genre = genre;
        this.authorId = authorId;
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BookInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BookInput.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], BookInput.prototype, "authorId", void 0);
BookInput = __decorate([
    (0, type_graphql_1.InputType)(),
    __metadata("design:paramtypes", [String, String, mongoose_1.Schema.Types.ObjectId])
], BookInput);
exports.BookInput = BookInput;
