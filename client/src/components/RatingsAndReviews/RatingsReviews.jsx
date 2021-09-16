import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductCharacteristics from './ProductCharacteristics.jsx';
import { reviewsContext } from '../../contexts/index.js';

const RatingsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState({
    'one': false, 'two': false, 'three': false, 'four': false, 'five': false
  });

  // useEffect(() => {
  //   setReviews(testData);
  // }, []);

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

  useEffect(() => {
    axios.get('http://localhost:3000/reviews?product_id=44388')
      .then((response) => {
        console.log(response.data.results);
        setReviews(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

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
