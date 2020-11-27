import { PLAYERS_LIST, UPDATE_PLAYERS_LIST } from "./type";

export const initialState = {
  players: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERS_LIST:
      return state;
    case UPDATE_PLAYERS_LIST:
      return { ...state, players: action.payload }
    default:
      return state
  }
};

export default reducer;