/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import { appContext } from '../../contexts/index.js';
import Answers from './Answers.jsx';

const AllQandA = () => {
  const { product } = useContext(appContext);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => {
        // sort greatest to least in helpfulness
        setQuestion((res.data.results).sort((a, b) => b.question_helpfulness - a.question_helpfulness));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    questions.map((question, index) => {
      return (
        <div className="qa-container" key={index}>
          <div className="question"><b>Q:</b> {question.question_body}
            <div className="helpful">Helpful?&nbsp;
              <button className="yes-button">Yes</button>( {question.question_helpfulness} )
              <button className="add-answer" onClick={utils.openAnswerModal}>Add Answer</button>
            </div>
          </div>
          <div className="answer"><b>A:</b>
            {/* ------------- Answers Text ------------- */}
            <span>
              <Answers answers={question.answers} />
              {/* <Answers answer={question.answers[Object.keys(question.answers)[0]]} />
              <Answers answer={question.answers[Object.keys(question.answers)[1]]} /> */}
              {/* <button className="load-more-answers" onClick={utils.loadMoreAnswers}>Load More Answers</button> */}
            </span>
          </div>
          {/* ------------- Date -------------*/}
          <div>&nbsp;<b>Date:</b> {utils.formatDate(question.question_date)}</div>
          <div>&nbsp;Helpful?
            <button className="yes-button" onClick={() => console.log('incremenet dis')}> Yes </button>
            ( {utils.checkForHelpfulness(question.answers[Object.keys(question.answers)[0]])} )
            | Report
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;