/* eslint-disable no-unused-expressions */
import axios from 'axios';

export const openQuestionModal = () => {
  document.getElementById('question-modal').style.cssText = 'visibility: visible';
};

export const showMoreQuestions = () => {
  document.getElementsByClassName('q-wrapper')[0].style.overflow = 'scroll';
};

export const checkForAnsweredQuestions = (product) => {
  axios.get(`/qa/questions/?product_id=${product.id}`)
    .then((res) => {
      if (res.data.results.length <= 2) {
        document.getElementsByClassName('more-answered-questions')[0].style.visibility = 'hidden';
      }
    })
    .catch((err) => console.log(err));
};
