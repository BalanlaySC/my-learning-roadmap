/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header title="Sam's Portfolio" />
      <main>
        <ProjectsSection />
      </main>
      {/* <Footer title="Copyright © 2025 Sam. All rights reserved." /> */}
    </div>
  )
}

export default App
