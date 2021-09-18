/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';
// import Answers from './Answers.jsx';

const AllQandA = (props) => {
  var { product } = useContext(appContext);

  const handleHelpful = (event) => {
    var questionId = event.target.getAttribute('class').split(' ')[1];
    axios.put(`/qa/questions/${questionId}/helpful`)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (
    props.questions.map((question, index) => {
      return (
        <div key={index}>
          <div className="qa-container">
            <div className="question"><b>Q:</b>{question.question_body}
              <div className="helpful">&nbsp;Helpful?&nbsp;
                <button className={`yes-button ${question.question_id}`} onClick={handleHelpful}>Yes</button>&nbsp;
                ( {question.question_helpfulness} )
                <button className="add-answer" onClick={utils.openAnswerModal}>Add Answer</button>
              </div>
            </div>
            <div className={`${question.question_id} answer`}><b>A:</b>
              {/* ------------- Answers Text ------------- */}
              <Answers answers={question.answers} questionId={question.question_id} />
            </div>
            {/* ------------- Date -------------*/}
            <div>&nbsp;<b>Date:</b>&nbsp;{utils.formatDate(question.question_date)}</div>
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;