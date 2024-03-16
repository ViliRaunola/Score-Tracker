import React from 'react'
import './Home.css'

const Home = () => {
  const style0 = {
    fontSize: '1.1rem',
  }

  const style1 = {
    fontSize: '1rem',
  }

  const style2 = {
    fontSize: '0.9rem',
  }

  return (
    <div className="home-container">
      <h1>Tervetuloa!</h1>
      <p style={style0}>
        Tämä sovellus on tehty eri lautapelien pisteiden laskuun ja tulosten säilömiseen.
      </p>
      <p style={style1}>Voit valita haluamasi pelin oikealta löytyvästä valikosta.</p>
      <p style={style2}>
        Sovellus on MVP versio ja uusia ominaisuuksia julkaistaan lähiaikoina lisää :D
      </p>
    </div>
  )
}

export default Home
