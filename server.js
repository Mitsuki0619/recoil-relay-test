import express from "express";
import { graphqlHTTP } from "express-graphql";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    },
    allPosts: () => {
      return prisma.post.findMany();
    },
  },
};

const typeDefs = loadSchemaSync("./src/schema/__generated__/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
