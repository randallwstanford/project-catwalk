/* eslint-disable no-undef */

import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AddAnswerModal from '../AddAnswerModal.jsx';
import data from './productData.json';

test('has product name in div', () => {
  render(<AddAnswerModal product={data} />);
  expect(screen.getByTestId('product_name')).not.toBeEmpty();
});

test('email input is rendered', () => {
  render(<AddAnswerModal product={data} />);
  const inputEl = screen.getByTestId('email');
  expect(inputEl).toBeInTheDocument();
});

test('renders correctly', () => {
  const tree = render(<AddAnswerModal product={data} />);
  expect(tree).toMatchSnapshot();
});