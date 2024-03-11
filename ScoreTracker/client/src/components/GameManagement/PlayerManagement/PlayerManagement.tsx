import * as React from 'react'
import Button from '@mui/material/Button'

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import { playersStore } from 'store'
import { Player } from 'types/player'


type Props = {
    open: boolean
    handleClose: Function
}

export default function BasicModal({ open, handleClose }: Props) {
    const [playerName, setPlayerName] = useState('')
    const [isAddPlayerDisabled, setIsAddPlayerDisabled] = useState(true)
    const players = playersStore((state) => state.players)
    const addPlayer = playersStore((state) => state.addPlayer)

    React.useEffect(() => {
        if (playerName.trim() === '') {
            setIsAddPlayerDisabled(true)
        } else {
            setIsAddPlayerDisabled(false)
        }
    }, [playerName])

    const updateInput = (event: any) => {
        setPlayerName(event.target.value)
    }

    const addNewPlayer = (e: any) => {
        e.preventDefault()
        addPlayer(playerName)
        setPlayerName('')
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={(e) => addNewPlayer(e)}>
                    <DialogTitle>Hallinnoi pelaajia</DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            sx={{
                                paddingBottom: '1rem',
                            }}
                        >
                            Hallinnoi uuden pelin pelaajia täältä.
                        </DialogContentText>

                        {players.length === 0 ? (
                            <DialogContentText>
                                Pelissä ei ole pelaajia
                            </DialogContentText>
                        ) : (
                            players.map((player: Player, index: Number) => {
                                return (
                                   
                                    <DialogContentText
                                        sx={{
                                            color: 'black',
                                            paddingNottom: '0.25rem',
                                        }}
                                    >
                                        {player.name}
                                    </DialogContentText>
                                 
                                )
                            })
                        )}
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Pelaajan nimi"
                            type="text"
                            fullWidth
                            variant="standard"
                            helperText="Pelaajan nimi"
                            value={playerName}
                            onInput={(e) => updateInput(e)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose()} variant="outlined">Takaisin</Button>
                        <Button
                            type="submit"
                            disabled={isAddPlayerDisabled}
                            variant="outlined"
                        >
                            Lisää pelaaja
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
