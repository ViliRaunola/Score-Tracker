import {create} from 'zustand'

export const playersStore = create((set) => ({
  players: [],
  addPlayer: (name) =>
    set((store) => ({players: [...store.players, {name: name, score: [], words: []}]})),
  clearPlayers: () => set(() => ({players: []})),
}))

export const gameStateStore = create((set) => ({
  gameState: {
    isGameStarted: false,
  },
  startGame: () => set(() => ({gameState: {isGameStarted: true}})),
  stopGame: () => set(() => ({gameState: {isGameStarted: false}})),
}))
