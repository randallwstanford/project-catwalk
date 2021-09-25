
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QandA from './Q-and-A/QandA.jsx';
import RatingsReviews from './RatingsAndReviews/RatingsReviews.jsx';
import Product from './Product-overview/Product.jsx';
import Header from './Header.jsx';
import { appContext } from '../contexts/index.js';

export default function App() {
  const [product, setProduct] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products/44388')
      .then(response => setProduct(response.data));
  }, []);

  useEffect(() => {
    if (product !== null) {
      axios.get(`/reviews/meta?product_id=${product.id}`)
        .then(response => setReviewsMeta(response.data))
        .catch(error => console.log(error));
    }
  }, [product]);

  if (product === null) {
    return (
      <div>
        loading...
      </div>
    );
  }

  return (
    <appContext.Provider value={{ product, reviewsMeta }}>
      <div>
        <Header />
        <Product />
        <QandA />
        <RatingsReviews />
      </div>
    </appContext.Provider>
  );
}
