import React from 'react'
import { playersStore } from 'store'
import { Player } from 'types/player'
import './CurrentPlayers.css'

const CurrentPlayers = () => {
    const players = playersStore((state) => state.players)

    return (
        <div className="current-players-container">
            <h3>Pelaajat lisätty peliin:</h3>

            {players.length === 0 ? (
                <p>Peliin ei ole lisätty pelaajia...</p>
            ) : (
                players.map((player: Player) => {
                    return <p>{player.name}</p>
                })
            )}
        </div>
    )
}

export default CurrentPlayers
