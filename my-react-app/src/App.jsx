import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
//import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
