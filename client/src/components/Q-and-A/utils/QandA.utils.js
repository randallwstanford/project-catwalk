/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const openQuestionModal = (event) => { document.getElementById('question-modal').style.cssText = 'visibility: visible'; };

export const showMoreQuestions = (event) => {
  console.log('show more questions click infitie scroll i thikn');
  document.getElementsByClassName('q-wrapper')[0].style.height = '700px';
  console.log(document.getElementById('container').style.cssText);
  document.getElementsByClassName('container')[0].style.height = '925px';
  console.log(document.getElementsByClassName('load-more-answers')[0]);
};
