/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import appContext from '../../contexts/index.js';
import AllQandA from './AllQandA.jsx';
import * as utils from './utils/QandA.utils.js';

const QandA = () => {
  const { product } = useContext(appContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => { setQuestions((res.data.results).sort((a, b) => b.question_helpfulness - a.question_helpfulness)); })
      .catch((err) => console.log(err));
  }, []);

  // Hides 'More Answered Questions' Button if less than 2 questions
  const checkForAnsweredQuestions = () => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => {
        res.data.results.length <= 2
          ? document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'hidden'
          : console.log('there are more than 2 questions');
      })
      .catch((err) => console.log(err));
  };

  // fitlers but doesnt rerender
  const handleSearch = (event) => {
    var term = event.target.value;
    if (term.length >= 3) {
      setQuestions(questions.filter((question) => {
        question.question_body.toLowerCase().includes(term) === true
          ? question
          : 'No Results Found';
      }));
    }
  };

  return (
    <div className="container" id="container">
      <AddQuestionModal />
      <AddAnswerModal />
      <div className="qanda">Questions and Answers</div>
      <div className="input-and-button">
        <form>
          <input
            className="question-input"
            type="text"
            placeholder="Have a question? Search for answers."
            onChange={handleSearch}
          />
        </form>
      </div>
      <div className="q-wrapper"><AllQandA /></div>
      <button className="load-more-answers" onClick={utils.loadMoreAnswers}>Load More Answers</button>
      <div className="more-question-wrapper">
        { checkForAnsweredQuestions() }
        <button className="more-answered-questions" onClick={utils.showMoreQuestions}> More Answered Questions</button>
        <button className="add-question" onClick={utils.openQuestionModal}>Add a Question</button>
      </div>
    </div>
  );
};

export default QandA;