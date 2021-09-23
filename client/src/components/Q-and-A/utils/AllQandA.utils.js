import axios from 'axios';

export const openAnswerModal = (question, event) => {
  console.log('question: ', question);
  console.log('event', event);
  console.log(document.getElementById(`answer-modal ${question}`));
  document.getElementById('answer-modal').style.cssText = 'visibility: visible';
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' })
};

export const checkForHelpfulness = (answer) => { answer === undefined ? 0 : answer.helpfulness; };

export const handleHelpful = (event) => {
  event.preventDefault();
  var questionId = event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[1];

  axios.put(`/qa/questions/${questionId}/helpful`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};

export const handleReport = (event) => {
  event.preventDefault();
  const reportElement = event.target;
  const question_id = event.target.parentNode.parentNode.parentNode.getAttribute('class').split(' ')[1];
  reportElement.innerText = 'Reported ✓';

  axios.put(`/qa/questions/${question_id}/report`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};
