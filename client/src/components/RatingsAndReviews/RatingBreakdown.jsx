import React, { useState, useEffect, useContext } from 'react';
import { reviewsContext } from '../../contexts/index.js';
import * as utils from './utils/RatingsAndReviews.utils.js';

const RatingBreakdown = () => {
  const { reviews, setFiltered, filtered } = useContext(reviewsContext);
  const reviewData = utils.getReviewData(reviews);
  const filters = utils.makeFiltersLabel(filtered);

  const clearFilters = () => {
    setFiltered({
      'one': false, 'two': false, 'three': false, 'four': false, 'five': false
    });
  };

  const showFilters = () => {
    if (filtered.five
      || filtered.four
      || filtered.three
      || filtered.two
      || filtered.one) {
      return (
        <span id="appliedFilters">Applied Filters: {filters}<button className="linkButtons" onClick={clearFilters}>Clear Filters</button></span>
      );
    }
    return null;
  };

  if (reviews.length === 0) {
    return (
      <div>No reviews found for these filters
        <button className="linkButtons" onClick={clearFilters}> Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div id="RatingsBreakdown">
      <div id="RBStars">Rating Stars</div>
      <div id="RBRating">{reviewData.ratingNumber}</div>
      <h5 id="RatingBreakdown">Rating Breakdown</h5>
      {showFilters()}

      <button
        className="linkButtons"
        id="fiveStar"
        onClick={() => {
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': !filtered.five
          });
        }}
      >5 stars
      </button>
      <div className="borderBar" id="fiveStarBar"><div className="BarFill" style={{ width: `${reviewData.fivePercentage}%` }}></div></div>
      <div id="fiveStarCount">{reviewData.fiveStarReviews}</div>

      <button
        className="linkButtons"
        id="fourStar"
        onClick={() => {
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': !filtered.four, 'five': filtered.five
          });
        }}
      >4 stars
      </button>
      <div className="borderBar" id="fourStarBar"><div className="BarFill" style={{ width: `${reviewData.fourPercentage}%` }}></div></div>
      <div id="fourStarCount">{reviewData.fourStarReviews}</div>

      <button
        className="linkButtons"
        id="threeStar"
        onClick={() => {
          setFiltered({
            'one': filtered.one, 'two': filtered.two, 'three': !filtered.three, 'four': filtered.four, 'five': filtered.five
          });
        }}
      >3 stars
      </button>
      <div className="borderBar" id="threeStarBar"><div className="BarFill" style={{ width: `${reviewData.threePercentage}%` }}></div></div>
      <div id="threeStarCount">{reviewData.threeStarReviews}</div>

      <button
        className="linkButtons"
        id="twoStar"
        onClick={() => {
          setFiltered({
            'one': filtered.one, 'two': !filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': filtered.five
          });
        }}
      >2 stars
      </button>
      <div className="borderBar" id="twoStarBar"><div className="BarFill" style={{ width: `${reviewData.twoPercentage}%` }}></div></div>
      <div id="twoStarCount">{reviewData.twoStarReviews}</div>

      <button
        className="linkButtons"
        id="oneStar"
        onClick={() => {
          setFiltered({
            'one': !filtered.one, 'two': filtered.two, 'three': filtered.three, 'four': filtered.four, 'five': filtered.five
          });
        }}
      >1 star
      </button>
      <div className="borderBar" id="oneStarBar"><div className="BarFill" style={{ width: `${reviewData.onePercentage}%` }}></div></div>
      <div id="oneStarCount">{reviewData.oneStarReviews}</div>

      <div id="PercentReccomend">{`${reviewData.recommended}% of reviews reccomended this product`}</div>
    </div>
  );
};
export default RatingBreakdown;
