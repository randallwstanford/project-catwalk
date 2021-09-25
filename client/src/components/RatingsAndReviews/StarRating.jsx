import React from 'react';
import { getStarRating } from './utils/RatingsAndReviews.utils.js';

const StarRating = ({ rating }) => {
  const ratings = getStarRating(rating);
  return (
    <div className="starRating">
      <span className="individualStar emptyStar" id="firstStar">☆</span>
      <span className="filledStar" id="innerFirstStar" style={{ width: `${ratings.one}` }}>★</span>
      <span className="individualStar emptyStar" id="secondStar">☆</span>
      <span className="filledStar" id="innerSecondStar" style={{ width: `${ratings.two}` }}>★</span>
      <span className="individualStar emptyStar" id="thirdStar">☆</span>
      <span className="filledStar" id="innerThirdStar" style={{ width: `${ratings.three}` }}>★</span>
      <span className="individualStar emptyStar" id="fourthStar">☆</span>
      <span className="filledStar" id="innerFourthStar" style={{ width: `${ratings.four}` }}>★</span>
      <span className="individualStar emptyStar" id="fifthStar">☆</span>
      <span className="filledStar" id="innerFifthStar" style={{ width: `${ratings.five}` }}>★</span>
    </div>
  );
};
export default StarRating;
