/* eslint-disable no-restricted-globals */
/* eslint-disable vars-on-top */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import * as utils from './utils/AllQandA.utils.js';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import Answers from './Answers.jsx';


const AllQandA = ({ questions, product }) => {
  return (
    questions.map((question, index) => {
      return (
        <div key={index}>
          <AddQuestionModal product={product} />
          <AddAnswerModal product={product} question={question} />
          <div className={`qa-container ${question.question_id}`}>
            <div className="question" title="question"><b>Q:</b>{question.question_body}
              <div className="helpful"> &nbsp;Helpful?&nbsp;
                <a onClick={utils.handleHelpful} href=" ">Yes</a>&nbsp;( {question.question_helpfulness} )&nbsp;
                <a onClick={utils.handleReport} href=" " className="report">&nbsp;Report</a>&nbsp;&nbsp;
                <button className={`add-answer ${question.question_id}`} onClick={() => { utils.openAnswerModal(event, question.question_id); }}>Add Answer</button>
              </div>
            </div>
            <div className={`${question.question_id} answer`}><b>A:</b>
              <Answers answers={question.answers} questionId={question.question_id} />
            </div>
            <span>&nbsp;<b>Date:</b>&nbsp;{utils.formatDate(question.question_date)}</span>&nbsp;
            By: <span>{question.asker_name}</span>
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;