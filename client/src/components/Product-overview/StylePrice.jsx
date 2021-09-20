import React from 'react';
import PropTypes from 'prop-types';

export default function StylePrice({ originalPrice, salePrice }) {
  function discount() {
    return (
      <span>
        <span id="discounted-price">{salePrice}</span>
        <span id="original-price">{originalPrice}</span>
      </span>
    );
  }

  return (
    <div className="price">$
      {(salePrice === null)
        ? <span>{originalPrice}</span>
        : discount()}
    </div>
  );
}

StylePrice.propTypes = {
  originalPrice: PropTypes.string,
  salePrice: PropTypes.string
};

StylePrice.defaultProps = {
  originalPrice: null,
  salePrice: null
};
