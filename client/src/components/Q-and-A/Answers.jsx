/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import * as utils from './utils/Answers.utils.js';

const Answers = ({ answers, questionId }) => {
  const [currentAnswersShows, showTwoMoreAnswers] = useState(2);
  const [currentIndex, setIndex] = useState(0);
  const answersArr = [];

  if (Object.keys(answers).length === 0) return (<span> Not Answered Yet</span>);

  for (let i = 0; i < Object.keys(answers).length; i++) {
    answersArr.push(answers[Object.keys(answers)[i]]);
  }

  const loadMoreAnswers = (event) => {
    var loadButon = document.getElementsByClassName(`${questionId} answer`)[0];
    var copmutedStyle = parseInt(window.getComputedStyle(loadButon).height.split('px')[0], 10);

    setIndex(questionId);
    showTwoMoreAnswers(currentAnswersShows + answersArr.length);

    if (answersArr.length <= 3) {
      event.target.style.visibility = 'hidden';
      if (answersArr.length === 0) loadButon.style.height = `${copmutedStyle - 60}px`;
      if (answersArr.length === 1) loadButon.style.height = `${copmutedStyle - 20}px`;
      if (answersArr.length === 3) loadButon.style.height = `${copmutedStyle + 60}px`;
    }
  };

  return (
    <div>
      {answersArr.splice(0, currentAnswersShows).map((answer, index) => {
        return (
          <div key={index}>
            <span>
              {utils.checkForAnswer(answer)} &nbsp; | &nbsp; By: &nbsp;
              <b>{utils.checkForSeller(answer)}</b> | &nbsp;
              <b>Date:</b>&nbsp;{utils.formatDate(answer.date)}
            </span>
            <div>&nbsp;Helpful?&nbsp;
              <a className={`${answer.id}`} onClick={() => utils.handleHelpfulAnswer(answer.id, event)} href=" ">Yes</a>
              &nbsp;( {utils.checkForHelpfulness(answer)} ) | &nbsp;&nbsp;
              <a className={`${answer.id}`} onClick={() => utils.handleReport(answer.id, event)} href=" ">&nbsp;Report</a>
            </div>
          </div>
        );
      })}
      <button className={`load-more-answers ${currentIndex}`} onClick={loadMoreAnswers}>Load More Answers</button>
    </div>
  );
};

export default Answers;