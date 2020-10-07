import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CommentBox />);
});

it('should display a form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});