import * as actionTypes from '../actionTypes';

const initialState = {
  gameState: 0,
  currentQuestion: 0,
  questionAnswered: false,
  lastAnswerCorrect: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.SET_GAMESTATE:
          return {
              ...state,
              gameState: action.value
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