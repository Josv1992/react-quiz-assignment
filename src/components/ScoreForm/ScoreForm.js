import React, { useState } from 'react';

import firebase from '../../firebase';



export const ScoreForm = ({name, score}) => {

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection('scores')
      .add({
        name,
        score
      })

      // TODO: Go to leaderboard
  }

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