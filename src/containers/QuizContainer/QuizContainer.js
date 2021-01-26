import React from 'react';
import { useStore, useSelector } from 'react-redux';


import { Welcome } from '../../components/Welcome/Welcome';
import { Quiz } from '../../components/Quiz/Quiz';

export const QuizContainer = () => {

  const store = useStore();
  const gameState = useSelector(state => state.str.gameState);
  const score = useSelector(state => state.str.score);
  const name = useSelector(state => state.str.name)


  const ComponentToggler = () => {
    if (gameState === 0) {
      return <Welcome />;
    } else if (gameState === 1) {
      return <Quiz score={score} />
    }
  }

  return (
    <div>
      <ComponentToggler />
    </div>
  )
}
