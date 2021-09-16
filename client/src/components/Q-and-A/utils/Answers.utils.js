export const checkForAnswer = (answer) => {
  if (answer.props === undefined) { return 'Not answered yet'; }
  return answer.props.body;
};

export const checkForSeller = (answer) => {
  if (answer.props === undefined) { return 'ddd'; }
  if (answer.props !== 'Seller') { return answer.props.answerer_name; }
  return 'Seller';
};

export const checkForHelpfulness = (answer) => {
  if (answer === undefined) { return 0; }
  return answer.helpfulness;
};

export const loadMoreAnswers = (event) => {
  console.log('load more answers click');
};
