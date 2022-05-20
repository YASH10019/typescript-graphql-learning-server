import {Field, InputType, ObjectType} from "type-graphql";
import "reflect-metadata";

@ObjectType()
export class Book {
    @Field()
    name: string

    @Field()
    genre: string

    @Field()
    authorId: string

}

@InputType()
export class BookInput implements Pick<Book, "name" | "genre" | "authorId"> {
    @Field()
    name: string

    @Field()
    genre: string

    @Field()
    authorId: string
}