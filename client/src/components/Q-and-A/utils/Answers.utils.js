import axios from 'axios';

export const checkForAnswer = (answer) => {
  if (answer === undefined) { return 'Not answered yet'; }
  return answer.body;
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

export const handleReport = (answer_id, event) => {
  const reportElement = event.target;
  var answer_id = event.target.getAttribute('class').split(' ')[0];
  reportElement.innerText = 'Reported ✓';
  event.preventDefault();
  axios.put(`/qa/questions/${answer_id}/report`)
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};

export const handleHelpfulAnswer = (answer_id, event) => {
  // Getting response 200 for put request but not incrementing answer
  var answerId = event.target.getAttribute('class').split(' ')[0];
  event.preventDefault();
  axios.put(`/qa/questions/${answerId}/helpful`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

