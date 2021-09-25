import React, { useState, useContext } from 'react';
import Review from './Review.jsx';
import { reviewsContext } from '../../contexts/index.js';
import { toggleModal } from './utils/RatingsAndReviews.utils.js';

const ReviewList = () => {
  const {
    reviews, modalVisibility, setModalVisibility, sort, setSort
  } = useContext(reviewsContext);
  const [loadedReviews, setLoadedReviews] = useState(2);

  const moreReviews = () => {
    if (reviews.length > 2 && loadedReviews < reviews.length) {
      return <button onClick={() => setLoadedReviews(loadedReviews + 2)}>More Reviews</button>;
    }
    return null;
  };

  const anyReviews = () => {
    if (reviews.length > 0) {
      return (
        <div>
          {reviews.length} reviews, Sorted By
          <select id="sortDropdown" onChange={() => { setSort(event.target.value); }}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">newest</option>
          </select>
        </div>
      );
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
      <button
        id="addReviewButton"
        onClick={() => { toggleModal(modalVisibility, setModalVisibility); }}
      >Add a review +
      </button>
    </div>
  );
};
export default ReviewList;
