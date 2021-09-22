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
    var question_Id = document.getElementsByClassName(questionId)[0].getAttribute('class').split(' ')[0];
    var loadButon = document.getElementsByClassName(`${question_Id} answer`)[0];
    var copmutedStyle = parseInt(window.getComputedStyle(loadButon).height.split('px')[0], 10);

    setIndex(question_Id);
    showTwoMoreAnswers(currentAnswersShows + answersArr.length);

    if (answersArr.length < 3) {
      event.target.style.visibility = 'hidden';
      if (answersArr.length === 2) { loadButon.style.height = (copmutedStyle + 20); }
      if (answersArr.length < 2) { loadButon.style.height = (copmutedStyle - 60); }
    }
  };


  const handleReport = (event) => {
    var answer_id = event.target.getAttribute('class').split(' ')[0];
    console.log(answer_id)
    var reportElement = event.target;
    reportElement.innerText = 'Reported ✓';
    event.preventDefault();
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
              <a
                className={`${answer.id}`}
                onClick={handleHelpfulAnswer}
                href=" "
              >Yes
              </a>&nbsp;
              ( {utils.checkForHelpfulness(answer)} ) |&nbsp;&nbsp;
              {console.log(answer)}
              <a
                className={`${answer.id}`}
                href=" "
                onClick={handleReport}
              >Report
              </a>
            </div>
          </div>
        );
      })}
      <button
        className={`load-more-answers ${currentIndex}`}
        onClick={loadMoreAnswers}
      >
        Load More Answers
      </button>
    </div>
  );
};

export default Answers;