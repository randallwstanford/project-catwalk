/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';

const AllQandA = (props) => {
  return (
    props.questions.map((question, index) => {
      return (
        <div key={index}>
          <div className={`qa-container${index} qa-container`}>
            <div className="question"><b>Q:</b> {question.question_body}
              <div className="helpful">Helpful?&nbsp;
                <button className="yes-button">Yes</button>
                ( {question.question_helpfulness} )
                <button className="add-answer" onClick={utils.openAnswerModal}>
                  Add Answer
                </button>
              </div>
            </div>
            <div className={`answer${index} answer`}><b>A:</b>
              {/* ------------- Answers Text ------------- */}
              <Answers answers={question.answers} />
            </div>
            {/* ------------- Date -------------*/}
            <div>&nbsp;<b>Date:</b> {utils.formatDate(question.question_date)}</div>
            <div>&nbsp;Helpful?
              <button className="yes-button" onClick={() => console.log('incremenet dis')}> Yes </button>
              ( {utils.checkForHelpfulness(question.answers[Object.keys(question.answers)[0]])} )
              | Report
            </div>
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;