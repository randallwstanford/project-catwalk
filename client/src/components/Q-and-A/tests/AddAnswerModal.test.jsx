/* eslint-disable no-undef */

import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AddAnswerModal from '../AddAnswerModal.jsx';
import data from './productData.json';

xtest('has product name in div', () => {
  render(<AddAnswerModal product={data} />);
  expect(screen.getByTestId('product_name')).not.toBeEmpty();
});

xtest('email input is rendered', () => {
  render(<AddAnswerModal product={data} />);
  const inputEl = screen.getByTestId('email');
  expect(inputEl).toBeInTheDocument();
});

xtest('validates correct email', () => {
  render(<AddAnswerModal product={data} />);

  const inputEl = screen.getByTestId('email');
  userEvent.type(inputEl, 'test@test.com');
  expect(screen.getByTestId('submit')).not.toBeDisabled();
});

xtest('does not validate incorrect email', () => {
  render(<AddAnswerModal product={data} />);

  const inputEl = screen.getByTestId('email');
  userEvent.type(inputEl, 'thisisabademail.com');
  expect(screen.getByTestId('submit')).toBeDisabled();
});

xtest('renders correctly', () => {
  const tree = render(<AddAnswerModal product={data} />);
  expect(tree).toMatchSnapshot();
});