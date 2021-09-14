/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState } from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal.jsx';
import AllQandA from './AllQandA.jsx';

const QandA = () => {
  const addQuestion = (event) => {
    console.log('adding question click');
  };

  const showMoreQuestions = (event) => {
    console.log('show more questions click infitie scroll i thikn');
  };

  const loadMoreAnswers = (event) => {
    console.log('load more answers');
  };

  return (
    <div className="container">
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
      <div className="q-wrapper">
        <AllQandA />
      </div>
      <button
        className="load-more-answers"
        onClick={loadMoreAnswers}
      > Load More Answers
      </button>
      <div className="more-question-wrapper">
        <button
          className="more-answered-questions"
          onClick={showMoreQuestions}
        > More Answered Questions
        </button>
        <button
          className="add-question"
          onClick={addQuestion}
        > Add a Question
        </button>
      </div>
    </div>
  );
};

export default QandA;