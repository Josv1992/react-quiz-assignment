import * as actionTypes from '../actionTypes';

const initialState = {
  score: 0,
  gameState: 0,
  name: 'Name',
  currentQuestion: 0,
  questionAnswered: false,
  lastAnswerCorrect: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT_SCORE:
          return {
            ...state,
            score: state.score +1
        }
        case actionTypes.SET_GAMESTATE:
          return {
              ...state,
              gameState: action.value
          }
        case actionTypes.RESET_SCORE:
          return {
              ...state,
              score: 0
          }
        case actionTypes.SET_NAME:
          return {
            ...state,
            name: action.value
          }
        case actionTypes.NEXT_QUESTION:
          return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            questionAnswered: false
          }
          case actionTypes.SET_QUESTION_ANSWERED:
            return {
              ...state,
              questionAnswered: true,
              lastAnswerCorrect: action.value
            }
        default:
          return state;
    }
};

export default reducer;