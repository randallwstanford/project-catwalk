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
    var uniqueId = answers[Object.keys(answers)[0]].id;
    setIndex(uniqueId);
    showTwoMoreAnswers(currentAnswersShows + answersArr.length);
    if (answersArr.length <= 3) {
      event.target.style.visibility = 'hidden';
      event.target.parentNode.parentNode.style.height = 120;
    }
  };


  const handleReport = (event) => {
    var question_id = event.target.getAttribute('class').split(' ')[0];
    var reportElement = event.target;
    reportElement.innerText = 'Reported ✓';
    event.preventDefault();
    // DO NOT COMMENT OUT YET WILL NOT SHOW REPORTED QUESTION
    // axios.put(`/qa/questions/${question_id}/report`)
    //   .then((res) => console.log(res.status))
    //   .catch((err) => console.log(err));
  };

  const handleHelpfulAnswer = (event) => {
    // Getting response 200 for put request but not incrementing answer
    var answerId = event.target.getAttribute('class').split(' ')[0];
    axios.put(`/qa/questions/${answerId}/helpful`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  return (
    <div>
      {answersArr.splice(0, currentAnswersShows).map((answer, index) => {
        return (
          <div key={index}>
            <span>
              {utils.checkForAnswer(answer)} &nbsp; | &nbsp;
              By: <b>{utils.checkForSeller(answer)}</b>
            </span>
            <div>&nbsp;Helpful?&nbsp;
              {/* Getting response 200 for put request but not incrementing answer  */}
              <button
                className={`${answer.id} yes-button`}
                onClick={handleHelpfulAnswer}
              >Yes
              </button>&nbsp;
              ( {utils.checkForHelpfulness(answer)} ) |&nbsp;&nbsp;
              <a
                className={`${questionId}`}
                href=" "
                onClick={handleReport}
              >Report
              </a>
            </div>
          </div>
        );
      })}
      <button className={`load-more-answers load-more-answers${currentIndex}`} onClick={loadMoreAnswers}>Load More Answers</button>
    </div>
  );
};

export default Answers;