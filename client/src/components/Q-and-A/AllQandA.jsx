/* eslint-disable vars-on-top */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';

const AllQandA = ({ questions, product }) => {
  const handleReport = (event) => {
    const reportElement = event.target;
    var question_id = event.target.parentNode.getAttribute('class').split(' ')[1];
    reportElement.innerText = 'Reported ✓';
    event.preventDefault();
    axios.put(`/qa/questions/${question_id}/report`)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (
    questions.map((question, index) => {
      return (
        <div key={index}>
          <AddQuestionModal product={product} />
          <div className={`qa-container ${question.question_id}`}>
            {console.log(question)}
            <AddAnswerModal product={product} question={question} />
            <div className="question" title="question"><b>Q:</b>{question.question_body}
              <div className="helpful"> &nbsp;Helpful?&nbsp;
                <a href=" " onClick={utils.handleHelpful}>Yes</a>&nbsp;( {question.question_helpfulness} )&nbsp;
                <a className="report" href=" " onClick={handleReport}>&nbsp;Report</a>&nbsp;&nbsp;
                <button className={`add-answer ${question.question_id}`} onClick={() => utils.openAnswerModal(question.question_id)}>Add Answer</button>
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