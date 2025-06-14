import React from 'react'
import { motion } from 'framer-motion'

export default function LightSpot({ size, color, style, duration }) {
  return (
    <motion.div
      className="light-spot"
      style={{
        width: size, height: size,
        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        ...style
      }}
      animate={{ opacity: [0.2,0.7,0.2], scale: [1,1.1,1] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  )
}
