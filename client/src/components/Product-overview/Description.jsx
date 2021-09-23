import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ product }) {
  return (
    <div className="product-description-container">
      <div id="product-description">
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div>
      <div id="product-features">
        {product.features.map(({ feature, value }) => (
          <li key={feature + value}>{feature}: {value}</li>
        ))}
      </div>
    </div>
  );
}

Description.propTypes = {
  product: PropTypes.shape.isRequired
};
