/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import utils from '../../utils/utils.js';
import Answers from './Answers.jsx';
import data from './data.json';

const AllQandA = (props) => {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    console.log(utils.getQuestions(props));
  }, []);


  const openModal = (event) => { document.getElementById('modal').style.cssText = 'visibility: visible'; };
  const formatDate = (date) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });
  const checkForHelpfulness = (answer) => {
    if (answer === undefined) { return 0; }
    return answer.helpfulness;
  };

  return (
    questions.map((questionsResults) => {
      return (
        questionsResults.results.map((question, index) => {
          return (
            <div className="qa-container" key={index}>
              <div className="question"><b>Q:</b> {question.question_body}
                <div className="helpful">Helpful?
                  <button className="yes-button"> Yes </button> ( {question.question_helpfulness} )
                  <button className="add-answer" onClick={openModal}>Add Answer</button>
                </div>
              </div>
              <div className="answer"><b>A:</b>
                {/* ------------- Answers Text ------------- */}
                <span>
                  <Answers props={question.answers[Object.keys(question.answers)[0]]} />
                  <Answers props={question.answers[Object.keys(question.answers)[1]]} />
                </span>
              </div>
              {/* ------------- Date -------------*/}
              <div> {formatDate(question.question_date)}</div>
              <div> Helpful?
                <button className="yes-button" onClick={() => console.log('incremenet dis')}> Yes </button>
                ( {checkForHelpfulness(question.answers[Object.keys(question.answers)[0]])} )
                | Report
              </div>
            </div>
          );
        })
      );
    })
  );
};

export default AllQandA;