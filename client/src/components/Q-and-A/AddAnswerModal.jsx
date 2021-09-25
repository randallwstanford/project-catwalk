/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as utils from './utils/AddAnswerModal.utils.js';
import { appContext } from '../../contexts/index.js';

const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const AddAnswerModal = ({ product, question }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const questionID = parseInt(sessionStorage.getItem('questionId'), 10);
    const email = event.target.email.value;
    const username = event.target.username.value;
    const answerText = event.target.answerText.value;

    const answer = {
      'name': username, // Username
      'body': answerText, // Answer Body
      'email': email, // Email
      'photos': [...event.target.files.files] // Files
    };

    if (emailValidation.test(email) && username.length !== 0 && answerText.length !== 0) {
      axios.post(`/qa/questions/${questionID}/answers`, answer)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert('please enter email, username, and question');
    }
  };

  return (
    <div className={`answer-modal ${question}`} id="answer-modal">
      <button className="x" onClick={utils.toggleModal}>x</button>
      <h2>Submit your Answer</h2>
      <h3 data-testid="product_name">[{product.name}]:</h3>
      <h3>{product.description}</h3>
      <form className={`main ${question}`} onSubmit={handleSubmit}>

        {/* ------ Username ------ */}
        Username **
        <input
          min="1"
          max="60"
          name="username"
          className="username"
          placeholder="ex: randostando"
        />
        <div>- For privacy reasons, do not use your full name or email address -</div>

        {/* ------ Email ------ */}
        Email **
        <input
          min="1"
          max="60"
          name="email"
          className="email"
          data-testid="email"
          id="email"
          placeholder="jack@email.com"
        />
        <div>- For authentication reasons, you will not be emailed -</div>

        {/* ------ Text Area ------ */}
        <textarea
          type="text"
          maxLength="1000"
          name="answerText"
          className="add-answer-input"
          placeholder="enter question here"
        >
        </textarea>
        {/* ------ File Input ------ */}
        <input
          multiple
          type="file"
          name="files"
          id="file-input"
          onChange={utils.handlePhotos}
        />
        {/* ------ Submit Button ------ */}
        <button
          type="submit"
          data-testid="submit"
          className="modal-submit"
          id="modal-submit"
          // disabled="disabled"
        >
          Submit
        </button>
        {/* Render Thumbnails here */}
      </form>
    </div>
  );
};

AddAnswerModal.propTypes = {
  product: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired
};

export default AddAnswerModal;
