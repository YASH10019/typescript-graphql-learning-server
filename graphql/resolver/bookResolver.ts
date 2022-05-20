import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Book, BookInput} from "../schema/book";
import BookRepo from "../../database/repository/BookRepo";


@Resolver(() => Book)
export class BookResolver {

    @Query(() => [Book], {nullable: true})
    async getBooks(): Promise<Book[] | null> {
        const books = BookRepo.getAllBooks();
        // return books;
        return new Promise<Book[]>((resolve, reject) => {
            if (books!==null) {
                resolve(books);
            } else {
                reject(new Error("No books found"));
            }
        });
    }

    @Query(() => Book, {nullable: true})
    async getBookById(@Arg("id") id: string): Promise<Book | null> {
        return BookRepo.findById(id);
    }

    @Mutation(() => Book)
    async addBook(@Arg("newBookData") bookInput: BookInput): Promise<Book | null> {
        return BookRepo.addBook(bookInput);
    }
}