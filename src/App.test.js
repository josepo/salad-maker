import { render } from '@testing-library/react';
import App from './App';

test('renders help text', () =>
{
   const { container } = render(<App />);

   expect(container.getElementsByClassName('help')).toBeDefined();
});

test('renders selectors', () =>
{
   const { container } = render(<App />);
   const selectors = container.getElementsByClassName('selector');

   expect(selectors.length).toBe(4);
});
