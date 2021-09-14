import React from 'react';
import QandA from './QandA.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx';
import Product from './Product.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Product />
        <QandA />
        <AddAnswerModal />
        <RatingsReviews />
      </div>
    );
  }
}