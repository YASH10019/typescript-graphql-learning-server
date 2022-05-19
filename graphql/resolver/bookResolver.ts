import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Book, BookInput} from "../schema/book";
import BookRepo from "../../database/repository/BookRepo";


@Resolver(Book)
export class BookResolver {
    // constructor(private bookRepo: BookRepo) {
    // }

    @Query(returns => [Book], {nullable: true})
    async getBooks() {
        return await BookRepo.getAllBooks();
    }

    @Query(returns => Book, {nullable: true})
    async getBookById(@Arg("id") id: string) {
        return await BookRepo.findById(id);
    }

    @Mutation(returns => Book)
    async addBook(@Arg("newBookData") bookInput: BookInput) {
        return await BookRepo.addBook(bookInput);
    }
}