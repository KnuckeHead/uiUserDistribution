import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootEffects from './RootState/RootEffects';

import App from './App';
import rootReducer from './RootState/RootReducer';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)), 
);
sagaMiddleware.run(rootEffects);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
