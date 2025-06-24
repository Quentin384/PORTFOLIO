import React, { useEffect, useState, useRef } from 'react'
import Nav from './components/Nav'
import Switch from './components/Switch'
import SunMoonIcon from './components/SunMoonIcon'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Background from './components/Background'
import Reveal from './components/Reveal'
import './index.css'

/**
 * Composant principal de l'application
 *
 * Gère l'état global : récupération manuelle des repos GitHub mis en avant,
 * animation du SunMoonIcon et toggle du background.
 */
export default function App() {
  // Liste des repositories à afficher + url du site déployé (si dispo)
  const featuredRepos = [
    {
      name: 'FRONTEND-GROUPSMAKER',
      liveUrl: null, 
    },
    {
      name: 'BACKEND-GROUPSMAKER',
      liveUrl: null,
    },
    {
      name: 'SPRINGBOOT-API',
      liveUrl: null,
    },
    {
      name: 'MINI-ERP',
      liveUrl: null, 
    },
    {
      name: 'Java-Shoot',
      liveUrl: null,
    },
    {
      name: 'MyTamagochi',
      liveUrl: 'https://quentin384.github.io/MyTamagochi/',
    },
  ]

  // État pour stocker la liste des repositories GitHub à afficher
  const [repos, setRepos] = useState([])

  // État du switch (true = image par défaut, false = image alternative)
  const [isChecked, setIsChecked] = useState(true)

  // Référence vers le composant SunMoonIcon pour contrôler l'animation
  const iconRef = useRef(null)

  /**
   * Effet de bord : récupération des repos GitHub listés dans featuredRepos
   */
  useEffect(() => {
    Promise.all(
      featuredRepos.map((repo) =>
        fetch(`https://api.github.com/repos/Quentin384/${repo.name}`)
          .then((res) => res.json())
          .then((data) => ({
            ...data,
            liveUrl: repo.liveUrl, // On ajoute l'url live à l'objet repo récupéré
          }))
      )
    )
      .then((data) => setRepos(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des repos :', error)
      )
  }, [])

  /**
   * Handler pour le toggle du switch
   */
  const handleToggle = (checked) => {
    setIsChecked(checked)
    iconRef.current?.startAnimation()
    setTimeout(() => iconRef.current?.stopAnimation(), 800)
  }

  return (
    <div className="relative font-sans text-white min-h-screen overflow-x-hidden">
      {/* Background : change l'image selon isChecked */}
      <Background isAlt={isChecked} />

      {/* Barre de navigation principale */}
      <Nav />

      {/* Zone fixe en haut à droite : icône et switch */}
      <div className="fixed top-14 right-8 z-30 flex items-center space-x-4">
        {/* Icône animée soleil/lune contrôlée par ref */}
        <SunMoonIcon ref={iconRef} size={20} />

        {/* Switch contrôlé */}
        <Switch checked={isChecked} onChange={handleToggle} />
      </div>

      {/* Sections principales révélées au scroll */}
      <Reveal><Hero /></Reveal>
      <Reveal delay={0.2}><About /></Reveal>
      <Reveal delay={0.4}><Projects repos={repos} /></Reveal>
      <Reveal delay={0.6}><Skills /></Reveal>
      <Reveal delay={0.8}><Footer /></Reveal>
    </div>
  )
}
