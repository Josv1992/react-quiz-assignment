import React from 'react'

// import Welcome from '../../components/Welcome/Welcome';
// import Quiz from '../../components/Quiz/Quiz';

export const QuizContainer = () => {

  // const gameState = 0;

  const ComponentToggler = () => {
    return (
      <div>
        Component Toggler
      </div>
    )
    // if (gameState === 0) {
    //   return <Welcome />;
    // } else {
    //   return <Quiz />
    // }
  }

  return (
    <div>
      <ComponentToggler />
      <h1>Quiz Container</h1>
    </div>
  )
}

