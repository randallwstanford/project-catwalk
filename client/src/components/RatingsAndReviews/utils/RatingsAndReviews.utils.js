// Ratings Breakdown utils
export const getReviewData = (reviews) => {
  const reviewData = {
    totalReviews: reviews.length,
    oneStarReviews: 0,
    twoStarReviews: 0,
    threeStarReviews: 0,
    fourStarReviews: 0,
    fiveStarReviews: 0,
    recommended: 0,
    onePercentage: 0,
    twoPercentage: 0,
    threePercentage: 0,
    fourPercentage: 0,
    fivePercentage: 0,
    ratingNumber: 0
  };

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].rating === 1) {
      reviewData.oneStarReviews++;
    } else if (reviews[i].rating === 2) {
      reviewData.twoStarReviews++;
    } else if (reviews[i].rating === 3) {
      reviewData.threeStarReviews++;
    } else if (reviews[i].rating === 4) {
      reviewData.fourStarReviews++;
    } else if (reviews[i].rating === 5) {
      reviewData.fiveStarReviews++;
    }
    if (reviews[i].recommend === true) {
      reviewData.recommended++;
    }
  }

  reviewData.recommended = ((reviewData.recommended / reviewData.totalReviews) * 100).toFixed(1);
  if (reviewData.recommended === 'NaN') {
    reviewData.recommended = 0;
  }
  reviewData.onePercentage = Math.round(
    (reviewData.oneStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.twoPercentage = Math.round(
    (reviewData.twoStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.threePercentage = Math.round(
    (reviewData.threeStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.fourPercentage = Math.round(
    (reviewData.fourStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.fivePercentage = Math.round(
    (reviewData.fiveStarReviews / reviewData.totalReviews) * 100
  );
  reviewData.ratingNumber = (
    (reviewData.oneStarReviews * 1
    + reviewData.twoStarReviews * 2
    + reviewData.threeStarReviews * 3
    + reviewData.fourStarReviews * 4
    + reviewData.fiveStarReviews * 5)
    / reviewData.totalReviews
  );
  if (reviewData.ratingNumber === 'NaN') {
    reviewData.ratingNumber = 0;
  }
  return reviewData;
};

export const showFilters = (filtered) => {
  let filters = '';
  if (filtered.five) {
    filters += 'Five Stars ';
  }
  if (filtered.four) {
    filters += 'Four Stars ';
  }
  if (filtered.three) {
    filters += 'Three Stars ';
  }
  if (filtered.two) {
    filters += 'Two Stars ';
  }
  if (filtered.one) {
    filters += 'One Star ';
  }
  filters.slice(-1);
  return filters;
};

// review utils

export const getDate = (inDate) => {
  const months = {
    '01': 'January', '02': 'Feburary', '03': 'March',
    '04': 'April', '05': 'May', '06': 'June',
    '07': 'July', '08': 'August', '09': 'September',
    '10': 'October', '11': 'November', '12': 'December'
  };
  const day = inDate.slice(8, 10);
  const month = months[inDate.slice(5, 7)];
  const year = inDate.slice(0, 4);
  return `${month} ${day}, ${year}`;
};

