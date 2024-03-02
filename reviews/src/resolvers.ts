export const resolvers = {
  Review: {
    game: ({ gameId }) => {
      return { id: gameId };
    },
    user: ({ userId }) => {
      return { id: userId };
    },
  },

  User: {
    reviews: ({ id }, __: any, { dataSources }) => {
      return dataSources.reviewsAPI.fetchUserReviews(id);
    },
  },

  Game: {
    reviews: ({ id }, __: any, { dataSources }) => {
      return dataSources.reviewsAPI.fetchGameReviews(id);
    },
  },

  Query: {
    reviews: (_: any, __: any, { dataSources }) => {
      return dataSources.reviewsAPI.fetchReviews();
    },
  },
};
