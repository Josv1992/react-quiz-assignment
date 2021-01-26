import * as Types from "./actionTypes";


export const addScore = content => ({
  type: Types.INCREMENTSCORE,
  payload: ++content
});

export const resetScore = () => ({
  type: Types.RESETSCORE,
  payload: {
    score: 0
  }
});

export const setName = content => ({
  type: Types.SETNAME,
  payload: {
    name: content.name,
    content
  }
});

export const setGameState = content => ({
  type: Types.SETGAMESTATE,
  payload: {
    value: content.value,
    content
  }
});

export const nextQuestion = content => ({
  type: Types.NEXTQUESTION,
  payload: content
});

export const setQuestionAnswered = content => ({
  type: Types.SETQUESTIONANSWERED,
  payload:  content.value
});

export const resetGame = content => ({
  type: Types.RESETGAME,
  payload: content.value
})