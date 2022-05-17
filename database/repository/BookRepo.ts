import {BookModel, IBook} from "../model/book";
import {Document, Types} from "mongoose";

export default class BookRepo {
    public static findById(id: Types.ObjectId): Promise<(Document<unknown, any, IBook> & IBook & { _id: Types.ObjectId }) | null> {
        return BookModel.findById(id).exec();
    }

    public static getAllBooks(): Promise<(Document<unknown, any, IBook> & IBook & { _id: Types.ObjectId })[]> {
        return BookModel.find().exec();
    }
}