import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import firebase from '../../firebase';

export const ScoreForm = ({name, score}) => {
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection('scores')
      .add({
        name,
        score
      })
      
      goToLeaderboard();
  }

  const goToLeaderboard = useCallback(
    () => dispatch({type: 'SET_GAMESTATE', value: 3}),
    [dispatch],
  )

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <h2>{name}</h2>
      </div>
      <div>
        <label>Score:</label>
        <h2>{score}</h2>
      </div>
      <button>Submit Score</button>
    </form>
  )
}