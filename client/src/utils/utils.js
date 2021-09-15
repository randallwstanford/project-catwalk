import axios from 'axios';
import { API_KEY, url } from '../../../config/config.js';


const getProducts = () => {
  const products = axios.get('http://localhost:3000/products/')
    .then((res) => { console.log('res.data', res.data); return res.data; })
    .catch((err) => { console.log(err); });
  console.log('products: ', products);
  return products;
};


const getQuestions = (id) => {
  axios.get(`http://localhost:3000/qa/questions/?product_id=${id}`)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
};

const getAnswers = () => {
};

export default { getQuestions, getProducts, getAnswers };