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
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="player-card-outer-container">
      <div
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem'}}>
        <p>
          {player.name}: {player.totalPoints}
        </p>
        <Button sx={{width: '1.25rem', height: '1.25rem', minWidth: 'unset'}} onClick={handleOpen}>
          +
        </Button>
      </div>

      <div className="player-results-grid">
        {player.words.map((word: string, index: number) => (
          <>
            <span>{word}</span>
            <span>{player.score[index]}</span>
          </>
        ))}
      </div>

      <ScrabblePointModal open={open} handleClose={handleClose} player={player} />
    </div>
  )
}

export default PlayerCard
