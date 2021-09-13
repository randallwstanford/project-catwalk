/* eslint-disable max-len */
/* eslint-disable array-callback-return */

import React, { useState } from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal.jsx';

var copy = [];

const QandA = () => {
  const [count, setCount] = useState(0);
  const [questions, setQuestion] = useState([
    {
      q: 'Do these usually run small?',
      a: 'Lorem.'
    },
    {
      q: 'Do doododood odod ododoodo oood?',
      a: 'odort.'
    },
    {
      q: 'Do AAHHHHH',
      a: 'sding elit.'
    },
    {
      q: 'Do GOCCO UGH UGH  GIOGO OOGOOGOOGOGO gOOOOOOOOd?',
      a: 'YAH YAH YHA YHA YA H Y AH HY A.'
    }
  ]);


  questions.forEach((question) => { copy.push(question); });

  // copy.reduce((a, b) => {
  //   if (a.indexOf(b) < 0) {
  //     a.push(b);
  //   }
  //   return a;
  // }, []);

  var questionsCopy = copy.reduce((x, y) => x.includes(y) ? x : [...x, y], []);

  const search = (event) => {
    var term = event.target.value.toLowerCase();
    event.preventDefault();


    if (term === '') {
      setQuestion(questionsCopy);
      console.log(questionsCopy);
    }

    if (term !== '') {
      copy.forEach((question) => {
        if (question.a.toLowerCase().startsWith(term)) {
          setQuestion([question]);
        }
      });
    }
  };

  const addAnswer = (event) => {
    console.log(document.getElementsByClassName('modal')[0].style = 'none');
    console.log('adding answer click');
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
    questions.map((question, index) => {
      return (
        <div key={index} className="qa-container">
          <div className="question">
            <b>Q:</b> {question.q}
            <div className="helpful"> Helpful? <button className="yes-button" onClick={() => setCount(count + 1)}> Yes </button> ({count})  |  <button className="add-answer" onClick={addAnswer}>Add Answer</button>
            </div>
          </div>
          <div className="answer"><b>A:</b> {question.a}</div>
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
          <button
            className="search-button"
            type="submit"
            onClick={search}
          >
          </button>
        </form>
      </div>
      <div className="q-wrapper">
        { allQandAs }
      </div>
      <button
        className="load-more-answers"
        onClick={loadMoreAnswers}
      >Load More Answers
      </button>
      <div className="more-question-wrapper">
        <button className="more-answered-questions" onClick={showMoreQuestions}>More Answered Questions
        </button>
        <button className="add-question" onClick={addQuestion}>Add a Question
        </button>
      </div>
    </div>
  );
};

export default QandA;