import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import storeReducer from './store/reducers/store';

const appReducer = combineReducers({
  str: storeReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESETGAME') {
    state = undefined;
  }
  return appReducer(state, action)
}

const store = createStore(rootReducer);


ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
