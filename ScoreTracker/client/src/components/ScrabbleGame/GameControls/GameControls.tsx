import React from 'react'
import {Button} from '@mui/material'
import {gameStateStore, playersStore} from 'store'

const GameControls = () => {
  const stopGame = gameStateStore((state) => state.stopGame)
  const clearPlayers = playersStore((state) => state.clearPlayers)

  const endGame = () => {
    //TODO implement save here
    stopGame()
    clearPlayers()
  }

  return (
    <Button variant="contained" onClick={() => endGame()}>
      Lopeta peli
    </Button>
  )
}

export default GameControls
