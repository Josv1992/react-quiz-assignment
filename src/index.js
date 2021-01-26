import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import playerInfoReducer from './store/reducers/playerInfoReducer';
import gameStateReducer from './store/reducers/gameStateReducer';

const appReducer = combineReducers({
  pReducer: playerInfoReducer,
  gReducer: gameStateReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_GAME') {
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
