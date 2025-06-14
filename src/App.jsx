import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Background from './components/Background'
import './index.css'

export default function App() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Quentin384/repos?per_page=6&sort=updated')
      .then(r => r.json())
      .then(setRepos)
  }, [])

  return (
    <div className="relative font-sans text-white min-h-screen overflow-x-hidden">
      {/* Fond fixe */}
      <Background />

      <Nav />
      <Hero />
      <About />
      <Projects repos={repos} />
      <Skills />
      <Footer />
    </div>
  )
}
