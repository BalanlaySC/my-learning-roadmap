import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import GameList from './components/GameList';
import GameDetailPage from './components/GameDetailPage';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<GameList />}/>
          <Route path="/games/:id" element={<GameDetailPage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
