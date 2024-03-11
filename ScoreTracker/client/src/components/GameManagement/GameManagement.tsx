import React, {useEffect} from 'react'
import {Button} from '@mui/material'
import PlayerManagement from './PlayerManagement/PlayerManagement'
import './GameManagement.css'
import CurrentPlayers from 'components/CurrentPlayers/CurrentPlayers'
import {gameStateStore, playersStore} from 'store'

const GameManagement = () => {
  const [open, setOpen] = React.useState(false)
  const [canStartNewGame, setCanStartNewGame] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const startGame = gameStateStore((state) => state.startGame)
  const players = playersStore((state) => state.players)

  useEffect(() => {
    if (players.length === 0) {
      console.log('here2')
      setCanStartNewGame(false)
    } else {
      console.log('here')
      setCanStartNewGame(true)
    }
  }, [players])

  return (
    <div className="game-management-container">
      <div className="button-container-game-management">
        <Button variant="contained" onClick={handleOpen}>
          Hallinnoi pelaajia
        </Button>
        <Button variant="contained" onClick={() => startGame()} disabled={!canStartNewGame}>
          Aloita peli
        </Button>
      </div>
      <PlayerManagement open={open} handleClose={handleClose}></PlayerManagement>
      <CurrentPlayers></CurrentPlayers>
    </div>
  )
}

export default GameManagement
