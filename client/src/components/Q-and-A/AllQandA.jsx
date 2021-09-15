/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import utils from '../../utils/utils.js';
import Answers from './Answers.jsx';
import appContext from '../../contexts/index.js';

const AllQandA = () => {
  const { product } = useContext(appContext);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => { setQuestion(res.data.results); })
      .catch((err) => console.log(err));
  }, []);


  const formatDate = (date) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });
  const checkForHelpfulness = (answer) => {
    if (answer === undefined) { return 0; }
    return answer.helpfulness;
  };

  return (
    questions.map((question, index) => {
      return (
        <div className="qa-container" key={index}>
          <div className="question"><b>Q:</b> {question.question_body}
            <div className="helpful">Helpful?&nbsp;
              <button className="yes-button">Yes</button>
              ( {question.question_helpfulness} )
              <button className="add-answer" onClick={() => { console.log('add answer clicked'); }}>Add Answer</button>
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
};

export default AllQandA;