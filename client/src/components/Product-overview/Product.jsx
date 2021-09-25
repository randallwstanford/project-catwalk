import React, { useState, useContext } from 'react';
import StyleSelector from './StyleSelector.jsx';
import StylePrice from './StylePrice.jsx';
import SizeSelector from './SizeSelector.jsx';
import Photos from './Photos.jsx';
import Description from './Description.jsx';
import ReviewsOverview from './ReviewsOverview.jsx';
import { appContext } from '../../contexts/index.js';

export default function Product() {
  var app = useContext(appContext);
  var [currentStyle, setCurrentStyle] = useState({});
  var [expanded, setExpanded] = useState(false);

  return (
    <div id="product-container" className={expanded ? 'expanded-image' : undefined}>
      <div className="flex-container">
        <Photos photos={currentStyle.photos} toggleExpanded={() => setExpanded(!expanded)} />
        <div id="product-information">
          <ReviewsOverview />
          <h4>{app.product.category}</h4>
          <h1>{app.product.name}</h1>
          <StylePrice
            originalPrice={currentStyle.original_price}
            salePrice={currentStyle.sale_price}
          />
          <div id="style-name"><span className="bold-text">STYLE &gt;</span> {currentStyle.name}</div>
          <StyleSelector setCurrentStyle={setCurrentStyle} currentStyleId={currentStyle.style_id} />
          <SizeSelector key={currentStyle.style_id} sizes={currentStyle.skus} />
          <div className="add-to-bag-button"><button>ADD TO BAG</button></div>
        </div>
      </div>
      <Description />
    </div>
  );
}