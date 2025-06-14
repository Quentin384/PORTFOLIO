// src/components/Background.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Blob from './Blob'

const PATH1 = "M120,-150C157,-111,176,-62,175,-16C174,30,154,73,119,109C84,145,34,175,-10,169C-54,163,-93,121,-125,80C-157,39,-181,-1,-173,-44C-165,-86,-126,-131,-83,-162C-40,-193,9,-209,50,-185C90,-161,83,-189,120,-150Z"
const PATH2 = "M164,-156C197,-123,205,-62,203,-8C200,46,187,92,153,130C118,168,62,199,3,198C-57,196,-115,162,-147,116C-180,70,-185,12,-177,-38C-169,-88,-147,-128,-108,-156C-68,-183,-34,-198,16,-210C66,-222,132,-189,164,-156Z"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-pink-700" />

      {/* Blobs statiques */}
      <Blob
        svgPath={PATH1}
        className="absolute text-purple-600 opacity-50"
        style={{
          width: 500,
          height: 500,
          top: '10%',
          left: '5%',
          filter: 'blur(60px)',  // less blur
          zIndex: 10,
        }}
      />
      <Blob
        svgPath={PATH2}
        className="absolute text-blue-500 opacity-40"
        style={{
          width: 600,
          height: 600,
          bottom: '15%',
          right: '8%',
          filter: 'blur(80px)',  // less blur
          zIndex: 10,
        }}
      />

      {/* Light-spots animés */}
      <motion.div
        className="absolute mix-blend-screen"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle at center, #ff6b6b, transparent 60%)',
          top: '15%',
          left: '-20%',
          filter: 'blur(80px)',
          zIndex: 20,
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute mix-blend-screen"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle at center, #4fafff, transparent 60%)',
          bottom: '5%',
          right: '-15%',
          filter: 'blur(60px)',
          zIndex: 20,
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 20, -20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
