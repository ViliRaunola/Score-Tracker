import { create } from 'zustand'

export const playersStore = create((set) => ({
    players: [],
    addPlayer: (name) =>
        set((store) => ({ players: [...store.players, { name: name }] })),
}))

export const gameStateStore = create((set) => ({
    gameState: {
        isGameStarted: false,
    },
    startGame: () => set(() => ({ isGameStarted: true })),
    stopGage: () => set(() => ({ isGameStarted: false })),
}))
