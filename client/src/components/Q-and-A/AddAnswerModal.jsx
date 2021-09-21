/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import * as utils from './utils/AddAnswerModal.utils.js';
import { appContext } from '../../contexts/index.js';

const AddAnswerModal = () => {
  const { product } = useContext(appContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const objToSend = {
      'product_id': product.id,
      'email': event.target.email.value, // Email
      'body': event.target.username.value, // Username
      'name': event.target.answerText.value, // Answer Body
      'photos': [...event.target.files.files] // Files
    };

    console.log(objToSend); // FORMATTING DONE
    // TODO: Post to qa/questions
  };


  return (
    <div className="answer-modal" id="answer-modal">
      <button className="x" onClick={utils.toggleModal}>x</button>
      <h2>Submit your Answer</h2>
      <h3>[{product.name}]:</h3>
      <h3>{product.description}</h3>
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
        <button type="submit" className="modal-submit" id="modal-submit">Submit</button>
        {/* Render Thumbnails here */}
      </form>
    </div>
  );
};

export default AddAnswerModal;