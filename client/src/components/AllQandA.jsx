import React, { useState } from 'react';

var copy = [];

const AllQandAs = () => {
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

  // const search = (event) => {
  //   var questionsCopy = copy.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
  //   var term = event.target.value.toLowerCase();
  //   event.preventDefault();

  //   if (term === '') {
  //     setQuestion(questionsCopy);
  //   }
  //   if (term !== '') {
  //     copy.forEach((question) => {
  //       if (question.a.toLowerCase().startsWith(term)) {
  //         setQuestion([question]);
  //       }
  //     });
  //   }
  // };

  const addAnswer = (event) => {
    console.log(document.getElementsByClassName('modal')[0].style = 'none');
    console.log('adding answer click');
  };

  return (
    questions.map((question, index) => {
      return (
        <div key={index} className="qa-container">
          <div className="question">
            <b>Q:</b> {question.q}
            <div className="helpful">Helpful?
              <button
                className="yes-button"
                onClick={() => ++localStorage[`numHelp${index}`]}
              > Yes
              </button>
              (
              {localStorage.setItem(`numHelp${localStorage.length}`, 0)}
              {localStorage.getItem(`numHelp${index}`)}
              )
              <button
                className="add-answer"
                onClick={addAnswer}
              >Add Answer
              </button>
            </div>
          </div>
          <div className="answer"><b>A: </b>{question.a}</div>
          <div>By username, date
            <div> Helpful?
              <button
                className="yes-button"
                onClick={() => ++localStorage[`num${index}`]}
              > Yes
              </button>
              (
              {localStorage.setItem(`num${localStorage.length}`, 0)}
              {localStorage.getItem(`num${index}`)}
              )
              | Report
            </div>
          </div>
        </div>
      );
    })
  );
};

export default AllQandAs;