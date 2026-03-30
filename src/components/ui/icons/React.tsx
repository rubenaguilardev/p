import type { SVGProps } from 'react'

const React = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <circle cx="128" cy="128" r="18" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="10">
      <ellipse cx="128" cy="128" rx="80" ry="30" />
      <ellipse cx="128" cy="128" rx="80" ry="30" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="80" ry="30" transform="rotate(120 128 128)" />
    </g>
  </svg>
)

export default React