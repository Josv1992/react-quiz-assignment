import * as actionTypes from '../actionTypes';

const initialState = {
  score: 0,
  name: '',
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT_SCORE:
          return {
            ...state,
            score: state.score +1
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
        default:
          return state;
    }
};

export default reducer;