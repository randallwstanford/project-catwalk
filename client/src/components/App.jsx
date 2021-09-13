import React from 'react';
import QandA from './Q&A.jsx';
import RatingsReviews from './Ratings&Reviews/RatingsReviews.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <QandA />
        <RatingsReviews />
      </div>
    );
  }
}