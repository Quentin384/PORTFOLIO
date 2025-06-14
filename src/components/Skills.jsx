import React from 'react'

export default function Skills(){
  const skills = ['JavaScript','React','Tailwind CSS','Framer Motion','Node.js']
  return (
    <section id="skills" className="py-20 px-6 bg-[rgba(0,0,0,0.5)]">
      <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(s=>(
          <span key={s} className="glass px-5 py-2 text-sm font-medium">{s}</span>
        ))}
      </div>
    </section>
  )
}
