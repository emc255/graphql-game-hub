import users from "./users.json" assert { type: "json" };
import { saveData } from "../utils/dataService.js";
import * as path from "path";
import { nanoid } from "nanoid";

export default class GamesAPI {
  private users: any[];
  private FILEPATH: string;

  constructor() {
    const currentDir = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "../.."
    );

    this.users = users;
    this.FILEPATH = currentDir + "/datasource/users.json";
  }

  fetchUsers() {
    return users;
  }
  fetchUser(id: String) {
    return users.find((user) => user.id == id);
  }
}
