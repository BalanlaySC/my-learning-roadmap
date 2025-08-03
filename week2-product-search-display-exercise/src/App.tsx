import './App.css'

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ProductBrowser from './components/ProductBrowser';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductBrowser />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
