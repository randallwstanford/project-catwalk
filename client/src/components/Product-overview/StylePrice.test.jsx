import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import StylePrice from './StylePrice.jsx';

test('loads and displays price without sale', async () => {
  render(<StylePrice originalPrice='100' />);

  await waitFor(() => screen.getByTitle('Original Price'));

  expect(screen.getByTitle('Original Price')).toHaveTextContent('$100');
});

test('loads and displays price with sale', async () => {
  render(<StylePrice originalPrice='100' salePrice='50' />);

  await waitFor(() => screen.getByTitle('Original Price'));

  expect(screen.getByTitle('Original Price')).toHaveTextContent('$100');
  expect(screen.getByTitle('Sale Price')).toHaveTextContent('$50');
});