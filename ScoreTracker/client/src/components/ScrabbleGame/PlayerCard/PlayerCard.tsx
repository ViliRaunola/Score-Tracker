import React from 'react'

import './PlayerCard.css'
import {Player} from 'types/player'
import {Button} from '@mui/material'
import ScrabblePointModal from '../ScrabblePointModal/ScrabblePointModal'

type Props = {
  player: Player,
}

const PlayerCard = ({player}: Props) => {
  const [open, setOpen] = React.useState(false)
  const [canStartNewGame, setCanStartNewGame] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="player-card-outer-container">
      <p>{player.name}</p>
      <ScrabblePointModal open={open} handleClose={handleClose} player={player} />
      <Button sx={{width: '3rem', minWidth: 'unset'}} onClick={handleOpen}>
        +
      </Button>
    </div>
  )
}

export default PlayerCard
