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

export const loadMoreAnswers = (event) => {
  // var parentClass = event.target.parentNode.pa
  // rentNode.parentNode.getAttribute('class').split(' ')[0];
  // var parentClassAnswer = event.target.parentNode.parentNode.getAttribute('class').split(' ')[0];

  // var containerCss = document.getElementsByClassName(parentClass)[0].style.cssText;
  // var answerCss = document.getElementsByClassName(parentClassAnswer)[0].style.cssText;

  // containerCss = 'height: 450px';
  // answerCss = 'height: 250px';
};
