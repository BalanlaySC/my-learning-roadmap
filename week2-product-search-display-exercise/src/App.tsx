/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import ProductBrowser from './components/ProductBrowser';

function App() {
  return (
    <div>
      <Header title="Product Browser" />
      <main>
        <ProductBrowser />
      </main>
    </div>
  )
}

export default App
