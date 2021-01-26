import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './Leaderboard.css';


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
    () => dispatch({type: 'RESET_GAME'}),
    [dispatch],
  )

  return (
    <div className="leaderBoard">
      <h1>Leaderboard:</h1>
      <div>
        <label>Sort By:</label>{' '}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="SCORE_DESC">Score (descending)</option>
          <option value="SCORE_ASC">Score (ascending)</option>
          <option disabled>---</option>
          <option value="NAME_ASC">Name(a-z)</option>
          <option value="NAME_DESC">Name(z-a)</option>
        </select>
      </div>
      <table className="score-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) =>
          <tr key={score.id} className="score-table-item">
              <td className='name-value'>
                {score.name}
              </td>
              <td className='score-value'>
                {score.score}
              </td>
          </tr>
          )}
        </tbody>
      </table>
      <button onClick={returnToStart}>Return</button>
    </div>
  )
}