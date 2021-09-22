import React, { useState, useContext } from 'react';
import Review from './Review.jsx';
import { reviewsContext } from '../../contexts/index.js';

const ReviewList = () => {
  const { reviews } = useContext(reviewsContext);
  const [loadedReviews, setLoadedReviews] = useState(2);

  const moreReviews = () => {
    if (reviews.length > 2 && loadedReviews < reviews.length) {
      return <button onClick={() => setLoadedReviews(loadedReviews + 2)}>More Reviews</button>;
    }
    return null;
  };

  const anyReviews = () => {
    if (reviews.length > 0) {
      return <div> {reviews.length} reviews, Sorted By Sort</div>;
    }
    return null;
  };

  return (
    <div id="reviewList">
      {anyReviews()}
      <div id="reviews">
        {reviews.slice(0, loadedReviews).map((review) => (
          <Review
            key={review.review_id}
            review={review}
          />
        ))}
      </div>
      {moreReviews()}
      <button>Add a review +</button>
    </div>
  );
};
export default ReviewList;
