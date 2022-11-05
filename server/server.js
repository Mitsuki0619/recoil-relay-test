import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import cors from "cors";
import { resolvers } from "./resolvers.js";

const typeDefs = readFileSync("../src/schema/__generated__/schema.graphql", {
  encoding: "utf8",
});

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
