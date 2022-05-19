"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = require("./database/connect");
const helmet_1 = __importDefault(require("helmet"));
const type_graphql_1 = require("type-graphql");
const bookResolver_1 = require("./graphql/resolver/bookResolver");
const authorResolver_1 = require("./graphql/resolver/authorResolver");
dotenv_1.default.config({ path: __dirname + "/.env" });
const app = (0, express_1.default)();
(0, connect_1.connect)();
app.use((0, helmet_1.default)());
const schema = (0, type_graphql_1.buildSchema)({
    resolvers: [bookResolver_1.BookResolver, authorResolver_1.AuthorResolver],
    emitSchemaFile: true
});
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    // @ts-ignore
    schema: schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
