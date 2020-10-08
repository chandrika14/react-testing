import React from 'react';
import { mount } from 'enzyme';

import Root from '../../root';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

it('should display a form, textarea and a button', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
describe('has the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target : {
        value: 'New Comment'
      }
    });
    wrapped.update();
  })
  it('has a textarea that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
  })
  it('has a form that clears the value of textarea', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
})