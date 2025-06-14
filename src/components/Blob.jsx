import React from 'react'

export default function Blob({ className, svgPath, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(300,300)">
        <path
          d={svgPath}
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
