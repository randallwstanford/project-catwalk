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
