import {AuthorModel, IAuthor} from "../model/author";
import {Author} from "../../graphql/schema/author";

export default class AuthorRepo {
    public static findById(id: string): Author | null {
        AuthorModel.findById(id, (err: Error, author: IAuthor) => {
            if (err) {
                console.error(err);
                return null;
            }
            return author;
        });
        return null;
    }

    public static getAllAuthors(): Author[] | null {
        AuthorModel.find({}, (err: Error, authors: IAuthor[]) => {
            if (err) {
                console.error(err);
                return null;
            }
            return authors;
        });
        return null;
    }

    public static addAuthor(author: IAuthor): Author | null {
        AuthorModel.create(author).then((author: IAuthor) => {
            console.log("Author created" + author);
            return author;
        }).catch((err: Error) => {
            console.error(err);
            return null;
        });
        return null;
    }
}