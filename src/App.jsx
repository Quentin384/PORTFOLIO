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
 * Gère l'état global : récupération des repos GitHub,
 * animation du SunMoonIcon et toggle du background.
 */
export default function App() {
  // État pour stocker la liste des repositories GitHub
  const [repos, setRepos] = useState([])

  // État du switch (true = image par défaut, false = image alternative)
  const [isChecked, setIsChecked] = useState(true)

  // Référence vers le composant SunMoonIcon pour contrôler l'animation
  // On initialise sans type générique pour rester en JavaScript
  const iconRef = useRef(null)

  /**
   * Effet de bord : récupération des 6 repos GitHub les plus récemment mis à jour
   * au montage du composant (équivalent de componentDidMount)
   */
  useEffect(() => {
    fetch('https://api.github.com/users/Quentin384/repos?per_page=6&sort=updated')
      .then(res => res.json())
      .then(data => {
        // On met à jour l'état repos avec les données reçues
        setRepos(data)
      })
      .catch(error => {
        // Gestion basique des erreurs
        console.error('Erreur lors de la récupération des repos :', error)
      })
  }, [])

  /**
   * Handler pour le toggle du switch
   * @param {boolean} checked - nouvelle valeur du switch
   *
   * Met à jour l'état isChecked, lance l'animation du SunMoonIcon
   * et l'arrête après 800ms.
   */
  const handleToggle = (checked) => {
    setIsChecked(checked)

    // Démarrage de l'animation du SunMoonIcon
    iconRef.current?.startAnimation()

    // Arrêt de l'animation après une courte durée
    setTimeout(() => {
      iconRef.current?.stopAnimation()
    }, 800)
  }

  return (
    <div className="relative font-sans text-white min-h-screen overflow-x-hidden">
      {/*
        Background : change l'image selon isChecked
        isAlt = false : image par défaut
        isAlt = true  : image alternative
      */}
      <Background isAlt={isChecked} />

      {/* Barre de navigation principale */}
      <Nav />

      {/*
        Zone fixe en haut à droite contenant le Switch et l'icône
        flex : pour aligner horizontalement
        items-center : centrer verticalement
        space-x-2 : espacement horizontal entre les éléments
        z-30 : superposition au-dessus des autres sections
      */}
      <div className="fixed top-14 right-8 z-30 flex items-center space-x-2">
        {/* Icône animée soleil/lune contrôlée par ref */}
        <SunMoonIcon ref={iconRef} size={20} />

        {/* Switch contrôlé : passe de true à false */}
        <Switch checked={isChecked} onChange={handleToggle} />
      </div>

      {/* Sections principales révélées l'une après l'autre au scroll */}
      <Reveal>
        {/* Section Héros avec titre, sous-titre, etc. */}
        <Hero />
      </Reveal>

      <Reveal delay={0.2}>
        {/* Section À propos présentant l'utilisateur */}
        <About />
      </Reveal>

      <Reveal delay={0.4}>
        {/* Section Projets affichant les repos GitHub récupérés */}
        <Projects repos={repos} />
      </Reveal>

      <Reveal delay={0.6}>
        {/* Section Compétences */}
        <Skills />
      </Reveal>

      <Reveal delay={0.8}>
        {/* Pied de page */}
        <Footer />
      </Reveal>
    </div>
  )
}
