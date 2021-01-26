import * as actionTypes from '../actionTypes';

const initialState = {
  score: 0,
  gameState: 0,
  name: 'Name'
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
          const newState = Object.assign({}, state);
          newState.score = state.score + 1;
          return newState;
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
    }
    return state;
};

export default reducer;