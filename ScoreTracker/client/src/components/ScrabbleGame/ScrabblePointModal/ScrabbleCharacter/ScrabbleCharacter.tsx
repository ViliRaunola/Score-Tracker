import React from 'react'
import './ScrabbleCharacter.css'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'

type Props = {
  character: String,
}

const ScrabbleCharacter = ({character}: Props) => {
  const [alignment, setAlignment] = React.useState<number | null>(1)

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: number | null) => {
    setAlignment(newAlignment)
  }

  return (
    <div>
      <div className="scrabble-char-conainter">{character}</div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment">
        <ToggleButton value={1} aria-label="left aligned" sx={{width: '1rem', height: '1rem'}}>
          1x
        </ToggleButton>
        <ToggleButton value={2} aria-label="centered" sx={{width: '1rem', height: '1rem'}}>
          2x
        </ToggleButton>
        <ToggleButton value={3} aria-label="right aligned" sx={{width: '1rem', height: '1rem'}}>
          3x
        </ToggleButton>
        <ToggleButton value={0} aria-label="right aligned" sx={{width: '1rem', height: '1rem'}}>
          -
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ScrabbleCharacter
