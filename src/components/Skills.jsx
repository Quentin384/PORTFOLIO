import React from 'react'

export default function Skills() {
  const skills = ['JavaScript','React','Tailwind','Framer Motion','Node.js']
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-light mb-4">Compétences</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(s => (
            <span key={s} className="glass px-4 py-1 text-xs font-light">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
