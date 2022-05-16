import Express from "express";
import * as graphqlSchema from "./schema/schema.js";
import { graphqlHTTP } from "express-graphql";
import "dotenv/config";
import { connect } from "./database/connect.js";
import helmet from "helmet";


const app = Express();
connect()

app.use(helmet());
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});