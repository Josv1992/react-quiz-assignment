import React from 'react';
import { useSelector } from 'react-redux';

import { Welcome } from '../../components/Welcome/Welcome';
import { Quiz } from '../../components/Quiz/Quiz';
import { Results } from '../../components/Results/Results';
import { Leaderboard } from '../../components/Leaderboard/Leaderboard';

export const QuizContainer = () => {

  const gameState = useSelector(state => state.gReducer.gameState);
  const score = useSelector(state => state.pReducer.score);


  const ComponentToggler = () => {
    if (gameState === 0) {
      return <Welcome />;
    } else if (gameState === 1) {
      return <Quiz score={score} />
    } else if (gameState === 2) {
      return <Results />
    } else {
      return <Leaderboard />
    }
  }

  return (
    <div>
      <ComponentToggler />
    </div>
  )
}
