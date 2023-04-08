import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';

const IMG_SRC = 'abc.jpg'
jest.mock('./api')
test('renders learn react link', async () => {
  const { dog } = require('./api')
  dog.mockImplementation(async () => {
    return IMG_SRC
  });

  render(<App />);
  const button = screen.getByText(/获取随机相片/i);
  expect(button).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(button)
  })
  expect(dog).toHaveBeenCalledTimes(1)
  const img = screen.getByAltText('random dog')
  expect(img.getAttribute('src')).toBe(IMG_SRC)
});
