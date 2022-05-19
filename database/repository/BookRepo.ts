import {BookModel, IBook} from "../model/book";
import {Document, Types} from "mongoose";
import {Book} from "../../graphql/schema/book";

export default class BookRepo {
    public static findById(id: string): Promise<(Document<unknown, any, IBook> & IBook & { _id: Types.ObjectId }) | null> {
        return BookModel.findById(id).exec();
    }

    public static getAllBooks(): Promise<(Document<unknown, any, IBook> & IBook & { _id: Types.ObjectId })[]> {
        return BookModel.find().exec();
    }
    public static addBook(book: Book):Promise<IBook>{
        return BookModel.create(book);
    }
}