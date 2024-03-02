import reviews from "./reviews.json" assert { type: "json" };
import { saveData } from "../utils/dataService.js";
import * as path from "path";
import { nanoid } from "nanoid";

export default class ReviewsAPI {
  private reviews: any[];
  private FILEPATH: string;

  constructor() {
    const currentDir = path.resolve(
      path.dirname(new URL(import.meta.url).pathname),
      "../.."
    );

    this.reviews = reviews;
    this.FILEPATH = currentDir + "/datasource/reviews.json";
  }

  fetchReviews() {
    return this.reviews;
  }

  fetchReview(id: string) {
    return this.reviews.find((review) => review.id === id);
  }

  fetchGameReviews(gameId: string) {
    return this.reviews.filter((review) => review.gameId === gameId);
  }

  fetchUserReviews(userId: string) {
    return this.reviews.filter((review) => review.userId === userId);
  }

  addReview(rating: number, content: string, userId: string, gameId: string) {
    const newReview = {
      id: nanoid(),
      rating: rating,
      content: content,
      userId: userId,
      gameId: gameId,
    };
    this.reviews.push(newReview);
    saveData(this.reviews, this.FILEPATH);
    return newReview;
  }
}
