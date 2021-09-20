/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const openQuestionModal = () => {
  document.getElementById('question-modal').style.cssText = 'visibility: visible';
};

export const showMoreQuestions = () => {
  document.getElementsByClassName('q-wrapper')[0].style.overflow = 'scroll';
  document.getElementsByClassName('q-wrapper')[0].style['overflow-x'] = 'hidden';
};
