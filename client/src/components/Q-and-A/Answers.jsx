/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as utils from './utils/Answers.utils.js';

const Answers = ({ answers }) => {
  const [currentAnswersShows, showTwoMoreAnswers] = useState(2);
  const [currentIndex, setIndex] = useState();
  const answersArr = [];

  if (Object.keys(answers).length === 0) { return (<span> Not Answered Yet</span>); }

  for (let i = 0; i < Object.keys(answers).length; i++) {
    answersArr.push(answers[Object.keys(answers)[i]]);
  }

  return (
    <div>
      {answersArr.splice(0, currentAnswersShows).map((answer, index) => {
        return (
          <div key={index}>
            <span>
              {utils.checkForAnswer(answer)} &nbsp; | &nbsp;
              By: {utils.checkForSeller(answer)}
            </span>
          </div>
        );
      })}
      <button className="load-more-answers" onClick={utils.loadMoreAnswers}>Load More Answers</button>
    </div>
  );
};

export default Answers;