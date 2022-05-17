import {Field, InputType, ObjectType} from "type-graphql";

@ObjectType()
export class Author {
    @Field()
    name: string

    @Field()
    age: number
}

@InputType()
export class AuthorInput implements Partial<Author> {
    @Field()
    name: string

    @Field()
    age: number
}