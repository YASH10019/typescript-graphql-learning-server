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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const book_1 = require("../schema/book");
const mongoose_1 = require("mongoose");
const author_1 = require("../schema/author");
const AuthorRepo_1 = __importDefault(require("../../database/repository/AuthorRepo"));
let AuthorResolver = class AuthorResolver {
    async getAuthors() {
        return await AuthorRepo_1.default.getAllAuthors();
    }
    async getAuthorById(id) {
        return await AuthorRepo_1.default.findById(id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [author_1.Author], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "getAuthors", null);
__decorate([
    (0, type_graphql_1.Query)(returns => book_1.Book, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "getAuthorById", null);
AuthorResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => author_1.Author)
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
