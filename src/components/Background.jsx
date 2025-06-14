// src/components/Background.jsx
import React from 'react'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Image de fond depuis Unsplash */}
      <div
        className="w-full h-full bg-cover bg-center filter brightness-90"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      />

      {/* Optionnel : superposition de gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-900 via-black to-pink-700 opacity-20" />
    </div>
  )
}
