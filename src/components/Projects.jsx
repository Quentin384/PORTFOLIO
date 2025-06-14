import React, {useState,useEffect} from 'react'
import GlassCard from './GlassCard.jsx'

export default function Projects({githubUser}){
  const [repos,setRepos] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/${githubUser}/repos?per_page=6&sort=updated`)
      .then(r=>r.json()).then(setRepos)
  },[githubUser])

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map(r=>(
          <GlassCard key={r.id}>
            <h3 className="text-2xl font-semibold mb-2">{r.name}</h3>
            <p className="text-sm mb-4">{r.description}</p>
            {r.language && <span className="px-3 py-1 bg-white/20 rounded-full text-xs">{r.language}</span>}
            <div className="mt-4">
              <a href={r.html_url} target="_blank" rel="noopener" className="text-blue-200 hover:underline text-sm">
                Voir sur GitHub
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
