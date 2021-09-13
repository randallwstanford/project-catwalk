import React, { useState } from 'react';
import Review from './Review.jsx';

const testData = [
  {
    'review_id': 5,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 7,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 6,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 9,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 8,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 2,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 5,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 7,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 6,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 9,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 8,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 2,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 5,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 7,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 6,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 9,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 8,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  },
  {
    'review_id': 2,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': false,
    'response': null,
    'body': 'Comfortable and practical.',
    'date': '2019-04-14T00:00:00.000Z',
    'reviewer_name': 'shortandsweeet',
    'helpfulness': 5,
    'photos': [{
      'id': 1,
      'url': 'urlplaceholder/review_5_photo_number_1.jpg'
    },
    {
      'id': 2,
      'url': 'urlplaceholder/review_5_photo_number_2.jpg'
    },
      // ...
    ]
  }
];

const ReviewList = () => {
  const [reviews, setReviews] = useState(testData);
  const [loadedReviews, setLoadedReviews] = useState(2);

  const moreReviews = () => {
    if (reviews.length > 2 && loadedReviews < reviews.length) {
      return <button onClick={() => setLoadedReviews(loadedReviews + 2)}>More Reviews</button>;
    }
    return null;
  };

  const anyReviews = () => {
    if (reviews.length > 0) {
      return <div> {reviews.length} reviews, Sorted By Sort</div>;
    }
    return null;
  };

  return (
    <div id="reviewList">
      {anyReviews()}
      <div id="reviews">
        {reviews.slice(0, loadedReviews).map((review) => <Review key={review.review_id} />)}
      </div>
      {moreReviews()}
      <button>Add a review +</button>
    </div>
  );
};


export default ReviewList;
