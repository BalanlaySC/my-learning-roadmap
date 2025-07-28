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
  const exampleProfile = {
    name: "Samuel Balanlay",
    title: "Software Engineer",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cbbe09e-e8af-46bf-b63f-955b1286a122/dk0s6nt-81a5741b-b66e-47c8-b5fd-220b3af302b4.png/v1/fill/w_1280,h_1280,q_80,strp/k_pop_demon_hunters_by_alexcoffeedraw2_dk0s6nt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzVjYmJlMDllLWU4YWYtNDZiZi1iNjNmLTk1NWIxMjg2YTEyMlwvZGswczZudC04MWE1NzQxYi1iNjZlLTQ3YzgtYjVmZC0yMjBiM2FmMzAyYjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yLzF4XbGtphoWhcIu3qYkLMQ0BYys0RYPBdWmKtR_b4", // A placeholder image URL
    bio: "Samuel is a passionate software engineer with a strong focus on frontend development, specializing in React and modern JavaScript. He loves building intuitive user interfaces and exploring new technologies. In his free time, he enjoys console/pc gaming and doing projects."
  };

  return (
    <div>
      <Header title="Sam's Portfolio" />
      <main>
        <ProjectsSection />
        <AboutMe 
          name={exampleProfile.name}
          title={exampleProfile.title}
          imageUrl={exampleProfile.imageUrl}
          bio={exampleProfile.bio}
        />
      </main>
      <Footer title="Copyright © 2025 Sam. All rights reserved." />
    </div>
  )
}

export default App
