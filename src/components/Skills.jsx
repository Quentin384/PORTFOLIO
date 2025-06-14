// src/components/Skills.jsx
import React from 'react'
import GlassCard from './GlassCard'

export default function Skills() {
  const stacks = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular',    slug: 'angular' },
        { name: 'React',      slug: 'react' },
        { name: 'Vite',       slug: 'vite' },
        { name: 'Tailwind',   slug: 'tailwind' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java',        slug: 'java' },
        { name: 'Spring Boot', slug: 'spring' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'PostgreSQL', slug: 'postgres' },
        { name: 'MongoDB',    slug: 'mongodb' },
      ],
    },
    {
      title: 'DevOps & outils',
      skills: [
        { name: 'Git',        slug: 'git' },
        { name: 'GitHub',     slug: 'github' },
        { name: 'Docker',     slug: 'docker' },
        { name: 'Figma',      slug: 'figma' },
      ],
    },
  ]

  return (
    <section id="skills" className="relative z-10 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Compétences
        </h2>

        <GlassCard className="p-6 py-8 max-w-3xl mx-auto">
          {stacks.map(({ title, skills }) => (
            <div key={title} className="mb-8">
              <h3 className="text-lg font-medium text-white mb-4">
                {title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map(({ name, slug }) => (
                  <div key={slug} className="flex flex-col items-center">
                    <img
                      src={`https://skillicons.dev/icons?i=${slug}`}
                      alt={name}
                      className="w-12 h-12 mb-2 transition-transform transform hover:scale-110"
                    />
                    <span className="text-xs font-medium text-white">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  )
}
