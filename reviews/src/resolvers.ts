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

  Mutation: {
    addReview: (
      _: any,
      { rating, content, userId, gameId },
      { dataSources }
    ) => {
      return dataSources.reviewsAPI.addReview(rating, content, userId, gameId);
    },
  },

  ReviewPayload: {
    __resolveType: (parent) => (parent.message ? "Error" : "Review"),
  },
};
