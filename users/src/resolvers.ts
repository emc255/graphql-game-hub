export const resolvers = {
  Query: {
    users: (_: any, __: any, { dataSources }) => {
      return dataSources.usersAPI.fetchUsers();
    },
  },

  User: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.usersAPI.fetchUser(id);
    },
  },
};
