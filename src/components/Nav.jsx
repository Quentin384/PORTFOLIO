import React from 'react'

export default function Nav(){
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between z-20">
      <div className="text-2xl font-bold">Quentin384</div>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:underline">Accueil</a></li>
        <li><a href="#projects" className="hover:underline">Projets</a></li>
        <li><a href="#skills" className="hover:underline">Compétences</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}
