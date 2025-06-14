// src/App.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import './index.css'

export default function App() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Quentin384/repos?per_page=6&sort=updated')
      .then((res) => res.json())
      .then(setRepos)
  }, [])

  return (
    <div className="relative font-sans min-h-screen overflow-x-hidden text-white">
      {/* Fond global ABSOLUTE (défile avec le parent) */}
      <Background />

      <Nav />

      {/* HERO */}
      <section id="hero" className="flex items-center justify-center h-screen px-6">
        <div className="glass p-10 max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-2">
            Bonjour, moi c’est Quentin
          </h1>
          <p className="text-base text-gray-300">
            Développeur Full-Stack passionné par l’open-source et les applis Web & Mobiles.
          </p>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-light">À propos</h2>
          <div className="flex items-center justify-center space-x-3">
            <img
              src="https://avatars.githubusercontent.com/Quentin384"
              alt="Avatar Quentin"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-300 font-light">Quentin384</span>
          </div>
          <p className="text-gray-400 text-sm">
            Développeur Full-Stack chez oksak, passionné d’open-source.<br />
            Expérience Web & applis mobiles.
          </p>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-light text-center mb-6">Projets</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((r) => (
              <div key={r.id} className="glass p-4 h-40 flex flex-col justify-between">
                <h3 className="text-lg font-medium">{r.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {r.description ?? '–'}
                </p>
                <div className="flex items-center justify-between text-xs">
                  {r.language && (
                    <span className="px-2 py-0.5 bg-white/10 rounded-full">
                      {r.language}
                    </span>
                  )}
                  <a href={r.html_url} target="_blank" className="hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['JavaScript', 'React', 'Tailwind', 'Framer Motion', 'Node.js'].map((s) => (
              <span key={s} className="glass px-4 py-1 text-xs font-light">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="py-8 px-6 text-center text-gray-500 text-sm">
        © 2025 Quentin384 —{' '}
        <a href="mailto:ton.email@example.com" className="hover:underline">
          Contact
        </a>
      </footer>
    </div>
  )
}

/**
 * Background : absolute, pas fixed !
 * Place gradients, light-spots et blobs ici.
 * Il défilera avec la page car il est positionné
 * par rapport au parent "relative".
 */
function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Dégradé global */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-pink-700" />

      {/* Spots lumineux */}
      <motion.div
        className="absolute light-spot"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle,#ff4f4f,transparent 70%)',
          top: '15%',
          left: '-10%',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute light-spot"
        style={{
          width: 450,
          height: 450,
          background: 'radial-gradient(circle,#4fafff,transparent 70%)',
          bottom: '10%',
          right: '-15%',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blobs animés */}
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"
        style={{
          width: 280,
          height: 280,
          background: 'radial-gradient(circle at 30% 30%,#a855f7,transparent 70%)',
          top: '8%',
          left: '8%',
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-slow"
        style={{
          width: 380,
          height: 380,
          background: 'radial-gradient(circle at 70% 70%,#3b82f6,transparent 70%)',
          bottom: '12%',
          right: '12%',
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
