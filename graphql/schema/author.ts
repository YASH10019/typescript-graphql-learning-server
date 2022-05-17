import {Field, InputType, ObjectType} from "type-graphql";

@ObjectType()
export class Author {
    @Field()
    name: string

    @Field()
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

}

@InputType()
export class AuthorInput implements Partial<Author> {
    @Field()
    name: string

    @Field()
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}