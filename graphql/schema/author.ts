import {Field, InputType, ObjectType} from "type-graphql";

@ObjectType()
export class Author {
    @Field()
    name: string

    @Field()
    age: number
}

@InputType()
export class AuthorInput implements Pick<Author, "name" | "age"> {
    @Field()
    name: string

    @Field()
    age: number
}