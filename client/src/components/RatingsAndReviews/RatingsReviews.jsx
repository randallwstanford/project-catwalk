import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductCharacteristics from './ProductCharacteristics.jsx';
import { reviewsContext } from '../../contexts/index.js';

const testData = [
  {
    'review_id': 1,
    'rating': 1,
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
    'rating': 2,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 3,
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
    'review_id': 4,
    'rating': 4,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'rating': 5,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 18,
    'rating': 5,
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
    'rating': 5,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'rating': 5,
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
    'rating': 5,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'rating': 4,
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
    'review_id': 10,
    'rating': 4,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 11,
    'rating': 4,
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
    'review_id': 12,
    'rating': 3,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 13,
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
    'review_id': 14,
    'rating': 2,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 15,
    'rating': 1,
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
    'review_id': 16,
    'rating': 2,
    'summary': "I'm enjoying wearing these shades",
    'recommend': true,
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
    'review_id': 17,
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

const RatingsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState({
    'one': false, 'two': false, 'three': false, 'four': false, 'five': false
  });

  useEffect(() => {
    setReviews(testData);
  }, []);

  // useEffect(() => {
  // const filteredReviews = [];
  //   for (let i = 0; i < reviews.length; i++) {
  //     if ((filtered.five && reviews[i].rating === 5)
  //     || (filtered.four && reviews[i].rating === 4)
  //     || (filtered.three && reviews[i].rating === 3)
  //     || (filtered.two && reviews[i].rating === 2)
  //     || (filtered.one && reviews[i].rating === 1)) {
  //       filteredReviews.push(reviews[i]);
  //     }
  //   }
  //   console.log(filtered);
  //   console.log(filteredReviews);

  //   setReviews(filteredReviews);
  // }, [filteredReviews]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/reviews?product_id=44388')
  //     .then((response) => {
  //       // console.log(response.data.results);
  //       setReviews(response.data.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  if (reviews.length === 0) {
    return <div>loading</div>;
  }
  return (
    <reviewsContext.Provider value={{ reviews, filtered, setFiltered }}>
      <div id="RRcontainer">
        <ReviewList />
        <RatingBreakdown />
        <ProductCharacteristics />
      </div>
    </reviewsContext.Provider>
  );
};
export default RatingsReviews;
