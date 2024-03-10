import { ApolloServer } from "@apollo/server";
import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "games", url: "http://localhost:4001" },
      { name: "reviews", url: "http://localhost:4002" },
      { name: "users", url: "http://localhost:4003" },
    ],
    introspectionHeaders: {
      Authorization: "Bearer abc123",
    },
  }),
});

const server = new ApolloServer({
  gateway,
  // context: ({ req }) => ({
  //   authorization: req.headers.authorization,
  // }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
