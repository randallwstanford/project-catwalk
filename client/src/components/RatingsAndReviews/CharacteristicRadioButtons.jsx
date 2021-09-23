import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { displayRatingDefinition } from './utils/RatingsAndReviews.utils';

const CharacteristicRadioButtons = ({ rating, setRating, labelName }) => {
  return (
    <div id="characteristic">
      <span>{displayRatingDefinition(labelName, rating)}</span>
      <label className="characteristicLabel" htmlFor="characteristics">{labelName}</label>
      <input onChange={() => { setRating(1); }} type="radio" className="radioButtonSpread" value="1" checked={rating === 1}></input>
      <input onChange={() => { setRating(2); }} type="radio" className="radioButtonSpread" value="2" checked={rating === 2}></input>
      <input onChange={() => { setRating(3); }} type="radio" className="radioButtonSpread" value="3" checked={rating === 3}></input>
      <input onChange={() => { setRating(4); }} type="radio" className="radioButtonSpread" value="4" checked={rating === 4}></input>
      <input onChange={() => { setRating(5); }} type="radio" className="radioButtonSpread" value="5" checked={rating === 5}></input>
    </div>
  );
};
CharacteristicRadioButtons.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired
};
export default CharacteristicRadioButtons;
