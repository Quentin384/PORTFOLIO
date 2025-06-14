import React from 'react'
import GlassCard from './GlassCard'

// Composant fonctionnel représentant la section "Hero" de la page
export default function Hero() {
  return (
    // Section parent en flex pour centrer horizontalement et verticalement
    // py-20 ajoute un padding vertical, px-6 ajoute un padding horizontal
    <section id="hero" className="flex items-center justify-center py-20 px-6">

      {/* Utilisation de GlassCard pour l'effet \"verre\" et tilt */}
      {/* inline-flex permet à l'élément de se shrink-to-fit selon son contenu */}
      {/* flex-col pour disposer les enfants en colonne, items-center pour centrer le contenu */}
      {/* p-10 définit le padding interne, max-w-2xl limite la largeur à 42rem, mx-auto centre horizontalement */}
      {/* mt-8 ajoute une marge en haut de 2rem pour espacer la capsule du haut de la section */}
      <GlassCard className="inline-flex flex-col items-center p-10 mt-12 max-w-2xl mx-auto text-center">

        {/* Titre principal de la section */}
        {/* text-5xl et md:text-7xl définissent la taille du texte suivant la taille d'écran */}
        {/* font-light applique une graisse légère, mb-2 ajoute une marge inférieure */}
        <h1 className="text-5xl md:text-7xl font-light mb-2">
          Bonjour, moi c’est Quentin
        </h1>

        {/* Paragraphe descriptif */}
        {/* text-base définit la taille de base du texte, text-gray-200 applique une couleur grise claire */}
        <p className="text-base text-gray-200">
          Sensible aux belles interfaces et aux applis qui donnent envie d’être utilisées.
        </p>

      </GlassCard>
    </section>
  )
}
