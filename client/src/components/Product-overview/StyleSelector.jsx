import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function StyleSelector({ setCurrentStyle, currentStyle }) {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products/44388/styles')
      .then(response => {
        var receivedStyles = response.data.results;
        setStyles(receivedStyles);
        setCurrentStyle(receivedStyles[0]);
      });
  }, []);

  return (
    <div className="style-selector">
      {styles.map(style => (
        <div className="style" key={style.style_id} onChange={() => setCurrentStyle(style)}>
          <input
            type="radio"
            id={`style_${style.style_id}`}
            name="style_id"
            value={style.style_id}
            checked={style.style_id === currentStyle.style_id}
          />
          <label htmlFor={`style_${style.style_id}`}>
            { }
            <img src="resources/Check_mark_9x9.svg" alt="checkmark" className="checkmark" />
            <img src={style.photos[0].thumbnail_url} alt={style.name} className="rounded" />
          </label>
        </div>
      ))}
    </div>
  );
}

StyleSelector.propTypes = {
  setCurrentStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.shape.isRequired
};

