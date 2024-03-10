export const resolvers = {
  User: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.usersAPI.fetchUser(id);
    },
  },

  Query: {
    me: (_: any, __: any, { currentUser }) => currentUser,
    users: (_: any, __: any, { dataSources }) =>
      dataSources.usersAPI.fetchUsers(),
  },
};
