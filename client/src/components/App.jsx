import React from 'react';
import QandA from './Q&A.jsx';
import Product from './Product.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <QandA />
        <Product />
      </div>
    );
  }
}