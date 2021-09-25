/* eslint-disable no-param-reassign */
import axios from 'axios';

export const checkForAnswer = (answer) => {
  if (answer === undefined) { return 'Not answered yet'; }
  return answer.body;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });
};

export const checkForSeller = (answer) => {
  if (answer === undefined) { return 'ddd'; }
  if (answer !== 'Seller') { return answer.answerer_name; }
  return 'Seller';
};

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};

export const handleHelpfulAnswer = (answer_id, event) => {
  var answerId = event.target.getAttribute('class').split(' ')[0];
  event.preventDefault();
  if (localStorage.getItem(`clickedHelpfulAnswer${answerId}`) === null) {
    axios.put(`/qa/questions/${answerId}/helpful`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    localStorage.setItem(`clickedHelpfulAnswer${answerId}`, true);
  }
};

export const handleReport = (answer_id, event) => {
  event.target.innerText = 'Reported ✓';
  event.preventDefault();
  axios.put(`/qa/questions/${answer_id}/report`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};
