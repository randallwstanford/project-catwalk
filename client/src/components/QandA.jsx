/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState } from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal.jsx';
// import AllQandAs from './AllQandA.jsx';

// Global copy of questions state
var copy = [];

const QandA = () => {
  // All questions
  const [questions, setQuestion] = useState([
    {
      q: 'Do these usually run small?',
      a: 'Lorem.',
      username: 'rando',
      date: 'feb 8, 9981'
    },
    {
      q: 'Do doododood odod ododoodo oood?',
      a: 'odort.',
      username: 'JSON',
      date: 'june 27, 2727',
      isSeller: ' - Seller'
    },
    {
      q: 'Do AAHHHHH',
      a: 'sding elit.',
      username: 'shirin',
      date: 'may 356, 1003'
    },
    {
      q: 'Do GOCCO UGH UGH  GIOGO OOGOOGOOGOGO gOOOOOOOOd?',
      a: 'YAH YAH YHA YHA YA H Y AH HY A.',
      username: 'shjsndo',
      date: 'may 26, 1337'
    }
  ]);

  // Push all questions to global copy array
  questions.forEach((question) => { copy.push(question); });
  // Need to refactor => only shows one result
  const search = (event) => {
    // Filer global copy becuase it was have duplicates. Making copy of questions useState does not work. a copy of questions gets mutated.
    var questionsCopy = copy.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);

    // Input val
    var term = event.target.value.toLowerCase();

    // Prevent page reload
    event.preventDefault();

    // If term is emptied
    if (term === '') {
      // Set questions to original state
      setQuestion(questionsCopy);
    }
    // If term is not empty
    if (term !== '') {
      // Iterate through copied state to search
      copy.forEach((question) => {
        // if answer starts with search term
        if (question.a.toLowerCase().startsWith(term)) {
          //
          setQuestion([question]);
        }
      });
    }
  };

  // done
  const openModal = (event) => {
    console.log(document.getElementById('modal').style);
    document.getElementById('modal').style.cssText = 'visibility: visible';
  };

  const addQuestion = (event) => {
    console.log('adding question click');
  };

  const showMoreQuestions = (event) => {
    console.log('show more questions click infitie scroll i thikn');
  };

  const loadMoreAnswers = (event) => {
    console.log('load more answers');
  };

  const allQandAs = (
    // Limits 2 questions (until laod more answers clicked)
    questions.slice(0, 2).map((question, index) => {
      return (
        <div key={index} className="qa-container">
          <div className="question">
            <b>Q:</b> {question.q}
            <div className="helpful">Helpful?
              <button
                className="yes-button"
                onClick={() => ++localStorage[`numHelp${index}`]}
              > Yes </button>
              ( 0 )

              { // Local storage counter
              /* {localStorage.setItem(`numHelp0${localStorage.length}`, 0)}
              {localStorage.getItem(`numHelp0${index}`)} */}
              <button
                className="add-answer"
                onClick={openModal}
              >Add Answer </button>
            </div>
          </div>
          <div className="answer"><b>A: </b>{question.a}</div>
          <div>By [{question.username}],<b>{question.isSeller}</b> {question.date}
            <div> Helpful?
              <button
                className="yes-button"
                onClick={() => ++localStorage[`num${index}`]}
              > Yes </button>
              ( 0 )
              { // Local storage counter
              /* {localStorage.setItem(`num0${localStorage.length}`, 0)}
              {localStorage.getItem(`num0${index}`)} */}
              | Report </div>
          </div>
        </div>
      );
    })
  );


  return (
    <div className="container">
      <AddAnswerModal />
      <div className="qanda">Questions and Answers</div>
      <div className="input-and-button">
        <form>
          <input
            onChange={search}
            className="question-input"
            type="text"
            placeholder="Have a question? Search for answers."
          />
        </form>
      </div>
      <div className="q-wrapper">
        { allQandAs }
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