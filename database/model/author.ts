import {model, Schema} from "mongoose";
import {bookSchema} from "./book"

export interface IAuthor {
    name: string;
    age: number;
    books: Schema.Types.ObjectId[];
}

const authorSchema = new Schema<IAuthor>({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    books: [{type: bookSchema, ref: 'Book'}]
});

export const AuthorModel = model<IAuthor>('Author', authorSchema);