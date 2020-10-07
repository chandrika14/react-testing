import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

it('renders app without crashing', () => {
  const element = document.createElement('div');
  ReactDom.render(<App />, element);
  expect(element.innerHTML).toContain('Hi there!');
  ReactDom.unmountComponentAtNode(element);
});
