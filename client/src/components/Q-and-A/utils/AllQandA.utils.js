export const openAnswerModal = (event) => { document.getElementById('answer-modal').style.cssText = 'visibility: visible'; };

export const formatDate = (date) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', day: 'numeric', month: 'short' });

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};