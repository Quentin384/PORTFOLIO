// src/components/Reveal.jsx
import { motion } from 'framer-motion'
import React from 'react'

/**
 * Reveal
 * - déclenchement dès 70% visible
 * - translation légère (15px)
 * - delay court (0.2s)
 * - ressort ferme pour un mouvement rapide
 * - fondu rapide (0.8s)
 */
export default function Reveal({ children, delay = 0.2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.6,            // 60% visible pour déclencher
        rootMargin: '-50px 0px' // 50px en-dehors du viewport
      }}
      transition={{
        delay,                  // délai court
        y: {
          type: 'spring',
          stiffness: 120,       // ressort très ferme → mouvement rapide
          damping: 14,          // amortissement modéré
          mass: 0.4             // objet léger
        },
        opacity: {
          duration: 0.8,        // fondu rapide
          ease: [0.42, 0, 0.58, 1] // easing “easeInOut” dynamique
        }
      }}
    >
      {children}
    </motion.div>
  )
}
