/* eslint-disable vars-on-top */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';

const AllQandA = ({ questions }) => {
  return (
    questions.map((question, index) => {
      return (
        <div key={index}>
          <div className="qa-container">
            <div className="question" title="question"><b>Q:</b>{question.question_body}
              <div className="helpful">
                &nbsp;Helpful?&nbsp;
                <a className={`${question.question_id}`} href=" " onClick={utils.handleHelpful}>Yes</a>&nbsp;
                ( {question.question_helpfulness} )
                <button className={`add-answer ${question.question_id}`} onClick={utils.openAnswerModal}>Add Answer</button>
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