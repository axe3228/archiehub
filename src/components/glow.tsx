// components/Glow.tsx

'use client'

import { useEffect, useRef } from 'react';

function Glow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      ref.current!.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(3, 105, 161, 0.25), transparent 80%)`
    }

    if (ref.current) {
      window.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition duration-300"
      ref={ref}
    />
  )
}

export { Glow }