import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('axios', () => {
  axios: jest.fn(() => {})
});

describe("App Test", () => {

  it('should render', async () => {
    const renderApp = render(<App />);
    expect(renderApp).toBeTruthy();
  })
})