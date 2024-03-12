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
import {findPointForChar, wordPointTable, wordPointTableType} from 'GameLogic/Scrabble'
import ScrabbleCharacter from './ScrabbleCharacter/ScrabbleCharacter'
import {CharPoints} from 'types/charPoints'
import {playersStore} from 'store'
import Alert from 'components/Alert/Alert'

type Props = {
  open: boolean,
  handleClose: Function,
  player: Player,
}

const ScrabblePointModal = ({open, handleClose, player}: Props) => {
  const [isAddPointsDiabled, setIsAddPointsDisabled] = useState<boolean>(false)
  const [word, setWord] = useState<string>()
  const [splitWord, setSplitWord] = useState<string[]>()
  const [charPoints, setCharPoints] = useState<CharPoints[] | undefined>()
  const [refresh, doRefresh] = useState<number>(0)
  const [points, setPoints] = useState<number>(0)
  const [wordMultiplier, setWordMultiplier] = useState<number>(1)
  const addScoreToPlayer = playersStore((state) => state.addScoreToPlayer)
  const players = playersStore((state) => state.players)

  //For confimation alert
  const [openAlert, setOpenAlert] = React.useState(false)

  const handleAlertClose = () => {
    setOpenAlert(false)
  }

  const handleAlertOpen = (e: any) => {
    e.preventDefault()
    setOpenAlert(true)
  }

  const updateInput = (event: any) => {
    setWord(event.target.value)
  }

  const changeCharMultiplier = (index: number, multiplier: number) => {
    let newCharPoints = [...(charPoints ?? [])]
    newCharPoints[index].multiplier = multiplier
    setCharPoints(newCharPoints)
  }

  useEffect(() => {
    if (word?.trim().length === 0) {
      setIsAddPointsDisabled(true)
    } else {
      setIsAddPointsDisabled(false)
    }
    const arrayOfChar = word?.toLowerCase().split('')
    setSplitWord(arrayOfChar)
    setCharPoints([])
    arrayOfChar?.forEach((char) => {
      let point = findPointForChar(char)
      setCharPoints((oldArray: CharPoints[] | undefined) => [
        ...(oldArray ?? []),
        {char: char, multiplier: 1, points: point},
      ])
    })
    doRefresh((prev) => prev + 1)
  }, [word])

  useEffect(() => {
    if (points === 0) {
      setIsAddPointsDisabled(true)
    } else {
      setIsAddPointsDisabled(false)
    }
    let tempPoints = 0
    charPoints?.forEach((char) => {
      tempPoints += char.points * char.multiplier
    })
    tempPoints *= wordMultiplier
    setPoints(tempPoints)
  }, [charPoints, wordMultiplier, points])

  const updateWordMultiplier = (e: any) => {
    e.preventDefault()
    setWordMultiplier(e.target.value)
  }

  const savePointsToPlayer = () => {
    for (let i = 0; i < players.length; i++) {
      if (players[i].name === player.name) {
        addScoreToPlayer(player, points, word, i)
      }
    }
    console.log(player)
    setWord('')
    setWordMultiplier(1)
    handleClose()
    handleAlertClose()
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

        <DialogContentText
          sx={{
            paddingBottom: '1rem',
          }}>
          Sanasta saa: {points} pistettä
        </DialogContentText>

        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <FormControl sx={{m: 1, width: '100%'}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Sana pisteet
            </InputLabel>
            <NativeSelect
              defaultValue={wordPointTable[0]}
              onChange={(e) => updateWordMultiplier(e)}>
              {wordPointTable.map((option: wordPointTableType, index: number) => (
                <option key={index} value={option.multiplier}>
                  {option.text}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <div className="scrabble-modal-word-char-container">
            {splitWord?.map((char: string, index: number) => (
              <ScrabbleCharacter
                key={index}
                listId={index}
                character={char}
                refresh={refresh}
                changeCharMultiplier={changeCharMultiplier}
              />
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
          onClick={(e) => handleAlertOpen(e)}>
          Lisää pisteet
        </Button>
      </DialogActions>
      <Alert
        handleConfirm={savePointsToPlayer}
        handleCancel={handleAlertClose}
        open={openAlert}
        text={`Pelaajalle ${player.name} lisätään sanasta ${word} ${points} pistettä. Ok?`}
        header="Varmistus"></Alert>
    </Dialog>
  )
}

export default ScrabblePointModal
