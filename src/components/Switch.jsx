import React from 'react'
import '../styles/switch.css' 

export default function Switch({ checked, onChange, className = '' }) {
  return (
    <label className={`switch ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <span className="slider" />
    </label>
  )
}
