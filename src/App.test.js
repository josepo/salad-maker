import { render } from '@testing-library/react';
import App from './App';

test('renders selectors', () =>
{
   const { container } = render(<App />);
   const selectors = container.getElementsByClassName('selector');

   expect(selectors.length).toBe(4);
});
