'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.12)
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.12)

      if (dot) {
        dot.style.left = `${posRef.current.x}px`
        dot.style.top = `${posRef.current.y}px`
      }
      if (ring) {
        ring.style.left = `${ringPosRef.current.x}px`
        ring.style.top = `${ringPosRef.current.y}px`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    const onEnterLink = () => {
      dot?.classList.add('cursor-expand')
      ring?.classList.add('cursor-expand')
      dot?.style.setProperty('width', '48px')
      dot?.style.setProperty('height', '48px')
      ring?.style.setProperty('width', '80px')
      ring?.style.setProperty('height', '80px')
    }

    const onLeaveLink = () => {
      dot?.style.setProperty('width', '12px')
      dot?.style.setProperty('height', '12px')
      ring?.style.setProperty('width', '40px')
      ring?.style.setProperty('height', '40px')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor hidden md:block"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}
      />
      <div
        ref={ringRef}
        className="cursor-follower hidden md:block"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9998 }}
      />
    </>
  )
}
