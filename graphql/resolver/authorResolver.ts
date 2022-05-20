import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Book} from "../schema/book";
import {Author, AuthorInput} from "../schema/author";
import AuthorRepo from "../../database/repository/AuthorRepo";


@Resolver(of => Author)
export class AuthorResolver {
    // constructor(private authorRepo: AuthorRepo) {
    // }

    @Query(returns => [Author], {nullable: true})
    async getAuthors(): Promise<Author[] | null> {
        return AuthorRepo.getAllAuthors();
    }

    @Query(returns => Book, {nullable: true})
    async getAuthorById(@Arg("id") id: string): Promise<Author | null> {
        return AuthorRepo.findById(id);
    }

    @Mutation(returns => Author)
    async addAuthor(@Arg("author") authorInput: AuthorInput): Promise<Author | null> {
        return AuthorRepo.addAuthor(authorInput);
    }
}