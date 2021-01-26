import * as Types from "./actionTypes";


export const addScore = content => ({
  type: Types.INCREMENT_SCORE,
  payload: ++content
});

export const resetScore = () => ({
  type: Types.RESET_SCORE,
  payload: {
    score: 0
  }
});

export const setName = content => ({
  type: Types.SET_NAME,
  payload: {
    name: content.name,
    content
  }
});

export const setGameState = content => ({
  type: Types.SET_GAMESTATE,
  payload: {
    value: content.value,
    content
  }
});

export const nextQuestion = content => ({
  type: Types.NEXT_QUESTION,
  payload: content
});

export const setQuestionAnswered = content => ({
  type: Types.SET_QUESTION_ANSWERED,
  payload:  content.value
});

export const resetGame = content => ({
  type: Types.RESET_GAME,
  payload: content.value
})