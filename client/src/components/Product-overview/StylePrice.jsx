import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function StylePrice({ currentStyle }) {
  console.log(currentStyle);

  function discount() {
    return (
      <span>
        <span id="discounted-price">{currentStyle.sale_price}</span>
        <del>{currentStyle.original_price}</del>
      </span>
    );
  }

  return (
    <div className="price">$
      {(currentStyle.sale_price === null)
        ? <span>{currentStyle.original_price}</span>
        : discount()}
    </div>
  );
}

StylePrice.propTypes = {
  currentStyle: PropTypes.shape.isRequired
};

