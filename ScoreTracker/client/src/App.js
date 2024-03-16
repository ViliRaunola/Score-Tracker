import './App.css'
import PersistentDrawerRight from 'components/AppBar/AppBar'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Scrabble from './views/Scrabble/Scrabble'
import Home from 'views/Home/Home'

function App() {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Router>
      <div className="App">
        <PersistentDrawerRight
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/scrabble" element={<Scrabble></Scrabble>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
