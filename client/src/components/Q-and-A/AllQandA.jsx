/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getQuestions from '../../utils/utils.js';
import { API_KEY, url } from '../../../../config/config.js';
import data from './data.json';
import Answers from './Answers.jsx';

const AllQandA = () => {
  // All questions
  const [questions, setQuestion] = useState(data);

  useEffect(() => {
    // console.log(getQuestions());
  }, []);
  //   axios.get(
  //     'https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products', { headers: { Authorization: API_KEY } }
  //   )
  //     .then((product) => {
  //       var dataToSet = [];
  //       for (let i = 0; i < product.data.length; i++) {
  //         axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions/?product_id=${product.data[i].id}`, { headers: { Authorization: API_KEY } })
  //           .then((response) => {
  //             dataToSet.push(response.data.results);
  //             console.log('data:', data[i].results);
  //             console.log('response.data: ', response.data.results);
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //       console.log(dataToSet);
  //       setQuestion(dataToSet);
  //     })
  //     .catch((err) => {
  //       console.log('err in useeffect: ', err);
  //     });
  // }, []);



  const openModal = (event) => {
    document.getElementById('modal').style.cssText = 'visibility: visible';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });
  };

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
                <Answers props={question.answers[Object.keys(question.answers)[0]]} />
                <Answers props={question.answers[Object.keys(question.answers)[1]]} />
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