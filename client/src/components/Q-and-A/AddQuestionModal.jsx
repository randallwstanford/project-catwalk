/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React from 'react';
import * as utils from './utils/AddQuestionModal.utils.js';

const AddQuestionModal = () => {
  return (
    <div className="question-modal" id="question-modal">
      <button className="x" onClick={utils.toggleModal} onChange={utils.toggleModal}>x</button>
      <h2>Ask your question</h2>
      <h3>About the [Product Name Here]</h3>
      <form className="main" onSubmit={utils.handleSubmit} onChange={utils.handleChange}>

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
        <button type="submit" className="modal-submit" id="modal-submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestionModal;