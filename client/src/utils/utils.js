import axios from 'axios';
import { API_KEY, url } from '../../../config/config.js';

const getProducts = () => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products', { headers: { Authorization: API_KEY } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};


const getQuestions = () => {
  var allQuestions = [];
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/products', { headers: { Authorization: API_KEY } })
    .then((res) => {
      res.data.forEach((product) => {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den/qa/questions/?product_id=${product.id}`, { headers: { Authorization: API_KEY } })
          .then((response) => allQuestions.push(response.data.results))
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
  return allQuestions;
};

export default getQuestions;