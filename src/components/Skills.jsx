// src/components/Skills.jsx
import React from 'react'

export default function Skills() {
  const skills = [
    // Frontend
    { name: 'Angular',        slug: 'angular' },
    { name: 'React',          slug: 'react' },
    { name: 'HTML5',          slug: 'html' },
    { name: 'CSS3',           slug: 'css' },
    { name: 'Tailwind',       slug: 'tailwind' },
    { name: 'TypeScript',     slug: 'ts' },
    // Backend
    { name: 'Java',           slug: 'java' },
    { name: 'Spring Boot',    slug: 'spring' },
    { name: 'Node.js',        slug: 'nodejs' },
    // Bases de données
    { name: 'PostgreSQL',     slug: 'postgres' },
    { name: 'MySQL',          slug: 'mysql' },
    { name: 'MongoDB',        slug: 'mongodb' },
    // DevOps & outils
    { name: 'GitHub Actions', slug: 'githubactions' },
    { name: 'Docker',         slug: 'docker' },
    { name: 'Figma',          slug: 'figma' },
  ]

  return (
    <section id="skills" className="relative z-10 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Compétences
        </h2>

        {/* Grande carte glass contenant tous les logos */}
        <div className="mx-auto max-w-3xl glass p-6 py-8 rounded-2xl shadow-lg bg-white bg-opacity-10">
          <div className="grid grid-cols-6 sm:grid-cols-7 gap-6">
            {skills.map(({ name, slug }) => (
              <div key={slug} className="flex flex-col items-center">
                <img
                  src={`https://skillicons.dev/icons?i=${slug}`}
                  alt={name}
                  className="w-12 h-12 mb-2 transition-transform transform hover:scale-110"
                />
                <span className="text-xs font-medium text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
