import reviews from "./reviews.json" assert { type: "json" };

export default class ReviewsAPI {
  fetchReviews() {
    return reviews;
  }

  fetchReview(id: String) {
    return reviews.find((review) => review.id === id);
  }

  fetchGameReviews(gameId: String) {
    return reviews.filter((review) => review.gameId === gameId);
  }

  fetchUserReviews(userId: String) {
    return reviews.filter((review) => review.userId === userId);
  }
}
