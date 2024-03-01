import games from "./games.json" assert { type: "json" };

export default class GamesAPI {
  fetchGames() {
    return games;
  }

  fetchGame(id: String) {
    return games.find((game) => game.id === id);
  }
}
