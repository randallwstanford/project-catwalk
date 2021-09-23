/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const toggleModal = (event) => { document.getElementById('question-modal').style.visibility = 'hidden'; };

export const handleChange = (event) => {
  const email = document.getElementById('email');
  const modalButton = document.getElementById('modal-submit');
  const inputFiles = document.getElementById('file-input');
  const textArea = document.getElementsByClassName('add-answer-input');
  const username = document.getElementsByClassName('username');

  // Validate that there are no more than 5 files uploaded
  inputFiles.files.length <= 5
    ? modalButton.disabled = false
    : modalButton.disabled = true;
  // Validate Email
  emailValidation.test(email.value)
    ? modalButton.disabled = false
    : modalButton.disabled = true; email.style.border = '2px solid red';
};

export const handlePhotos = () => {
  // Array.from(document.getElementById('file-input').files).map((file, index) => {
  //   return (
  //     <div id={index}>
  //       <img src={file.name} alt="" />
  //     </div>
  //   );
  // });
};
