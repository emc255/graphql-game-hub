import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServerPluginInlineTraceDisabled } from "@apollo/server/plugin/disabled";
import gql from "graphql-tag";

import GamesAPI from "../datasource/GamesAPI.js";

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
  plugins: [ApolloServerPluginInlineTraceDisabled()],
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        gamesAPI: new GamesAPI(),
      },
    };
  },
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);
