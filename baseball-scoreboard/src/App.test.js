import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { isElementOfType } from 'react-dom/test-utils';

afterEach(rtl.cleanup)


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('checks that Balls and Strikes are displayed', () =>{
  const wrapper = rtl.render(<App/>)
  wrapper.debug(wrapper.queryByText('Balls'))
  wrapper.debug(wrapper.queryByText('Strikes'))

  const element =wrapper.queryByText(/balls/i)
  expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
  expect(element).toBeVisible();

  const strike =wrapper.queryByText(/strikes/i)
  expect(strike).toBeInTheDocument();
  expect(strike).toBeTruthy();
  expect(strike).toBeVisible();
})
