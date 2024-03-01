import users from "./users.json" assert { type: "json" };

export default class GamesAPI {
  fetchUsers() {
    return users;
  }
  fetchUser(id: String) {
    return users.find((user) => user.id == id);
  }
}
