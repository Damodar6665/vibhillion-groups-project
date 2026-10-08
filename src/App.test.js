import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens the navigation menu and closes it after selecting APPSC', () => {
  const { container } = render(<App />);
  const menuToggle = container.querySelector('.menu-toggle');

  fireEvent.click(menuToggle);
  expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getByRole('button', { name: 'APPSC' }));

  expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('button', { name: 'Group-II' })).toBeInTheDocument();
});
