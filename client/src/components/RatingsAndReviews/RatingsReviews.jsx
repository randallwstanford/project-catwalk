import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductCharacteristics from './ProductCharacteristics.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import { reviewsContext, appContext } from '../../contexts/index.js';

const RatingsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState([]);
  const [filtered, setFiltered] = useState({
    'one': false, 'two': false, 'three': false, 'four': false, 'five': false
  });
  const [modalVisibility, setModalVisibility] = useState('hidden');
  const [sort, setSort] = useState('relevant');
  const { product } = useContext(appContext);

  useEffect(() => {
    const filteredReviews = [];
    for (let i = 0; i < allReviews.length; i++) {
      if ((filtered.five && allReviews[i].rating === 5)
      || (filtered.four && allReviews[i].rating === 4)
      || (filtered.three && allReviews[i].rating === 3)
      || (filtered.two && allReviews[i].rating === 2)
      || (filtered.one && allReviews[i].rating === 1)) {
        filteredReviews.push(allReviews[i]);
      }
    }
    if (filtered.one || filtered.two || filtered.three || filtered.four || filtered.five) {
      setReviews(filteredReviews);
    }
    if (!filtered.one && !filtered.two && !filtered.three && !filtered.four && !filtered.five) {
      setReviews(allReviews);
    }
  }, [filtered]);

  useEffect(() => {
    axios.get(`/reviews?product_id=${product.id}&sort=${sort}&count=1000`)
      .then((response) => {
        setReviews(response.data.results);
        setAllReviews(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [sort]);

  useEffect(() => {
    axios.get(`/reviews?product_id=${product.id}&sort=${sort}&count=100 0`)
      .then((response) => {
        setReviews(response.data.results);
        setAllReviews(response.data.results);
      })
      .catch((error) => console.log(error));

    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then((response) => {
        setReviewsMeta(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (allReviews.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <reviewsContext.Provider value={{
      reviews,
      filtered,
      setFiltered,
      reviewsMeta,
      modalVisibility,
      setModalVisibility,
      sort,
      setSort
    }}
    >
      <div id="RRcontainer">
        <ReviewList />
        <RatingBreakdown />
        <ProductCharacteristics />
        <AddReviewModal />
      </div>
    </reviewsContext.Provider>
  );
};
export default RatingsReviews;
