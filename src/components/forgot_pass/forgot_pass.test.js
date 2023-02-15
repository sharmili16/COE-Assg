import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPass from './ForgotPass';

describe('<ForgotPass />', () => {
  test('it should mount', () => {
    render(<ForgotPass />);
    
    const forgotPass = screen.getByTestId('ForgotPass');

    expect(forgotPass).toBeInTheDocument();
  });
});