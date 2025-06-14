import React from 'react'

export default function About() {
  return (
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
  )
}
