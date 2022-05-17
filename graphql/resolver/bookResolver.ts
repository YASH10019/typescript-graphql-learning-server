import {Query, Resolver} from "type-graphql";
import {Book, BookInput} from "../schema/book";
import BookRepo from "../../database/repository/BookRepo";
import {Document, Types} from "mongoose";
import {IBook} from "../../database/model/book";


@Resolver(of => Book)
export class BookResolver {
    @Query(returns => [Book], {nullable: true})
    async getBooks(): Promise<Book[]> {
        return await BookRepo.getAllBooks();
    }

    @Query(returns => Book, {nullable: true})
    async getBookById(id: Types.ObjectId): Promise<(Document<unknown, any, IBook> & IBook & { _id: Types.ObjectId }) | null> {
        return await BookRepo.findById(id);
    }
}