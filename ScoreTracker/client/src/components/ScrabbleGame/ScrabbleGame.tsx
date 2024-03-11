import React from 'react'
import GameControls from './GameControls/GameControls'
import PlayerCard from './PlayerCard/PlayerCard'
import {playersStore} from 'store'
import './ScrabbleGame.css'
import {Player} from 'types/player'

const ScrabbleGame = () => {
  const players = playersStore((state) => state.players)

  React.useEffect(() => {
    console.log(players)
  }, [players])

  return (
    <div className="scrabble-outer-container">
      <p>Uusi Scrabble peli on alkanut! Näet pelaajien vuorot, sanat sekä pisteet alta.</p>
      <div className="scrabble-players-container">
        {players.map((player: Player) => (
          <PlayerCard player={player} />
        ))}
      </div>

      <GameControls />
    </div>
  )
}

export default ScrabbleGame
