import React from 'react'

export default function Hero() {
  return (
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
  )
}
