import { INCREMENT, RESETSCORE, SETNAME, SETGAMESTATE } from "./actionTypes";


export const addScore = content => ({
  type: INCREMENT,
  payload: {
    score: +1,
    content
  }
});

export const resetScore = () => ({
  type: RESETSCORE,
  payload: {
    score: 0
  }
});

export const setName = content => ({
  type: SETNAME,
  payload: {
    name: content.firstName,
    content
  }
});

export const setGameState = content => ({
  type: SETGAMESTATE,
  payload: {
    value: content.value,
    content
  }
});