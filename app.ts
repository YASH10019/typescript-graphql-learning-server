import Express from "express";
import {graphqlHTTP} from "express-graphql";
import dotenv from "dotenv";
import {connect} from "./database/connect";
import {graphqlSchema} from "./graphql/schema";
import cors from "cors";

async function main() {
    dotenv.config({path: __dirname + "/.env"});

    const port = process.env.PORT || 4000;
    const app = await Express();
    await connect()

// app.use(helmet());
    app.use(cors())
    await graphqlSchema;
    try {
        app.use("/graphql", graphqlHTTP({
            // @ts-ignore
            schema: graphqlSchema,
            graphiql: true
        }));
    } catch (e) {
        console.error(e);
    }


    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`http://localhost:${port}/graphql`);
    });
}
main();