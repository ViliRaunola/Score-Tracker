import React from 'react'
import { Button } from '@mui/material'
import PlayerManagement from './PlayerManagement/PlayerManagement'
import './GameManagement.css'
import CurrentPlayers from 'components/CurrentPlayers/CurrentPlayers'
import { gameStateStore } from 'store'

const GameManagement = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const startGame = gameStateStore((state) => state.startGame)

    return (
        <div className="game-management-container">
            <div className="button-container-game-management">
                <Button variant="contained" onClick={handleOpen}>
                    Hallinnoi pelaajia
                </Button>
                <Button variant="contained" onClick={() => startGame()}>
                    Aloita peli
                </Button>
            </div>
            <PlayerManagement
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            ></PlayerManagement>
            <CurrentPlayers></CurrentPlayers>
        </div>
    )
}

export default GameManagement
