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
export class BookInput implements Partial<Book> {
    @Field()
    name: string

    @Field()
    genre: string

    @Field()
    authorId: string
}