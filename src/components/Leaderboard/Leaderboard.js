import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import firebase from './../../firebase';

const SORT_OPTIONS = {
  'SCORE_DESC': {column: 'score', direction: 'desc'},
  'SCORE_ASC': {column: 'score', direction: 'asc'},

  'NAME_DESC': {column: 'name', direction: 'desc'},
  'NAME_ASC': {column: 'name', direction: 'asc'}
}

const useScores = (sortBy = 'SCORE_DESC') => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe =
    firebase
      .firestore()
      .collection('scores')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newScores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setScores(newScores);
      })

      return () => unsubscribe();
  }, [sortBy])

  return scores;
}

export const Leaderboard = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('SCORE_DESC');
  const scores = useScores(sortBy);

  const returnToStart = useCallback(
    () => dispatch({type: 'RESETGAME'}),
    [dispatch],
  )

  return (
    <div>
      <h1>Leaderboard:</h1>
      <div>
        <label>Sort By:</label>{' '}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="SCORE_DESC">Score</option>
          <option value="SCORE_ASC">Score</option>
          <option disabled>---</option>
          <option value="NAME_ASC">Name(a-z)</option>
          <option value="NAME_DESC">Name(z-a)</option>
        </select>
      </div>
      <ol>
        {scores.map((score) =>
          <li key={score.id}>
            <div className='name-entry'>
              <span>{score.name}</span>
              <span className='score'>{score.score}</span>
            </div>
          </li>
        )}
      </ol>
      <button onClick={returnToStart}>Return</button>
    </div>
  )
}