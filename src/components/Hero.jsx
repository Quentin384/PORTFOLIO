import React from 'react'
import { motion } from 'framer-motion'
import LightSpot from './LightSpot.jsx'

export default function Hero(){
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen overflow-hidden bg-darkbg">
      {/* Ambiance gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#4f3cff,_transparent_60%)] pointer-events-none"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ff4694,_transparent_60%)] pointer-events-none"/>

      {/* Light spots */}
      <LightSpot size={400} color="#ff4f4f" style={{ top:'15%', left:'-10%'}} duration={10}/>
      <LightSpot size={500} color="#4fafff" style={{ bottom:'10%', right:'-15%'}} duration={12}/>

      {/* Blobs */}
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60"
        style={{ width:300, height:300, background:'radial-gradient(#a855f7, transparent 70%)', top:'10%', left:'5%'}}
        animate={{ x:[0,30,-20,0], y:[0,-50,20,0], scale:[1,1.1,0.9,1] }}
        transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        style={{ width:400, height:400, background:'radial-gradient(#3b82f6, transparent 70%)', bottom:'10%', right:'10%'}}
        animate={{ x:[0,-30,20,0], y:[0,40,-30,0], scale:[1,0.9,1.1,1] }}
        transition={{ duration:12, repeat:Infinity, ease:'easeInOut' }}
        aria-hidden="true"
      />

      {/* Glass card */}
      <div className="glass p-12 max-w-lg text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Bonjour, moi c’est Quentin</h1>
        <p className="text-lg opacity-80">
          Développeur Full-Stack passionné par l’open-source et les applis Web & Mobiles.
        </p>
      </div>
    </section>
  )
}
