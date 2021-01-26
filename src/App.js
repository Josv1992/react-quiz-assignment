import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';

import { QuizContainer } from './containers/QuizContainer/QuizContainer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <QuizContainer className="quizContainer" />
    </div>
  );
}

export default App;
