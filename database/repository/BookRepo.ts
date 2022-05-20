import {BookModel, IBook} from "../model/book";
import {Book} from "../../graphql/schema/book";

export default class BookRepo {
    public static findById(id: string): Book | null {
        BookModel.findById(id, (err: Error, book: IBook) => {
            if (err) {
                console.error(err);
                return null;
            }
            return book;
        });
        return null;
    }

    public static getAllBooks(): Book[] | null {
        BookModel.find({}, (err: Error, books: IBook[]) => {
            if (err) {
                console.error(err);
                return null;
            }
            return books;
        });
        return null;
    }

    public static addBook(book: Book): Book | null {
        BookModel.create(book).then((book: IBook) => {
            console.log("Book added" + book);
            return book;
        }).catch((err: Error) => {
            console.error(err);
            return null;
        });
        return null;
    }
}