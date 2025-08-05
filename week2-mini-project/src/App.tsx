import './App.css'

// import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <GameList />
      </main>
    </div>
  )
}

export default App
