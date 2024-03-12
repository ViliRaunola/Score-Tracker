import {create} from 'zustand'

export const playersStore = create((set) => ({
  players: [],
  addPlayer: (name) =>
    set((store) => ({
      players: [...store.players, {name: name, score: [], words: [], totalPoints: 0}],
    })),
  clearPlayers: () => set(() => ({players: []})),
  addScoreToPlayer: (player, points, word) => {
    set((store) => {
      let tempPlayers = [...store.players]
      for (let i = 0; i < tempPlayers.length; i++) {
        if (tempPlayers[i].name === player.name) {
          tempPlayers[i].score.push(points)
          tempPlayers[i].words.push(word)
          tempPlayers[i].totalPoints += points
        }
      }

      return {players: tempPlayers}
    })
  },
}))

export const gameStateStore = create((set) => ({
  gameState: {
    isGameStarted: false,
  },
  startGame: () => set(() => ({gameState: {isGameStarted: true}})),
  stopGame: () => set(() => ({gameState: {isGameStarted: false}})),
}))
