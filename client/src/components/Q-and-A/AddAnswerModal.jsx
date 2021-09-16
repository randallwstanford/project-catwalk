/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React from 'react';
import * as utils from './AddAnswerModal.utils.js';

const AddAnswerModal = () => {
  return (
    <div className="answer-modal" id="answer-modal">
      <button className="x" onClick={utils.toggleModal} onChange={utils.toggleModal}>x</button>
      <h2>Submit your Answer</h2>
      <h3>[Product Name]: [Product Body]</h3>
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
          onChange={utils.handlePhotos()}
        />
        {/* Render Thumbnails here */}
        <button type="submit" className="modal-submit" id="modal-submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAnswerModal;