import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function createQuantities(currentQuantity) {
  var i;
  var quantities = [<option value="1" selected>1</option>];
  for (i = 2; i <= currentQuantity && i <= 15; i++) {
    quantities.push(<option value={i}>{i}</option>);
  }
  return quantities;
}

export default function SizeSelector({ sizes }) {
  const [currentSku, setCurrentSku] = useState(null);

  return (
    <div className="size-quantity">
      <select value={currentSku} onChange={(event) => setCurrentSku(event.target.value)}>
        <option value="" disabled selected>Select Size</option>
        {Object.keys(sizes).map(barcode => {
          var sku = sizes[barcode];
          return (
            <option key={barcode} value={barcode}>{sku.size}</option>
          );
        })}
      </select>
      <select>
        {
          (currentSku === null || sizes[currentSku].quantity === 0)
            ? <option value="" disabled selected>-</option>
            : createQuantities(sizes[currentSku].quantity)
        }
      </select>

    </div>
  );
}

SizeSelector.propTypes = {
  sizes: PropTypes.objectOf(PropTypes.shape({
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }))
};

SizeSelector.defaultProps = {
  sizes: {}
};