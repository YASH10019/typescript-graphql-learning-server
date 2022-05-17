import {Schema, model} from "mongoose";

export interface IBook {
    name: string;
    genre: string;
    authorId: Schema.Types.ObjectId;
}

export const bookSchema = new Schema<IBook>({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    authorId: {type: Schema.Types.ObjectId, ref: 'Author'}
});

export const BookModel = model<IBook>('Book', bookSchema);