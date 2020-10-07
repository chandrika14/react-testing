import React from 'react';
import ReactDom from 'react-dom';

import App from '../App';

it('should render the commentBox', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  expect(div.innerHTML).toContain('Inside Comment Box');
  ReactDom.unmountComponentAtNode(div);
});
it('should render the commentList', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  expect(div.innerHTML).toContain('Inside Comment List');
  ReactDom.unmountComponentAtNode(div);
});