/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
import appContext from '../../contexts/index.js';
import AllQandA from './AllQandA.jsx';

const QandA = () => {
  const { product } = useContext(appContext);

  const openQuestionModal = (event) => { document.getElementById('question-modal').style.cssText = 'visibility: visible'; };

  const showMoreQuestions = (event) => {
    console.log('show more questions click infitie scroll i thikn');
    document.getElementsByClassName('q-wrapper')[0].style.height = '700px';
    console.log(document.getElementById('container').style.cssText);
    document.getElementsByClassName('container')[0].style.height = '925px';
    console.log(document.getElementsByClassName('load-more-answers')[0]);
  };

  // Hides 'More Answered Questions' Button if less than 2 questions
  const checkForAnsweredQuestions = () => {
    axios.get(`/qa/questions/?product_id=${product.id}`)
      .then((res) => {
        res.data.results.length <= 2
          ? document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'hidden'
          : console.log('there are more than 2 questions');
      }).catch((err) => console.log(err));
  };

  const loadMoreAnswers = (event) => {
    console.log('load more answers click');
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
          />
        </form>
      </div>
      <div className="q-wrapper"><AllQandA /></div>
      <button className="load-more-answers" onClick={loadMoreAnswers}>Load More Answers</button>
      <div className="more-question-wrapper">
        { checkForAnsweredQuestions() }
        <button className="more-answered-questions" onClick={showMoreQuestions}> More Answered Questions</button>
        <button className="add-question" onClick={openQuestionModal}>Add a Question</button>
      </div>
    </div>
  );
};

export default QandA;