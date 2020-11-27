import { PLAYERS_LIST, UPDATE_PLAYERS_LIST } from "./type"

export const loadPlayers = () => {
  return {
    type: PLAYERS_LIST
  }
}

export const updatePlayers = (payload) => {
  return {
    type: UPDATE_PLAYERS_LIST,
    payload
  }
} 