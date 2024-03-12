import React, {useEffect} from 'react'
import './ScrabbleCharacter.css'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'
import {charPoints} from 'GameLogic/Scrabble'

type Props = {
  character: string,
  changeCharMultiplier: Function,
  listId: number,
  refresh: number,
}

const ScrabbleCharacter = ({character, changeCharMultiplier, listId, refresh}: Props) => {
  const [alignment, setAlignment] = React.useState<number | null>(1)
  const [charPoint, setCharPoints] = React.useState<number>(0)

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: number | null) => {
    setAlignment(newAlignment)
  }

  const toggleButtonSx = {width: '1.5rem', height: '1.5rem'}

  useEffect(() => {
    changeCharMultiplier(listId, alignment)
  }, [alignment, refresh])

  useEffect(() => {
    charPoints.forEach((elem) => {
      if (elem.char === character) {
        setCharPoints(elem.points)
      }
    })
  }, [character])

  return (
    <div>
      <div className="scrabble-char-conainter">
        {character}
        <div className="scrabble-char-point">{charPoint * (alignment ?? 1)}</div>
      </div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment">
        <ToggleButton value={1} aria-label="left aligned" sx={toggleButtonSx}>
          1x
        </ToggleButton>
        <ToggleButton value={2} aria-label="centered" sx={toggleButtonSx}>
          2x
        </ToggleButton>
        <ToggleButton value={3} aria-label="right aligned" sx={toggleButtonSx}>
          3x
        </ToggleButton>
        <ToggleButton value={0} aria-label="right aligned" sx={toggleButtonSx}>
          -
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ScrabbleCharacter
