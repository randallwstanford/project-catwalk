import React from 'react';
import * as utils from './utils/Answers.utils.js';

const Answers = (props) => {
  return (
    <span> &nbsp;
      <span> {utils.checkForAnswer(props)}</span>
      <span> By: {utils.checkForSeller(props)}</span>
      <br /> &nbsp; &nbsp; &nbsp;
    </span>
  );
};

export default Answers;