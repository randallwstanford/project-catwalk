/* eslint-disable no-unused-expressions */
import React from 'react';

const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const AddQuestionModal = () => {
  const toggleModal = (event) => {
    document.getElementById('modal').style.visibility = 'hidden';
  };

  const handleChange = (event) => {
    const email = document.getElementById('email');
    const modalButton = document.getElementById('modal-submit');
    const inputFiles = document.getElementById('file-input');

    // Validate that there are no more than 5 files uploaded
    inputFiles.files.length <= 5
      ? modalButton.disabled = false
      : modalButton.disabled = true;
    // Validate Email
    emailValidation.test(email.value)
      ? modalButton.disabled = false
      : modalButton.disabled = true; email.style.border = '2px solid red';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const answerer_name = event.target.username.value;
    const answer_body = event.target.answerText.value;

    const objToSend = {
      'email': email,
      'answer_body': answer_body,
      'answerer_name': answerer_name,
      'photos': [...event.target.files.files]
    };
    console.log(objToSend); // FORMATTING DONE
    // TODO: Post to qa/questions
  };

  const handlePhotos = () => {
    // Array.from(document.getElementById('file-input').files).map((file, index) => {
    //   return (
    //     <div id={index}>
    //       <img src={file.name} alt="" />
    //     </div>
    //   );
    // });
  };

  return (
    <div className="modal" id="modal">
      <button className="x" onClick={toggleModal} onChange={toggleModal}>x</button>
      <h2>Ask your question</h2>
      <h3>About the [Product Name Here]</h3>
      <form className="main" onSubmit={handleSubmit} onChange={handleChange}>

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
        <textarea type="text" name="answerText" className="add-answer-input" placeholder="enter question here"></textarea>
        <input
          multiple
          type="file"
          name="files"
          id="file-input"
          onChange={handlePhotos()}
        />
        {/* Render Thumbnails here */}
        <button type="submit" className="modal-submit" id="modal-submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestionModal;