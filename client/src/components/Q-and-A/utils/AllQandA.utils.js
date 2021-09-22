import axios from 'axios';

export const openAnswerModal = (event) => { document.getElementById('answer-modal').style.cssText = 'visibility: visible'; };

export const formatDate = (date) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};

export const handleHelpful = (event) => {
  var questionId = event.target.getAttribute('class').split(' ')[0];
  event.preventDefault();
  axios.put(`/qa/questions/${questionId}/helpful`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};