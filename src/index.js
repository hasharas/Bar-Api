import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import Provider from react-redux
// Import Redux store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/redux/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
