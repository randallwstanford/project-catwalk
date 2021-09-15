import React from 'react';

const Answers = (props) => {
  const checkForAnswer = (answer) => {
    if (answer.props === undefined) { return 'Not answered yet'; }
    return answer.props.body;
  };

  const checkForSeller = (answer) => {
    if (answer.props === undefined) { return 'ddd'; }
    if (answer.props !== 'Seller') { return answer.props.answerer_name; }
    return (<b>Seller</b>);
  };

  const checkForHelpfulness = (answer) => {
    if (answer === undefined) { return 0; }
    return answer.helpfulness;
  };

  return (
    <span> &nbsp;
      <span> {checkForAnswer(props)}</span>
      <span> By: {checkForSeller(props)}</span>
      <br /> &nbsp; &nbsp; &nbsp;
    </span>
  );
};

export default Answers;