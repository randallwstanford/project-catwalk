/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import * as utils from './utils/AllQandA.utils.js';
import appContext from '../../contexts/index.js';
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
              {/* First 2 answers per question */}
              <Answers props={question.answers[Object.keys(question.answers)[0]]} />
              <Answers props={question.answers[Object.keys(question.answers)[1]]} />
            </span>
          </div>
          {/* ------------- Date -------------*/}
          <div> {utils.formatDate(question.question_date)}</div>
          <div> Helpful?
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