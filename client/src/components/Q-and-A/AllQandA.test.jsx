/* eslint-disable no-undef */

import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AllQandA from './AllQandA.jsx';
import data from './dummyDataTest.json';

test('displays multiple questions', () => {
  render(<AllQandA questions={data} />);
  expect(screen.getAllByText('Q:')).toBeTruthy();
});

test('has a date', () => {
  render(<AllQandA questions={data} />);
  expect(screen.getAllByText('Date:')).toBeTruthy();
});

test('renders correctly', () => {
  const tree = render(<AllQandA questions={data} />)
  expect(tree).toMatchSnapshot();
});