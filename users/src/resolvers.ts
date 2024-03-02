export const resolvers = {
  User: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.usersAPI.fetchUser(id);
    },
  },

  Query: {
    users: (_: any, __: any, { dataSources }) => {
      return dataSources.usersAPI.fetchUsers();
    },
  },
};
