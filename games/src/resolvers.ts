export const resolvers = {
  Query: {
    games: (_: any, __: any, { dataSources }) => {
      return dataSources.gamesAPI.fetchGames();
    },
    game: (_: any, { id }, { dataSources }) => {
      return dataSources.gamesAPI.fetchGame(id);
    },
  },
  Game: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.gamesAPI.fetchGame(id);
    },
  },
};
