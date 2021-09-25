import React from 'react';

const StarRating = ({ rating }) => {
  const ratings = {};
  if (rating >= 1 && rating < 1.25) {
    ratings.one = '100%';
    ratings.two = '0%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.25 && rating < 1.51) {
    ratings.one = '100%';
    ratings.two = '25%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.50 && rating < 1.76) {
    ratings.one = '100%';
    ratings.two = '50%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 1.75 && rating < 2) {
    ratings.one = '100%';
    ratings.two = '75%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2 && rating < 2.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '0%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.25 && rating < 2.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '25%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.50 && rating < 2.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '50%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 2.75 && rating < 3) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '75%';
    ratings.four = '0%';
    ratings.five = '0%';
  }

  if (rating >= 3 && rating < 3.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '0%';
    ratings.five = '0%';
  }
  if (rating >= 3.25 && rating < 3.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '25%';
    ratings.five = '0%';
  }
  if (rating >= 3.50 && rating < 3.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '50%';
    ratings.five = '0%';
  }
  if (rating >= 3.75 && rating < 4) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '75%';
    ratings.five = '0%';
  }
  if (rating >= 4 && rating < 4.25) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '0%';
  }
  if (rating >= 4.25 && rating < 4.51) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '25%';
  }
  if (rating >= 4.50 && rating < 4.76) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '50%';
  }
  if (rating >= 4.75 && rating < 5) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '75%';
  }
  if (rating === 5) {
    ratings.one = '100%';
    ratings.two = '100%';
    ratings.three = '100%';
    ratings.four = '100%';
    ratings.five = '100%';
  }

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
