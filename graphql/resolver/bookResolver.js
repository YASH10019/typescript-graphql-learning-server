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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const book_1 = require("../schema/book");
const BookRepo_1 = __importDefault(require("../../database/repository/BookRepo"));
let BookResolver = class BookResolver {
    // constructor(private bookRepo: BookRepo) {
    // }
    async getBooks() {
        return await BookRepo_1.default.getAllBooks();
    }
    async getBookById(id) {
        return await BookRepo_1.default.findById(id);
    }
    async addBook(bookInput) {
        return await BookRepo_1.default.addBook(bookInput);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [book_1.Book], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "getBooks", null);
__decorate([
    (0, type_graphql_1.Query)(returns => book_1.Book, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "getBookById", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => book_1.Book),
    __param(0, (0, type_graphql_1.Arg)("newBookData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_1.BookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "addBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)(book_1.Book)
], BookResolver);
exports.BookResolver = BookResolver;
