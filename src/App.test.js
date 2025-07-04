import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Yehor Korsun name', () => {
  render(<App />);
  const elements = screen.getAllByText(/Yehor Korsun/i);
  expect(elements.length).toBeGreaterThan(0);
});
