import React from 'react'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-20">
      <div className="text-xl font-light">Quentin Zampieri</div>
      <ul className="flex space-x-6 font-light">
        <li><a href="#hero" className="hover:underline">Accueil</a></li>
        <li><a href="#projects" className="hover:underline">Projets</a></li>
        <li><a href="#skills" className="hover:underline">Compétences</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}
