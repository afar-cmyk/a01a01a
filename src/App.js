import React from 'react'
import logo from './logo.png'
// import decorations from './decorations.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="decoraciones" /> */}

        <img src={logo} className="App-logo" alt="logo" />
        <p className="texto">
          Bienvenido a <code>01a01</code>, desarrollandose con:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  )
}

export default App
