import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function GlassCard({ children, className = '' }) {
  return (
    <Tilt
      className={`glass ${className} overflow-hidden`}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={false}
      scale={1.02}
      transitionSpeed={250}
      style={{ width: '100%', height: '100%' }}
    >
      {/* On peut supprimer le <div> ou ne garder que le padding */}
      <div className="h-full p-4">
        {children}
      </div>
    </Tilt>
  )
}
