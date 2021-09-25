/* eslint-disable no-param-reassign */
import axios from 'axios';

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });
};

export const checkForHelpfulness = (answer) => {
  return answer === undefined ? 0 : answer.helpfulness;
};

export const handleHelpful = (event) => {
  var questionId = event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[1];
  event.preventDefault();
  if (localStorage.getItem(`clickedHelpfulQuestion${questionId}`) === null) {
    axios.put(`/qa/questions/${questionId}/helpful`)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
    localStorage.setItem(`clickedHelpfulQuestion${questionId}`, true);
  }
};

export const handleReport = (event) => {
  event.preventDefault();
  event.target.innerText = 'Reported ✓';
  const question_id = event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[1];
  axios.put(`/qa/questions/${question_id}/report`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};

export const openAnswerModal = (event, question_id) => {
  sessionStorage.setItem('questionId', question_id);
  document.getElementById('answer-modal').style.cssText = 'visibility: visible';
};