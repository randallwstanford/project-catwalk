import React from 'react';
import QandA from './Q-and-A/QandA.jsx';
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx';
import Product from './Product.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Product productId="44388" />
        <QandA />
        <RatingsReviews />
      </div>
    );
  }
}