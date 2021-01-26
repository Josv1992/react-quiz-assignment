import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScoreForm } from './../ScoreForm/ScoreForm';

export const Results = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.str.score);
  const name = useSelector(state => state.str.name);

  const returnToStart = useCallback(
    () => dispatch({type: 'RESETGAME'}),
    [dispatch],
  )

  return (
    <div>
      <h1>Results:</h1>
      <ScoreForm name={name} score={score} />
      <button onClick={returnToStart}>Return</button>
    </div>
  )
}