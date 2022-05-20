import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Book} from "../schema/book";
import {Author} from "../schema/author";
import AuthorRepo from "../../database/repository/AuthorRepo";
import {IAuthor} from "../../database/model/author";


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
    async addAuthor(author: IAuthor): Promise<Author | null> {
        return await AuthorRepo.addAuthor(author);
    }
}