import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import RatingBreakdown from './RatingBreakdown.jsx';
import { reviewsContext } from '../../contexts/index.js';
import { reviews, filtered } from './dummyTestData.json';

test('to be defined"', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews, filtered }}>
      <RatingBreakdown />
    </reviewsContext.Provider>
  );
  expect(component).toBeDefined();
});

test('to undefined', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews, filtered }}>
      <RatingBreakdown />
    </reviewsContext.Provider>
  );
  expect(component.anUndefinedValue).toBeUndefined();
});

test('to match snapshot', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviews, filtered }}>
      <RatingBreakdown />
    </reviewsContext.Provider>
  );
  expect(component).toMatchSnapshot();
});