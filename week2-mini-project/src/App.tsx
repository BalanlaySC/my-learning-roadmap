import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import GameList from './components/GameList';
import GameDetailPage from './components/GameDetailPage';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <div>
      <Header />
      <PageLayout>
          <Routes>
            <Route path="/" element={<GameList />}/>
            <Route path="/games/:id" element={<GameDetailPage />}/>
          </Routes>
      </PageLayout>
    </div>
  )
}

export default App
