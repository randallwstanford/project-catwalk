import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appContext } from '../../contexts/index.js';

function reviewCount(ratings) {
  return Object.keys(ratings).map(key => Number(ratings[key])).reduce((a, b) => a + b);
}

export default function ReviewsOverview() {
  var app = useContext(appContext);

  if (app.reviewsMeta.ratings === undefined) {
    return <div className="review-flex-container">loading reviews</div>;
  }

  return (
    <div className="review-flex-container">
      <span className="stars">
        <span id="star-checked">★</span>
        <span id="star-checked">★</span>
        <span id="star-checked">★</span>
        <span id="star">★</span>
        <span id="star">★</span>
      </span>
      <a href="#reviewList">Read all {reviewCount(app.reviewsMeta.ratings)} reviews</a>
    </div>
  );
}
