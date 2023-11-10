import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './Tictactoe.tsx'
import Game from './Tictactoe.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Game />
    <button />
  </React.StrictMode>,
)
