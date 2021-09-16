import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function SizeSelector({ sizes }) {
  var barcodeList = Object.keys(sizes);
  console.log(barcodeList);

  return (
    <div className="size-quantity">
      <select>
        <option value="" disabled selected>Select Size</option>
        {barcodeList.map(barcode => {
          var sku = sizes[barcode];
          return (
            <option value={barcode}>{sku.size}</option>
          );
        })}
      </select>
      <input
        name="quantity"
        type="number"
        placeholder="1"
      />
    </div>
  );
}

SizeSelector.propTypes = {
  sizes: PropTypes.shape
};

SizeSelector.defaultProps = {
  sizes: {}
};