import React from 'react';
import Review from './Review.jsx';

const ReviewList = () => (
  <div>
    <div>
      <div>Number of Reviews, Sorted By Sort</div>
      <Review />
      <button>More Reviews</button>
      <button>Add a review +</button>
    </div>
  </div>
);
export default ReviewList;
