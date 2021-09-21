import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Photos({ photos }) {
  if (photos.length === 0) {
    return (
      <div id="image-gallery">
        no photos
      </div>
    );
  }
  return (
    <div id="image-gallery">
      <img src={photos[0].url} alt="" className="photo" />
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array
};

Photos.defaultProps = {
  photos: []
};

