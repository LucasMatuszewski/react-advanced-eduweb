import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Main App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  test('renders Advanced React Eduweb Hallo Roman header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Advanced React Eduweb Hallo Roman/i);
    expect(headerElement).toBeInTheDocument();
  });
});
