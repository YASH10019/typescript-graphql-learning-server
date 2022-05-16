import Express from "express";
// const express = require('express');
import * as graphqlSchema from "./schema/schema.js";
// const graphqlSchema = require('./schema/schema');
import { graphqlHTTP } from "express-graphql";
// const { graphqlHTTP } = require('express-graphql');
import * as dotenv from "dotenv/config";
// require('dotenv/config');
import { connect } from "./database/connect.js";
// const connect = require('./database/connect');
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