import * as actionTypes from '../actionTypes';

const initialState = {
  score: 0,
  gameState: 0,
  name: 'Name',
  currentQuestion: 0,
  questionAnswered: false,
  lastAnswerCorrect: false,
  questionResult: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENTSCORE:
          return {
            ...state,
            score: ++action.value
        }
        case actionTypes.SETGAMESTATE:
          return {
              ...state,
              gameState: action.value
          }
        case actionTypes.RESETSCORE:
          return {
              ...state,
              score: 0
          }
        case actionTypes.SETNAME:
          return {
            ...state,
            name: action.value
          }
        case actionTypes.NEXTQUESTION:
          return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            questionAnswered: false
          }
          case actionTypes.SETQUESTIONANSWERED:
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