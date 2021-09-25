/* eslint-disable no-undef */

import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AllQandA from '../AllQandA.jsx';
import data from './dummyDataTest.json';

xtest('displays multiple questions', () => {
  render(<AllQandA questions={data} />);
  expect(screen.getAllByText('Q:')).toBeInTheDocument();
});

xtest('has a date', () => {
  render(<AllQandA questions={data} />);
  expect(screen.getAllByText('Date:')).toBeInTheDocument();
});

xtest('renders correctly', () => {
  const tree = render(<AllQandA questions={data} />);
  expect(tree).toMatchSnapshot();
});