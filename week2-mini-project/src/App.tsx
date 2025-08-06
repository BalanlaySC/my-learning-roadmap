import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import GameList from './components/GameList';
import GameDetailPage from './components/GameDetailPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<GameList />}/>
        {/* <main className="container mx-auto p-4">
        </main> */}
        <Route path="/games/:id" element={<GameDetailPage />}/>
      </Routes>
    </div>
  )
}

export default App
