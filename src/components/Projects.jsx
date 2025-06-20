import React from 'react'
import GlassCard from './GlassCard'

export default function Projects({ repos }) {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-light text-center mb-6">Projets</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <a
              key={r.id}
              href={r.liveUrl ? r.liveUrl : r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ textDecoration: "none" }}
            >
              <GlassCard className="p-4 h-40 flex flex-col justify-between transition-transform group-hover:scale-105 cursor-pointer">
                <h3 className="text-lg font-medium">{r.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{r.description ?? '–'}</p>
                <div className="flex items-center justify-between text-xs">
                  {r.language && (
                    <span className="px-2 py-0.5 bg-white/10 rounded-full">{r.language}</span>
                  )}
                  <span className="underline opacity-60 group-hover:opacity-100 transition-opacity">
                    {r.liveUrl ? 'Voir le site' : 'GitHub'}
                  </span>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
