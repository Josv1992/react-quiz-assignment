import React from 'react';
import './App.css';

import { QuizContainer } from './containers/QuizContainer/QuizContainer';
import { Leaderboard } from './components/Leaderboard/Leaderboard';
import { ScoreForm} from './components/ScoreForm/ScoreForm';
import firebase from './firebase';

firebase.firestore().collection('scores').add({
  name: 'Jos',
  score: 5
})


const App = () => {
  return (
    <div className="app">
      <Leaderboard />
      <ScoreForm />
      <QuizContainer />
    </div>
  );
}

export default App;
