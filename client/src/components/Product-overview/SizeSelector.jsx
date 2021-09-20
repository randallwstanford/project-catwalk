import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function createQuantities(currentQuantity) {
  var i;
  var quantities = [<option key="1" value="1">1</option>];
  for (i = 2; i <= currentQuantity && i <= 15; i++) {
    quantities.push(<option key={i} value={i}>{i}</option>);
  }
  return quantities;
}

export default function SizeSelector({ sizes }) {
  const [currentSku, setCurrentSku] = useState('DEFAULT');

  var outOfStock = true;
  Object.keys(sizes).forEach(barcode => {
    if (sizes[barcode].quantity !== 0) {
      outOfStock = false;
    }
  });

  if (outOfStock) {
    return <div className="size-quantity">OUT OF STOCK</div>;
  }

  return (
    <div className="size-quantity">
      <select value={currentSku} onChange={(event) => setCurrentSku(event.target.value)}>
        <option value="DEFAULT" disabled>SELECT SIZE</option>
        {Object.keys(sizes).map(barcode => {
          var sku = sizes[barcode];
          return (
            (sku.quantity !== 0) && <option key={barcode} value={barcode}>{sku.size}</option>
          );
        })}
      </select>
      <select defaultValue="1">
        {
          (currentSku === 'DEFAULT' || sizes[currentSku].quantity === 0)
            ? <option value="1" disabled>-</option>
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