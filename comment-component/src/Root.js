import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState, applyMiddleware(reduxPromise))}>
      {children}
    </Provider>
  )
}