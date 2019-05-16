import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('handles actions of unknown type', () => {
  const action = {
    type: 'UNKNOWN',
      payload: ['something']
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
})