import React from 'react';
import QandA from './Q&A.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <QandA />
    );
  }
}