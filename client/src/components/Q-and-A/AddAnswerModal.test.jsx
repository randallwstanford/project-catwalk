/* eslint-disable no-undef */

import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAnswerModal from './AddAnswerModal.jsx';
import data from './productData.json';
import userEvent from '@testing-library/user-event';

test('has product name in div', () => {
  render(<AddAnswerModal product={data} />)
  expect(screen.getByTestId('product_name')).not.toBeEmpty()
});

test('email input is rendered', () => {
  render(<AddAnswerModal product={data} />);
  const inputEl = screen.getByTestId("email");
  expect(inputEl).toBeInTheDocument()
});

test('validates correct email', () => {
  render(<AddAnswerModal product={data} />);

  const inputEl = screen.getByTestId("email");
  userEvent.type(inputEl, "test@test.com");
  expect(screen.getByTestId("submit")).not.toBeDisabled();
});

test('does not validate incorrect email', () => {
  render(<AddAnswerModal product={data} />);

  const inputEl = screen.getByTestId("email");
  userEvent.type(inputEl, "thisisabademail.com");
  expect(screen.getByTestId("submit")).toBeDisabled();
});

test('renders correctly', () => {
  const tree = render(<AddAnswerModal product={data} />)
  expect(tree).toMatchSnapshot();
});