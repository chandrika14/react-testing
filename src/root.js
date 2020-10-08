import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combineReducers from './reducers';

export default(props) => {
  return (
    <Provider store={createStore(combineReducers, {})}>
      {props.children}
    </Provider>
  )
}