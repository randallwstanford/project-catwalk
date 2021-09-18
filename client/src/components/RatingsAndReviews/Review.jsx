import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from './utils/RatingsAndReviews.utils.js';

const Review = (props) => {
  return (
    <div id="ReviewContainer">
      <div id="starRating">StarRating</div>
      <div id="verifiedPurchaser">Verified Purchaser</div>
      <span id="reviewUserName">{props.review.reviewer_name}</span>
      <span id="reviewDate">{getDate(props.review.date)}</span>
      <span id="reviewSummary">{props.review.summary}</span>
      <p id="reviewBody">{props.review.body}</p>
      <span id="reviewHelpful">Helpful?
        <button className="helpfulnessLinks" id="reviewYes">Yes({props.review.helpfulness})</button>
        <button className="helpfulnessLinks" id="reviewNo">No({props.review.helpfulness})</button>
      </span>
      <button id="reviewReport">Report</button>
    </div>
  );
};
export default Review;
