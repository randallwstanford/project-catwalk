import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ProductCharacteristics from './ProductCharacteristics.jsx';
import { reviewsContext } from '../../contexts/index.js';

const reviewsMeta = {
  'product_id': '44388',
  'ratings': {
    '4': '1',
    '5': '1'
  },
  'recommended': {
    'false': '1',
    'true': '1'
  },
  'characteristics': {
    'Fit': {
      'id': 148890,
      'value': '4.0000000000000000'
    },
    'Length': {
      'id': 148891,
      'value': '3.5000000000000000'
    },
    'Comfort': {
      'id': 148892,
      'value': '5.0000000000000000'
    },
    'Quality': {
      'id': 148893,
      'value': '4.0000000000000000'
    }
  }
};

test('to be defined"', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviewsMeta }}>
      <ProductCharacteristics />
    </reviewsContext.Provider>
  );
  expect(component).toBeDefined();
});

test('to undefined', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviewsMeta }}>
      <ProductCharacteristics />
    </reviewsContext.Provider>
  );
  expect(component.anUndefinedValue).toBeUndefined();
});

test('to match snapshot', () => {
  const component = renderer.create(
    <reviewsContext.Provider value={{ reviewsMeta }}>
      <ProductCharacteristics />
    </reviewsContext.Provider>
  );
  expect(component).toMatchSnapshot();
});