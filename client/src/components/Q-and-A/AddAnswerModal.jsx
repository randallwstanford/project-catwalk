/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as utils from './utils/AddAnswerModal.utils.js';
import { appContext } from '../../contexts/index.js';


const AddAnswerModal = ({ product, question }) => {
  const handleSubmit = (event) => {
    console.log(event.target.parentNode.parentNode);
    console.log(question);
    // ALL I NEED IS QUESTION ID
    event.preventDefault();
    const answer = {
      'question_id': question.id,
      'email': event.target.email.value, // Email
      'body': event.target.username.value, // Username
      'name': event.target.answerText.value, // Answer Body
      'photos': [...event.target.files.files] // Files
    };

    // axios.post('/qa/questions', answer)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };



  return (
    <div className={`answer-modal ${question}`} id="answer-modal">
      <button className="x" onClick={utils.toggleModal}>x</button>
      <h2>Submit your Answer</h2>
      <h3 data-testid="product_name">[{product.name}]:</h3>
      <h3>{product.description}</h3>
      <form className={`main ${question}`} onSubmit={handleSubmit} onChange={utils.handleChange}>

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
        <textarea type="text" maxLength="1000" name="answerText" className="add-answer-input" placeholder="enter question here"></textarea>
        <input
          multiple
          type="file"
          name="files"
          id="file-input"
          onChange={utils.handlePhotos}
        />
        {/* ------ File Input ------ */}
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
