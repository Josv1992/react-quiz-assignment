import React from 'react';
import { useStore, useSelector } from 'react-redux';


import { Welcome } from '../../components/Welcome/Welcome';
import { Quiz } from '../../components/Quiz/Quiz';

export const QuizContainer = () => {

  const store = useStore();
  const gameState = useSelector(state => state.scr.gameState);
  const score = useSelector(state => state.scr.score);
  const name = useSelector(state => state.scr.name)


  const ComponentToggler = () => {
    console.log('name: ', name);
    console.log('gameState: ', gameState);
    if (gameState === 0) {
      return <Welcome />;
    } else if (gameState === 1) {
      return <Quiz />
    }
  }

  return (
    <div>
      <ComponentToggler />
    </div>
  )
}
