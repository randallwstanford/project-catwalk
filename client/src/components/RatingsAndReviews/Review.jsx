import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from './utils/RatingsAndReviews.utils.js';

const Review = (props) => {
  const { review } = props;

  return (
    <div id="ReviewContainer">
      <div id="starRating">StarRating</div>
      <div id="verifiedPurchaser">Verified Purchaser</div>
      <span id="reviewUserName">{review.reviewer_name}</span>
      <span id="reviewDate">{getDate(review.date)}</span>
      <span id="reviewSummary">{review.summary}</span>
      <p id="reviewBody">{review.body}</p>
      <span id="reviewHelpful">Helpful?
        <button className="helpfulnessLinks" id="reviewYes">Yes({review.helpfulness})</button>
        <button className="helpfulnessLinks" id="reviewNo">No({review.helpfulness})</button>
      </span>
      <button id="reviewReport">Report</button>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};
export default Review;
