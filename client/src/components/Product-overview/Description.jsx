import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appContext } from '../../contexts/index.js';

export default function Description() {
  var app = useContext(appContext);
  return (
    <div className="product-description-container">
      <div id="product-description">
        <h3>{app.product.slogan}</h3>
        <p>{app.product.description}</p>
      </div>
      <div id="product-features">
        {app.product.features.map(({ feature, value }) => (
          <li key={feature + value}>{feature}: {value}</li>
        ))}
      </div>
    </div>
  );
}
