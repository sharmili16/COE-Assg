import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Name from './Name';

describe('<Name />', () => {
  test('it should mount', () => {
    render(<Name />);
    
    const name = screen.getByTestId('Name');

    expect(name).toBeInTheDocument();
  });
});