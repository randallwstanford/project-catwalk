import React, { useState } from 'react';

const AllQandA = () => {
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

  // done
  const openModal = (event) => {
    console.log(document.getElementById('modal').style);
    document.getElementById('modal').style.cssText = 'visibility: visible';
  };

  return (
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
              > Yes
              </button>
              ( 0 )

              { // Local storage counter
              /* {localStorage.setItem(`numHelp0${localStorage.length}`, 0)}
              {localStorage.getItem(`numHelp0${index}`)} */}
              <button
                className="add-answer"
                onClick={openModal}
              >Add Answer
              </button>
            </div>
          </div>
          <div className="answer"><b>A: </b>{question.a}</div>
          <div>By [{question.username}],<b>{question.isSeller}</b> {question.date}
            <div> Helpful?
              <button
                className="yes-button"
                onClick={() => ++localStorage[`num${index}`]}
              > Yes
              </button>
              ( 0 )
              { // Local storage counter
              /* {localStorage.setItem(`num0${localStorage.length}`, 0)}
              {localStorage.getItem(`num0${index}`)} */}
              | Report
            </div>
          </div>
        </div>
      );
    })
  );
};

export default AllQandA;