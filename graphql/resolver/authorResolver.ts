import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Book} from "../schema/book";
import {Document, Types} from "mongoose";
import {Author} from "../schema/author";
import AuthorRepo from "../../database/repository/AuthorRepo";
import {IAuthor} from "../../database/model/author";


@Resolver(of => Author)
export class AuthorResolver {
    // constructor(private authorRepo: AuthorRepo) {
    // }

    @Query(returns => [Author], {nullable: true})
    async getAuthors(): Promise<(Document<unknown, any, IAuthor> & IAuthor & { _id: Types.ObjectId })[]> {
        return await AuthorRepo.getAllAuthors();
    }

    @Query(returns => Book, {nullable: true})
    async getAuthorById(@Arg("id") id: string): Promise<(Document<unknown, any, IAuthor> & IAuthor & { _id: Types.ObjectId }) | null> {
        return await AuthorRepo.findById(id);
    }

    @Mutation(returns => Author)
    async addAuthor(author: IAuthor): Promise<IAuthor> {
        return await AuthorRepo.addAuthor(author);
    }
}