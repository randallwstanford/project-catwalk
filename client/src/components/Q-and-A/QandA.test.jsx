/* eslint-disable no-undef */
import React from 'react';
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AllQandA from './AllQandA.jsx';

test('loads and displays Q', async () => {
  render(<AllQandA />);

  await waitFor(() => screen.getByTitle('question'));

  expect(screen.getByTitle('question')).toHaveTextContent('Q:');
});