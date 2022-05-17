import {Field, InputType, ObjectType} from "type-graphql";
import {Schema} from "mongoose";

@ObjectType()
export class Book {
    @Field()
    name: string

    @Field()
    genre: string

    @Field()
    authorId: Schema.Types.ObjectId


    constructor(name: string, genre: string, authorId: Schema.Types.ObjectId) {
        this.name = name
        this.genre = genre
        this.authorId = authorId
    }
}

@InputType()
export class BookInput implements Partial<Book> {
    @Field()
    name: string

    @Field()
    genre: string

    @Field()
    authorId: Schema.Types.ObjectId

    constructor(name: string, genre: string, authorId: Schema.Types.ObjectId) {
        this.name = name
        this.genre = genre
        this.authorId = authorId
    }
}