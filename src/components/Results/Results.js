import React from 'react';
import { useSelector } from 'react-redux';
import { ScoreForm } from './../ScoreForm/ScoreForm';

export const Results = () => {
  const score = useSelector(state => state.str.score);
  const name = useSelector(state => state.str.name);

  return (
    <div>
      <h1>Results:</h1>
      <ScoreForm name={name} score={score} />
    </div>
  )
}