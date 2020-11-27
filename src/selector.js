import { createSelector } from 'reselect';
import { initialState } from './reducer';

const players = state => state.players || initialState;

export const selectPlayers = () =>
  createSelector(
    players,
    state => state.players,
  );