import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";

import ReviewsAPI from "../datasource/ReviewsAPI.js";

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { resolvers } from "./resolvers.js";

const typeDefs = gql(
  readFileSync(__dirname + "/schema.graphql", {
    // Using __dirname to construct the path
    encoding: "utf-8",
  })
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        reviewsAPI: new ReviewsAPI(),
      },
    };
  },
  listen: { port: 4002 },
});

console.log(`🚀  Server ready at: ${url}`);