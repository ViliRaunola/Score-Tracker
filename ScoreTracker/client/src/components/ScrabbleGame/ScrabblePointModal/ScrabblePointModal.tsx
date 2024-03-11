import React, {useEffect, useState} from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material'
import './ScrabblePointModal.css'
import {Player} from 'types/player'
import {wordPointTable, wordPointTableType} from 'GameLogic/Scrabble'
import ScrabbleCharacter from './ScrabbleCharacter/ScrabbleCharacter'

type Props = {
  open: boolean,
  handleClose: Function,
  player: Player,
}

const ScrabblePointModal = ({open, handleClose, player}: Props) => {
  const [isAddPointsDiabled, setIsAddPointsDisabled] = useState<boolean>(false)
  const [word, setWord] = useState<String>()
  const [splitWord, setSplitWord] = useState<String[]>()

  const updateInput = (event: any) => {
    setWord(event.target.value)
  }

  useEffect(() => {
    if (word?.trim().length === 0) {
      setIsAddPointsDisabled(true)
    } else {
      setIsAddPointsDisabled(false)
    }
    setSplitWord(word?.toLowerCase().split(''))
  }, [word])

  const calculatePoints = (e: any) => {
    e.preventDefault()

    setWord('')
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <DialogTitle>Anna pelaajalle {player.name} pisteet</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            paddingBottom: '1rem',
          }}>
          Syötä pelaajan antama sana ja valitse tarvittavat lisäpisteet.
        </DialogContentText>
        <TextField
          sx={{mb: '1rem'}}
          autoFocus
          required
          margin="dense"
          id="word"
          name="word"
          label="Sana"
          type="text"
          fullWidth
          variant="outlined"
          helperText="Pelaajan luoma sana"
          value={word}
          onInput={(e) => updateInput(e)}></TextField>

        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <FormControl sx={{m: 1, width: '100%'}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Sana pisteet
            </InputLabel>
            <NativeSelect defaultValue={wordPointTable[0]}>
              {wordPointTable.map((option: wordPointTableType) => (
                <option value={option.multiplier}>{option.text}</option>
              ))}
            </NativeSelect>
          </FormControl>
          <div className="scrabble-modal-word-char-container">
            {splitWord?.map((char: String) => (
              <ScrabbleCharacter character={char} />
            ))}
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} variant="outlined">
          Peruuta
        </Button>
        <Button
          type="submit"
          variant="outlined"
          disabled={isAddPointsDiabled}
          onClick={(e) => calculatePoints(e)}>
          Lisää pisteet
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ScrabblePointModal
