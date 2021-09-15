import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function StyleSelector({ productId }) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productId}/styles`)
      .then(response => setStyles(response.data.results));
  }, []);

  return (
    <div className="style-selector">
      {styles.forEach(style => {
        <input
          type="radio"
          name={styles.name}
        />;
      })}
    </div>
  );
}

StyleSelector.propTypes = {
  productId: PropTypes.shape.isRequired
};
