import {buildSchemaSync} from "type-graphql";
import {BookResolver} from "./resolver/bookResolver";
import {AuthorResolver} from "./resolver/authorResolver";

const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
    {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2'},
    {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3'},
    {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3'}
];

const authors = [
    {name: 'Patrick Rothfuss', age: 44, id: '1'},
    {name: 'Brandon Sanderson', age: 42, id: '2'},
    {name: 'Terry Pratchett', age: 66, id: '3'}
];

export const graphqlSchema = buildSchemaSync({
    resolvers: [BookResolver, AuthorResolver],
    emitSchemaFile: true
});

/*
const BookType= new GraphQL.GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQL.GraphQLID},
        name: {type: GraphQL.GraphQLString},
        genre: {type: GraphQL.GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                return _.find(authors, {id: parent.authorId});
            }
        }
    })
});

const AuthorType= new GraphQL.GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQL.GraphQLID},
        name: {type: GraphQL.GraphQLString},
        age: {type: GraphQL.GraphQLInt},
        books: {
            type: new GraphQL.GraphQLList(BookType),
            resolve(parent, args) {
                console.log(parent);
                return _.filter(books, {authorId: parent.id});
            }
        }
    })
});

const RootQueryType= new GraphQL.GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: {id: {type: GraphQL.GraphQLID}},
            resolve(parent, args) {
                //code to get data from database.
                console.log(typeof (args.id));
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQL.GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id: args.id});
            }
        },
        books: {
            type: new GraphQL.GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQL.GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    })
});

const graphqlSchema = new GraphQL.GraphQLSchema({
    query: RootQueryType
});

export {graphqlSchema};
*/
