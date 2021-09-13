import React from 'react';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductCharacteristics from './ProductCharacteristics.jsx';

const RatingsReviews = () => (
  <div id="RRcontainer">
    <ReviewList id="ReviewList" />
    <RatingBreakdown id="RatingsBreakdown" />
    <ProductCharacteristics id="ProductCharacteristics" />
  </div>
);
export default RatingsReviews;