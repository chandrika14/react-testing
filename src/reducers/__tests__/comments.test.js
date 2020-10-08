import commentReducer from '../comments';
import { SAVE } from '../../actions/types';

it('handles actions of type SAVE', () => {
  const action = {
    type: SAVE,
    data: 'New Comment'
  }
  const newState = commentReducer([], action);
  expect(newState).toEqual(['New Comment']);
})