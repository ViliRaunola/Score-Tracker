import React from 'react'
import {Button} from '@mui/material'
import {gameStateStore, playersStore} from 'store'
import Alert from 'components/Alert/Alert'
import {Player} from 'types/player'

const GameControls = () => {
  const [open, setOpen] = React.useState(false)
  const [winners, setWinners] = React.useState<Player[]>()
  const [winningScore, setWinningScore] = React.useState<number>(0)
  const players = playersStore((store) => store.players)

  const handleClickOpen = () => {
    let winningScore = 0
    players.forEach((player: Player) => {
      if (winningScore < player.totalPoints) {
        winningScore = player.totalPoints
      }
    })
    setWinningScore(winningScore)
    setWinners([])
    players.forEach((player: Player) => {
      if (player.totalPoints === winningScore) {
        setWinners((old) => [...(old ?? []), player])
      }
    })

    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const stopGame = gameStateStore((state) => state.stopGame)
  const clearPlayers = playersStore((state) => state.clearPlayers)

  const endGame = () => {
    //TODO implement save here
    handleClose()
    stopGame()
    clearPlayers()
  }

  const confirmGameEnd = () => {
    handleClickOpen()
  }

  return (
    <>
      <Button variant="contained" onClick={() => confirmGameEnd()}>
        Lopeta peli
      </Button>
      <Alert
        handleConfirm={endGame}
        handleCancel={handleClose}
        open={open}
        text={`Pelaaja ${winners?.map((winner) => winner.name + ' ')} voitti ${winningScore} pisteellä!`}
        header="GGs"></Alert>
    </>
  )
}

export default GameControls
