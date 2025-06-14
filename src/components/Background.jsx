import React from 'react'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient global */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-pink-700" />

      {/* Light spots */}
      <motion.div
        className="light-spot"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle at center, #ff6b6b, transparent 60%)',
          top: '10%',
          left: '-15%',
        }}
        animate={{ opacity: [0.2,0.6,0.2], scale: [1,1.05,1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="light-spot"
        style={{
          width: 450,
          height: 450,
          background: 'radial-gradient(circle at center, #4fafff, transparent 60%)',
          bottom: '5%',
          right: '-10%',
        }}
        animate={{ opacity: [0.2,0.6,0.2], scale: [1,1.05,1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle at 30% 30%,#a855f7,transparent 70%)',
          top: '15%',
          left: '5%',
        }}
        animate={{ x: [0,25,-15,0], y: [0,-30,15,0], scale: [1,1.1,0.9,1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-slow"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle at 70% 70%,#3b82f6,transparent 70%)',
          bottom: '15%',
          right: '10%',
        }}
        animate={{ x: [0,-25,15,0], y: [0,30,-15,0], scale: [1,0.9,1.1,1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
