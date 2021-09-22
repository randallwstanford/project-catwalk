import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import AddReviewModal from './AddReviewModal.jsx';
import { reviewsContext } from '../../contexts/index.js';


const reviews = [
  {
    "review_id": 720891,
    "rating": 5,
    "summary": "This product was great!",
    "recommend": true,
    "response": "",
    "body": "I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.",
    "date": "2019-01-01T00:00:00.000Z",
    "reviewer_name": "funtime",
    "helpfulness": 8,
    "photos": []
  },
  {
    "review_id": 720892,
    "rating": 4,
    "summary": "This product was ok!",
    "recommend": false,
    "response": "",
    "body": "I really did not like this product solely because I am tiny and do not fit into it.",
    "date": "2019-01-11T00:00:00.000Z",
    "reviewer_name": "mymainstreammother",
    "helpfulness": 2,
    "photos": []
  }
];

test('to be defined"', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component).toBeDefined();
});

test('to undefined', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component.anUndefinedValue).toBeUndefined();
});

test('to match snapshot', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews }}>
      <AddReviewModal />
    </reviewsContext.Provider>
  );
  expect(component).toMatchSnapshot();
});