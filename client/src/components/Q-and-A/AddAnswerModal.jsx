import React from 'react';

const AddAnswerModal = () => {
  const toggleModal = (event) => {
    document.getElementById('modal').style.visibility = 'hidden';
  };

  return (
    <div className="modal" id="modal">
      <button className="x" onClick={toggleModal} onChange={toggleModal} on="">x</button>
      <h2>Ask your question</h2>
      <h4>About the [Product Name Here]</h4>
      <form className="main">
        Username **
        <input min="1" max="60" name="username" className="username" placeholder="ex: randostando" />
        <div>For privacy reasons, do not use your full name or email address</div>
        Email **
        <input min="1" max="60" name="email" className="email" placeholder="Why did you like the product or not?" />
        <div>For authentication reasons, you will not be emailed</div>
        <textarea type="text" name="answerText" className="add-answer-input" placeholder="enter question here"></textarea>
        <input type="file" />
        <input type="button" className="modal-submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddAnswerModal;