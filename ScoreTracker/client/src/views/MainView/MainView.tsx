import React from 'react'
import './MainView.css'
import GameManagement from 'components/GameManagement/GameManagement'
import CurrentPlayers from 'components/CurrentPlayers/CurrentPlayers'
import { gameStateStore } from '../../store'

const MainView = () => {
    const gameState = gameStateStore((state) => state.gameState)

    React.useEffect(() => {
        console.log(gameState.isGameStarted)
    }, [gameState.isGameStarted])

    return (
        <div className="main-view-container">
            <div className="introduction-container">
                <h1>SCRABBLE</h1>
                <p>
                    This is a v2 version of the score tracker. Done using React
                    and Django.
                </p>
            </div>
            {gameState.isGameStarted ? (
                <div>Playing the game</div>
            ) : (
                <GameManagement></GameManagement>
            )}
        </div>
    )
}

export default MainView
