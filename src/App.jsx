import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Background from './components/Background'
import Reveal from './components/Reveal'
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
      {/* Fond fixe en arrière-plan */}
      <Background />

      {/* Barre de navigation */}
      <Nav />

      {/* Sections révélées au scroll */}
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.2}>
        <About />
      </Reveal>

      <Reveal delay={0.4}>
        <Projects repos={repos} />
      </Reveal>

      <Reveal delay={0.6}>
        <Skills />
      </Reveal>

      <Reveal delay={0.8}>
        <Footer />
      </Reveal>
    </div>
  )
}
