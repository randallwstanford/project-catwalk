import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import StyleSelector from './StyleSelector.jsx';
import StylePrice from './StylePrice.jsx';
import SizeSelector from './SizeSelector.jsx';
import { appContext } from '../../contexts/index.js';

export default function Product() {
  var app = useContext(appContext);
  var [currentStyle, setCurrentStyle] = useState({});

  return (
    <div>
      <div className="flex-container">
        <div id="image-gallery">images</div>
        <div id="product-information">
          <div className="review-flex-container">
            <span>
              <span id="star-checked">★</span>
              <span id="star-checked">★</span>
              <span id="star-checked">★</span>
              <span id="star">★</span>
              <span id="star">★</span>
            </span>
            <span>
              <h6>Read all reviews</h6>
            </span>
          </div>
          <div>
            <h4>{app.product.category}</h4>
          </div>
          <div>
            <h1>{app.product.name}</h1>
          </div>
          <StylePrice
            originalPrice={currentStyle.original_price}
            salePrice={currentStyle.sale_price}
          />
          <div id="style-name"><span className="bold-text">STYLE &gt;</span> {currentStyle.name}</div>
          <StyleSelector setCurrentStyle={setCurrentStyle} currentStyleId={currentStyle.style_id} />
          <SizeSelector key={currentStyle.style_id} sizes={currentStyle.skus} />
          <div className="add-to-bag-button">
            <button>ADD TO BAG</button>
          </div>
        </div>
      </div>
      <div id="product-overview">
        {app.product.description}
      </div>
    </div>
  );
}