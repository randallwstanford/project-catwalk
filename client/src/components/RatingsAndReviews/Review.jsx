import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getDate, handleReport, handleYes } from './utils/RatingsAndReviews.utils.js';

const Review = (props) => {
  const { review } = props;
  const [reviewHelpfulness, setReviewHelpfulness] = useState(review.helpfulness);

  return (
    <div id="ReviewContainer">
      <div id="starRating">StarRating</div>
      <div id="verifiedPurchaser">Verified Purchaser</div>
      <span id="reviewUserName">{review.reviewer_name}</span>
      <span id="reviewDate">{getDate(review.date)}</span>
      <span id="reviewSummary">{review.summary}</span>
      <p id="reviewBody">{review.body}</p>
      <span id="reviewHelpful">Helpful?
        <button className="linkButtons" id="reviewYes" onClick={() => { handleYes(event, review, reviewHelpfulness, setReviewHelpfulness)}}>Yes({reviewHelpfulness})</button>
      </span>
      <button className="linkButtons" id="reviewReport" onClick={() => { handleReport(event, review.review_id); }}>Report</button>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};
export default Review;
