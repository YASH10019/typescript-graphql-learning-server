import Express from "express";
import {graphqlHTTP} from "express-graphql";
import dotenv from "dotenv";
import {connect} from "./database/connect";
import helmet from "helmet";
import {buildSchema} from "type-graphql";
import {BookResolver} from "./graphql/resolver/bookResolver";
import {AuthorResolver} from "./graphql/resolver/authorResolver";

dotenv.config({path: __dirname + "/.env"});

const app = Express();
connect()

app.use(helmet());

const schema = buildSchema({
    resolvers: [BookResolver, AuthorResolver],
    emitSchemaFile: true
});

app.use("/graphql", graphqlHTTP({
    // @ts-ignore
    schema: schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
