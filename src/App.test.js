import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Graphic Designer text', () => {
  // Assuming 'Graphic Designer' is a key part of the Hero section
  render(<App />);
  const linkElement = screen.getByText(/Graphic Designer/i);
  expect(linkElement).toBeInTheDocument();
});