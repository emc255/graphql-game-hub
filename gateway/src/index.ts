import { ApolloServer } from "@apollo/server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "games", url: "http://localhost:4001" },
      { name: "reviews", url: "http://localhost:4002" },
      { name: "users", url: "http://localhost:4003" },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
  // NOTE: subscriptions not working in ts
  // subscriptions: false, // Disable subscriptions (not currently supported with Apollo Gateway)
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
