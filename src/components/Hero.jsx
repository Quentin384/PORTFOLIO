// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center h-screen px-6">
      <div className="glass p-10 max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light mb-2">
          Bonjour, moi c’est Quentin
        </h1>
        <p className="text-base text-gray-200">
          Sensible aux belles interfaces et aux applis qui donnent envie d’être utilisées.
        </p>
      </div>
    </section>
  )
}
