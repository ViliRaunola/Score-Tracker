import React from 'react'
import './MainView.css'
import GameManagement from 'components/GameManagement/GameManagement'
import ScrabbleGame from 'components/ScrabbleGame/ScrabbleGame'
import {gameStateStore} from '../../store'

const MainView = () => {
  const gameState = gameStateStore((state) => state.gameState)

  return (
    <div className="main-view-container">
      <div className="introduction-container">
        <h1>SCRABBLE</h1>
      </div>
      {gameState.isGameStarted ? <ScrabbleGame /> : <GameManagement />}
    </div>
  )
}

export default MainView
