import React, { useState } from 'react';

export default function Product() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <div className="flex-container">
        <div id="image-gallery">images</div>
        <div id="product-information">details
          <div>
            <h3>CATEGORY</h3>
          </div>
          <div>
            <h1>Expanded Product Name</h1>
          </div>
          <button>SELECT SIZE</button>
          <button>ADD TO BAG</button>
        </div>
      </div>
      <div id="product-overview">
        Product description goes here
      </div>
    </div>
  );
}