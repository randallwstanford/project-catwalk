/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as utils from './utils/AddQuestionModal.utils.js';
import { appContext } from '../../contexts/index.js';

const AddQuestionModal = ({ product }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const answerer_name = event.target.username.value;
    const answer_body = event.target.answerText.value;
    const question = {
      'product_id': product.id,
      'body': answer_body,
      'name': answerer_name,
      'email': email
    };
    axios.post('/qa/questions/', question)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };


  return (
    <div className="question-modal" id="question-modal">
      <button className="x" onClick={utils.toggleModal} onChange={utils.toggleModal}>x</button>
      <h2>Ask your question</h2>
      <h3 data-testid="product_name">About the {product.name}</h3>
      <form className="main" onSubmit={handleSubmit} onChange={utils.handleChange}>

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
          placeholder="Why did you like the product or not?"
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
        <input
          multiple
          type="file"
          name="files"
          id="file-input"
          onChange={utils.handlePhotos()}
        />
        {/* Render Thumbnails here */}
        <button
          type="submit"
          data-testid="submit"
          className="modal-submit"
          id="modal-submit"
          // disabled="disabled"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

AddQuestionModal.propTypes = {
  product: PropTypes.object.isRequired
};

export default AddQuestionModal;
