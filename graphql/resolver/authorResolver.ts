import {Query, Resolver} from "type-graphql";
import {Book} from "../schema/book";
import {Document, Types} from "mongoose";
import {Author} from "../schema/author";
import AuthorRepo from "../../database/repository/AuthorRepo";
import {IAuthor} from "../../database/model/author";


@Resolver(of => Author)
export class AuthorResolver {
    @Query(returns => [Author], {nullable: true})
    async getAuthors(): Promise<Author[]> {
        return await AuthorRepo.getAllAuthors();
    }

    @Query(returns => Book, {nullable: true})
    async getAuthorById(id: Types.ObjectId): Promise<(Document<unknown, any, IAuthor> & IAuthor & { _id: Types.ObjectId }) | null> {
        return await AuthorRepo.findById(id);
    }
}