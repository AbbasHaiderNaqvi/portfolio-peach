'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { projects } from '@/lib/data'
import { ArrowRight, ArrowUpRight, Sparkles, Star, MousePointer2 } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   HOOK: Smooth mouse position (lerped)
───────────────────────────────────────────────────────────── */
function useMouseLerp(factor = 0.08) {
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const lerped = useRef({ x: 0.5, y: 0.5 })
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
    }
    const tick = () => {
      lerped.current.x += (mouse.current.x - lerped.current.x) * factor
      lerped.current.y += (mouse.current.y - lerped.current.y) * factor
      setPos({ x: lerped.current.x - 0.5, y: lerped.current.y - 0.5 })
      raf.current = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [factor])

  return pos
}

/* ─────────────────────────────────────────────────────────────
   HOOK: IntersectionObserver reveal
───────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* ─────────────────────────────────────────────────────────────
   HOOK: Scroll progress bar
───────────────────────────────────────────────────────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] pointer-events-none">
      <div
        className="h-full bg-primary transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   CUSTOM CURSOR (enhanced blob)
───────────────────────────────────────────────────────────── */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const mouse = useRef({ x: -200, y: -200 })
  const blob = useRef({ x: -200, y: -200 })
  const raf = useRef<number | null>(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    const tick = () => {
      blob.current.x += (mouse.current.x - blob.current.x) * 0.1
      blob.current.y += (mouse.current.y - blob.current.y) * 0.1
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 6}px, ${mouse.current.y - 6}px)`
      }
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${blob.current.x - 20}px, ${blob.current.y - 20}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  useEffect(() => {
    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      const lbl = el.dataset.label ?? 'View'
      setLabel(lbl)
      blobRef.current?.style.setProperty('width', '80px')
      blobRef.current?.style.setProperty('height', '80px')
      blobRef.current?.style.setProperty('background', 'var(--brand-coral)')
      blobRef.current?.style.setProperty('opacity', '0.85')
    }
    const onLeave = () => {
      setLabel('')
      blobRef.current?.style.setProperty('width', '40px')
      blobRef.current?.style.setProperty('height', '40px')
      blobRef.current?.style.setProperty('background', 'transparent')
      blobRef.current?.style.setProperty('opacity', '0.5')
    }
    const targets = document.querySelectorAll('a, button, [data-hover]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  })

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-multiply"
        style={{ transition: 'none', willChange: 'transform' }}
      />
      {/* blob */}
      <div
        ref={blobRef}
        className="hidden md:flex fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/60 pointer-events-none z-[9998] items-center justify-center"
        style={{
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease, opacity 0.3s ease',
          willChange: 'transform',
          opacity: 0.5,
        }}
      >
        <span ref={labelRef} className="text-primary-foreground text-[10px] font-semibold">{label}</span>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────
   MAGNETIC BUTTON
───────────────────────────────────────────────────────────── */
function MagneticBtn({
  children, className, href, strength = 0.35,
}: {
  children: React.ReactNode; className?: string; href?: string; strength?: number
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * strength
    const y = (e.clientY - r.top - r.height / 2) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const style: React.CSSProperties = { transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)', display: 'inline-flex' }

  if (href)
    return <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={className} onMouseMove={onMove} onMouseLeave={onLeave} style={style} data-hover>{children}</a>
  return <button ref={ref as React.RefObject<HTMLButtonElement>} className={className} onMouseMove={onMove} onMouseLeave={onLeave} style={style} data-hover>{children}</button>
}

/* ─────────────────────────────────────────────────────────────
   TILT CARD
───────────────────────────────────────────────────────────── */
function TiltCard({ children, className, depth = 10 }: { children: React.ReactNode; className?: string; depth?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * depth}deg) rotateX(${-y * depth}deg) scale3d(1.02,1.02,1.02)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)'
  }
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform 0.4s ease', transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      let start = 0
      const step = target / 55
      const id = setInterval(() => {
        start += step
        if (start >= target) { setCount(target); clearInterval(id) }
        else setCount(Math.floor(start))
      }, 16)
    }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ─────────────────────────────────────────────────────────────
   TEXT SCRAMBLE  
───────────────────────────────────────────────────────────── */
function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&'
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    let iteration = 0
    const totalFrames = text.length * 3
    const id = setInterval(() => {
      setDisplay(
        text.split('').map((char, idx) => {
          if (char === ' ') return ' '
          if (idx < iteration / 3) return text[idx]
          return chars[Math.floor(Math.random() * chars.length)]
        }).join('')
      )
      iteration++
      if (iteration >= totalFrames) clearInterval(id)
    }, 35)
    return () => clearInterval(id)
  }, [text])

  return <span className={className}>{display}</span>
}

/* ─────────────────────────────────────────────────────────────
   REVEAL WRAPPER
───────────────────────────────────────────────────────────── */
function Reveal({
  children, delay = 0, className = '', y = 40,
}: {
  children: React.ReactNode; delay?: number; className?: string; y?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   STAGGER CHILDREN
───────────────────────────────────────────────────────────── */
function Stagger({ children, className, baseDelay = 0, step = 0.1 }: {
  children: React.ReactNode[]; className?: string; baseDelay?: number; step?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.6s ease ${baseDelay + i * step}s, transform 0.6s ease ${baseDelay + i * step}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   FLOATING PARTICLES (hero background) — canvas-based for smooth animation
───────────────────────────────────────────────────────────── */
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let w = 0, h = 0

    // Deterministic seed-based positions so no hydration mismatch
    const COUNT = 22
    type Particle = {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; phase: number; speed: number
    }
    const particles: Particle[] = Array.from({ length: COUNT }, (_, i) => {
      const t = i / COUNT
      const seed = (i * 137.508 + 11) % 1
      return {
        x: ((i * 97 + 17) % 100) / 100,
        y: ((i * 61 + 43) % 100) / 100,
        vx: (seed - 0.5) * 0.0003,
        vy: (((i * 53 + 7) % 100) / 100 - 0.5) * 0.0003,
        size: 2.5 + (t * 5),
        opacity: 0.06 + (((i * 41 + 3) % 100) / 100) * 0.1,
        phase: t * Math.PI * 2,
        speed: 0.4 + seed * 0.6,
      }
    })

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouse)

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.008

      particles.forEach((p) => {
        // Slow drift
        p.x += p.vx
        p.y += p.vy
        if (p.x < -0.05) p.x = 1.05
        if (p.x > 1.05) p.x = -0.05
        if (p.y < -0.05) p.y = 1.05
        if (p.y > 1.05) p.y = -0.05

        // Sine bob on top of drift
        const bx = p.x * w + Math.sin(t * p.speed + p.phase) * 18
        const by = p.y * h + Math.cos(t * p.speed * 0.7 + p.phase) * 12

        // Mouse repel — gentle push away
        const dx = bx - mouseRef.current.x
        const dy = by - mouseRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repel = Math.max(0, 1 - dist / 120) * 28
        const rx = dist > 0 ? (dx / dist) * repel : 0
        const ry = dist > 0 ? (dy / dist) * repel : 0

        const finalX = bx + rx
        const finalY = by + ry

        const pulse = 0.7 + Math.sin(t * p.speed * 2 + p.phase) * 0.3

        ctx.beginPath()
        ctx.arc(finalX, finalY, p.size * pulse, 0, Math.PI * 2)
        // rgba for max browser compat in canvas context
        const alpha = p.opacity * pulse
        ctx.fillStyle = `rgba(210, 100, 60, ${alpha})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const mouse = useMouseLerp(0.06)
  const [mounted, setMounted] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setLineVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--brand-cream)]">
      {/* Moving gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.62 0.18 35 / 0.22) 0%, transparent 70%)',
          top: '-10%',
          right: '-5%',
          transform: mounted ? `translate(${mouse.x * -55}px, ${mouse.y * -55}px)` : 'none',
          transition: 'none',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.12 55 / 0.18) 0%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
          transform: mounted ? `translate(${mouse.x * 40}px, ${mouse.y * 40}px)` : 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute w-60 h-60 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.62 0.18 35 / 0.12) 0%, transparent 70%)',
          top: '55%',
          left: '40%',
          transform: mounted ? `translate(${mouse.x * -25}px, ${mouse.y * -25}px)` : 'none',
          filter: 'blur(40px)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--brand-dark) 1px, transparent 1px), linear-gradient(90deg, var(--brand-dark) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          transform: mounted ? `translate(${mouse.x * 8}px, ${mouse.y * 8}px)` : 'none',
        }}
      />

      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-32 sm:pb-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            {/* <div
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              
              <h1 className="font-serif text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-bold text-foreground">
                <ScrambleText text="Design" className="block" />
                <span
                  className="text-primary block"
                  style={{
                    transform: mounted ? `translate(${mouse.x * -12}px, ${mouse.y * -6}px)` : 'none',
                    display: 'block',
                    transition: 'none',
                  }}
                >
                  that speaks
                </span>
                <span className="text-foreground/15 block">loudly.</span>
              </h1>
            </div> */}
            <div
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              <h1 className="font-serif text-[2.0rem] leading-[1.00] sm:text-3xl md:text-4xl lg:text-[4rem] font-bold text-foreground">
                <ScrambleText
                  text="Your brand gets"
                  className="block whitespace-nowrap"
                />

                <span
                  className="text-primary block whitespace-nowrap"
                  style={{
                    transform: mounted
                      ? `translate(${mouse.x * -12}px, ${mouse.y * -6}px)`
                      : 'none',
                    transition: 'none',
                  }}
                >
                  one chance
                </span>

                <span className="text-foreground/15 block whitespace-nowrap">
                  to make a first impression
                </span>

              </h1>
            </div>

            {/* Body */}
            {/* I'm Ramsha Ali, a Top Rated brand identity specialist with 7+ 
            years of experience building premium, strategic brand systems for founders, 
            startups, and growing businesses worldwide. */}

            <div
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
              }}
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                I&apos;m <strong className="text-foreground font-semibold">Ramsha Ali,</strong>, a Top Rated brand identity specialist with 7+ years of experience building premium, strategic brand systems for founders, startups, and growing businesses worldwide.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
              }}
            >
              <MagneticBtn
                href="/portfolios"
                className="items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-[var(--brand-coral-deep)] transition-colors shadow-lg shadow-primary/25"
                data-label="Go"
              >
                View Portfolio <ArrowRight size={15} />
              </MagneticBtn>
              <MagneticBtn
                href="/case-studies"
                className="items-center gap-2 border border-border text-foreground px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-accent hover:border-transparent transition-all"
                data-label="Go"
              >
                Case Studies
              </MagneticBtn>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-2 max-w-sm sm:max-w-none"
              style={{
                opacity: lineVisible ? 1 : 0,
                transition: 'opacity 0.7s ease 0.45s',
              }}
            >
              {[
                { val: 7, suf: '+', label: 'Years Exp.' },
                { val: 700, suf: '+', label: 'Projects' },
                { val: 351, suf: '+', label: 'Clients' },
              ].map((s) => (
                <div key={s.label} className="group cursor-default">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Counter target={s.val} suffix={s.suf} />
                  </p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <TiltCard
              className="relative z-10"
              depth={8}
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? undefined : 'translateY(40px)',
                transition: 'opacity 0.8s ease 0.4s',
              } as React.CSSProperties}
            >
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[490px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ramsha-Home_Hero_section.png"
                  alt="Ramsha Ali — Graphic Designer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl animate-float">
                <div className="flex items-center gap-1.5 text-sm font-bold">
                  <Star size={12} fill="currentColor" />
                  Top Rated on Upwork
                </div>
              </div>

              {/* Project tag */}
              <div
                className="hidden sm:block absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm"
                style={{
                  transform: mounted ? `translate(${mouse.x * 14}px, ${mouse.y * 14}px)` : 'none',
                }}
              >
                <p className="text-xs text-muted-foreground">700+ Projects</p>
                <p className="font-semibold text-sm text-foreground">100% Satisfaction</p>
              </div>
            </TiltCard>

            {/* Spinning dashed ring — hidden on mobile to avoid overflow */}
            <div
              className="hidden sm:block absolute w-[380px] h-[380px] lg:w-[540px] lg:h-[540px] rounded-full border border-dashed border-border/60 animate-spin-slow pointer-events-none"
              style={{
                transform: mounted ? `translate(${mouse.x * 22}px, ${mouse.y * 22}px)` : 'none',
              }}
            />
            {/* Second counter-spin ring */}
            <div
              className="hidden sm:block absolute w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] rounded-full border border-primary/10 pointer-events-none"
              style={{
                animation: 'spinSlow 28s linear infinite reverse',
                transform: mounted ? `translate(${mouse.x * -18}px, ${mouse.y * -18}px)` : 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{
          opacity: lineVisible ? 0.5 : 0,
          transition: 'opacity 1s ease 1s',
        }}
      >
        <MousePointer2 size={14} className="text-muted-foreground" />
        <div className="w-px h-10 bg-border relative overflow-hidden">
          <div className="w-full h-1/2 bg-primary absolute top-0 animate-[floatY_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border/60 py-3.5 bg-background/70 backdrop-blur-sm">
        <div className="animate-marquee">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 text-xs font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              Logo Design <span className="text-primary text-base leading-none">✦</span>
              Brand Identity <span className="text-primary text-base leading-none">✦</span>
              Brand Guidelines <span className="text-primary text-base leading-none">✦</span>
              Brand Strategy <span className="text-primary text-base leading-none">✦</span>
              Packaging Design <span className="text-primary text-base leading-none">✦</span>
              Brand Book <span className="text-primary text-base leading-none">✦</span>
              E-Book Design <span className="text-primary text-base leading-none">✦</span>
              Social Media Kit<span className="text-primary text-base leading-none">✦</span>
              Stationery Design<span className="text-primary text-base leading-none">✦</span>
              Flyer & Banner Design <span className="text-primary text-base leading-none">✦</span>
              Pitch Deck <span className="text-primary text-base leading-none">✦</span>
              Book Cover Design <span className="text-primary text-base leading-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    {
      title: 'Logo Design',
      link: '/case-studies',
      desc: 'Custom, scalable logos built for recognition, trust and lasting impact.',
      icon: '◈',
      n: '01',
    },
    {
      title: 'Brand Guidelines',
      link: '/portfolios/brand-identity',
      desc: 'Complete brand books that define your visual DNA including typography, color, spacing and usage rules.',
      icon: '⬡',
      n: '02',
    },
    {
      title: 'E-Book Design',
      link: '/portfolios/ebook',
      desc: 'Beautifully structured e-books and digital publications that are as readable as they are stunning.',
      icon: '◉',
      n: '03',
    },
    {
      title: 'Packaging Design',
      link: '/portfolios/packaging',
      desc: 'Shelf-ready packaging that communicates quality and drives purchase decisions.',
      icon: '▣',
      n: '04',
    },
    {
      title: 'Pitch Deck',
      link: '/portfolios/pitch-deck',
      desc: 'Investor-ready decks that tell your story clearly, confidently and visually.',
      icon: '◌',
      n: '05',
    },
    {
      title: 'Apparel Graphics',
      link: '/portfolios/apparel-design',
      desc: 'Bold, print-ready graphics for t-shirts, merch and branded apparel.',
      icon: '◈',
      n: '06',
    },
  ]

  return (

    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              What I do
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mt-3 leading-tight">
              Services &<br />expertise
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm">
            Every project is approached with research, strategy, and craft — delivering design that performs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Card = (
              <div
                className={`group relative p-8 h-[260px] rounded-2xl border bg-card transition-all duration-500 overflow-hidden flex flex-col
                ${s.link
                    ? 'cursor-pointer border-border hover:border-primary/40 hover:bg-accent/30'
                    : 'opacity-60 cursor-not-allowed border-border'
                  }`}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-serif text-6xl font-bold text-foreground/[0.04] select-none group-hover:text-primary/10 transition-colors duration-500">
                  {s.n}
                </span>

                {/* Icon */}
                <span className="text-3xl text-primary mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {s.icon}
                </span>

                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* CTA */}
                {s.link ? (
                  <div className="mt-6 flex items-center gap-1.5 text-primary text-sm font-semibold translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight size={13} />
                  </div>
                ) : (
                  <span className="mt-6 text-xs text-muted-foreground">
                    Coming soon
                  </span>
                )}

                {/* Bottom accent bar */}
                {s.link && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                )}
              </div>
            )

            return s.link ? (
              <Link key={s.title} href={s.link}>
                {Card}
              </Link>
            ) : (
              <div key={s.title}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


// function ServicesSection() {
//   const services = [
//     { title: 'Logo Design', desc: ' Logo Design Custom, scalable logos built for recognition, trust and lasting impact.', icon: '◈', n: '01' },
//     { title: 'Brand Guidelines', desc: 'Brand Guidelines Complete brand books that define your visual DNA including typography, color, spacing and usage rules.', icon: '⬡', n: '02' },
//     { title: 'E-Book Design', desc: 'E-Book Design Beautifully structured e-books and digital publications that are as readable as they are stunning.', icon: '◉', n: '03' },
//     { title: 'Packaging Design', desc: 'Packaging Design Shelf-ready packaging that communicates quality and drives purchase decisions.', icon: '▣', n: '04' },
//     { title: 'Pitch Deck', desc: 'Pitch Deck Investor-ready decks that tell your story clearly, confidently and visually.', icon: '◌', n: '05' },
//     { title: 'Apparel Graphics', desc: 'Apparel Graphics Bold, print-ready graphics for t-shirts, merch and branded apparel.', icon: '◈', n: '06' },
//   ]
//   const services = [
//   { title: 'Logo Design', link: '/case-study', desc: 'Logo Design Custom, scalable logos built for recognition, trust and lasting impact.', icon: '◈', n: '01' },
//   { title: 'Brand Guidelines', link: '/portfolio/brand-identity', desc: 'Brand Guidelines Complete brand books that define your visual DNA including typography, color, spacing and usage rules.', icon: '⬡', n: '02' },
//   { title: 'E-Book Design', link: null, desc: 'E-Book Design Beautifully structured e-books and digital publications that are as readable as they are stunning.', icon: '◉', n: '03' },
//   { title: 'Packaging Design', link: '/portfolio/packaging', desc: 'Packaging Design Shelf-ready packaging that communicates quality and drives purchase decisions.', icon: '▣', n: '04' },
//   { title: 'Pitch Deck', link: '/portfolio/pitchdeck', desc: 'Pitch Deck Investor-ready decks that tell your story clearly, confidently and visually.', icon: '◌', n: '05' },
//   { title: 'Apparel Graphics', link: null, desc: 'Apparel Graphics Bold, print-ready graphics for t-shirts, merch and branded apparel.', icon: '◈', n: '06' },
// ]

//   return (
//     <section className="py-32 bg-background overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
//           <div>
//             <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">What I do</span>
//             <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mt-3 text-balance leading-tight">
//               Services &<br />expertise
//             </h2>
//           </div>
//           <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
//             Every project is approached with research, strategy, and craft — delivering design that performs.
//           </p>
//         </Reveal>

//         <Stagger
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//           baseDelay={0.05}
//           step={0.08}
//         >
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className="group relative p-8 h-[260px] rounded-2xl border border-border hover:border-primary/40 bg-card hover:bg-accent/30 transition-all duration-500 cursor-default overflow-hidden flex flex-col"
//               data-hover
//             >
//               {/* Number watermark */}
//               <span className="absolute top-4 right-5 font-serif text-6xl font-bold text-foreground/[0.04] select-none group-hover:text-primary/10 transition-colors duration-500">
//                 {s.n}
//               </span>
//               {/* Icon */}
//               <span className="text-3xl text-primary block mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">{s.icon}</span>
//               <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
//               {/* Arrow reveal */}
//               <div className="mt-6 flex items-center gap-1.5 text-primary text-sm font-semibold translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                 Learn more <ArrowRight size={13} />
//               </div>
//               {/* Bottom accent bar */}
//               <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
//             </div>
//           ))}
//         </Stagger>
//       </div>
//     </section>
//   )
// }

/* ─────────────────────────────────────────────────────────────
   FEATURED WORK
───────────────────────────────────────────────────────────── */
function FeaturedWork() {
  const featured = projects.slice(0, 3)

  const toSlug = (str: string) => str?.toLowerCase().replace(/\s+/g, '-') || ''

  return (
    <section className="py-32 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex items-end justify-between mb-18 flex-wrap gap-6 mb-16">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Selected work</span>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mt-3">Featured<br />projects</h2>
          </div>
          <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors" data-hover>
            View all work <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Hero card */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <TiltCard depth={5} className="h-full">
              <Link
                href={`/portfolio/${toSlug(featured[0].category)}/${toSlug(featured[0].id)}`}
                className="group relative rounded-3xl overflow-hidden block h-full min-h-[400px] lg:h-[520px]"
                data-hover
                data-label="View"
              >
                {featured[0]?.thumbnail && (
                  <Image
                    src={featured[0].thumbnail}
                    alt={featured[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                )}
                {/* <Image src={featured[0].image || null } alt={featured[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">{featured[0].category}</span>
                  <h3 className="font-serif text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{featured[0].title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2">{featured[0].description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-primary text-sm font-semibold bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-300">
                    View Project <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </TiltCard>
          </Reveal>

          {/* Two smaller cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {featured.slice(1).map((p, i) => (
              <Reveal key={p.id} delay={0.1 + i * 0.12}>
                <TiltCard depth={6} className="h-full">
                  <Link
                    href={`/portfolio/${toSlug(p.category)}/${toSlug(p.id)}`}
                    className="group relative rounded-3xl overflow-hidden block aspect-video"
                    data-hover
                    data-label="View"
                  >
                    {p?.thumbnail && (
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    )}
                    {/* <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{p.category}</span>
                      <h3 className="font-serif text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">{p.title}</h3>
                      <div className="mt-2 inline-flex items-center gap-1 text-primary text-xs font-semibold translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Project <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────────────────── */
function AboutSection() {
  const mouse = useMouseLerp(0.05)
  const [mounted, setMounted] = useState(false)
  const skills = ['Adobe Illustrator', 'Figma', 'Photoshop', 'After Effects', 'InDesign', 'Canva']

  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <Reveal className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] max-w-md shadow-2xl">
              <Image
                src="/images/ramsha-About_me_section .png"
                alt="Ramsha Ali"
                fill
                className="object-cover object-top"
              />
              {/* Overlay color accent */}
              <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-500" />
            </div>
            {/* Floating decorative squares — react to mouse */}
            <div
              className="absolute -bottom-8 -right-8 w-52 h-52 rounded-3xl bg-primary/15 border border-primary/25"
              style={{
                transform: mounted ? `translate(${mouse.x * 18}px, ${mouse.y * 18}px)` : 'none',
                transition: 'none',
              }}
            />
            <div
              className="absolute -top-7 -left-7 w-36 h-36 rounded-2xl bg-[var(--brand-coral-light)] border border-primary/20"
              style={{
                transform: mounted ? `translate(${mouse.x * -13}px, ${mouse.y * -13}px)` : 'none',
              }}
            />
            {/* Mini card floating */}
            <div
              className="absolute bottom-12 -right-10 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl z-20 hidden lg:block"
              style={{
                transform: mounted ? `translate(${mouse.x * -10}px, ${mouse.y * -10}px)` : 'none',
              }}
            >
              <p className="text-xs text-muted-foreground mb-0.5">Available</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-foreground">Open to work</p>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div className="space-y-7">
            <Reveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">About me</span>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-3 text-balance">
                Turning ideas into<br />visual experiences
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                I'm Ramsha Ali, a Top Rated brand identity designer based in Bradford, UK, with 7+ years of experience building premium visual systems for founders, startups, and established businesses worldwide. I don't just design logos. I build complete brand identities that look intentional, feel premium, and scale with growth. On Upwork, I've successfully completed 350+ projects, earned a Top Rated badge with 91% Job Success, and built a reputation for delivering premium quality with clear communication and fast turnaround. With 700+ projects delivered across global platforms, I bring both creative precision and strategic thinking to every brief. I work with industry-leading tools including Adobe Illustrator, Photoshop, InDesign, Figma, and Canva, delivering polished, production-ready files every time
              </p>
            </Reveal>
            {/* <Reveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is both beautiful and purposeful. Every project begins with deep understanding — of the business, the audience, and the desired outcome.
              </p>
            </Reveal> */}

            {/* Skills — staggered */}
            <Stagger className="flex flex-wrap gap-x-2 gap-y-6" baseDelay={0.1} step={0.05}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium bg-accent text-accent-foreground px-4 py-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  data-hover
                >
                  {skill}
                </span>
              ))}
            </Stagger>

            <Reveal delay={0.3}>
              <MagneticBtn
                href="/portfolios"
                className="items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold hover:bg-[var(--brand-coral-deep)] transition-colors shadow-lg shadow-primary/20"
              >
                See my work <ArrowRight size={16} />
              </MagneticBtn>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   PROCESS STRIP (new section)
───────────────────────────────────────────────────────────── */
function ProcessStrip() {
  const steps = [
    { n: '01', title: 'Discover', desc: 'Discover Deep dive into your brand, audience, competitors and goals to build a solid strategic foundation.' },
    { n: '02', title: 'Define', desc: 'Define Creative direction, visual strategy and concept development tailored to your brand positioning.' },
    { n: '03', title: 'Design', desc: 'Design Iterative design explorations, revisions and refinements until every detail is exactly right.' },
    { n: '04', title: 'Deliver', desc: 'Deliver Final production ready files, brand guidelines and ongoing support for seamless implementation.' },
  ]

  return (
    <section className="py-24 bg-[var(--brand-dark)] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, oklch(0.62 0.18 35 / 0.08) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">How I work</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[var(--brand-cream)] mt-3 mb-16">
            The process
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" baseDelay={0.05} step={0.1}>
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative p-8 rounded-2xl border border-white/10 hover:border-primary/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500"
              data-hover
            >
              <span className="font-serif text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-400 block mb-5">{s.n}</span>
              <h3 className="text-[var(--brand-cream)] font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{s.desc}</p>
              {/* connector line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-600 ease-out" />
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    { name: 'Justin Mays', role: 'CEO, Lumina Skincare', work: 'Complete Brand Setup', text: 'Ramsha has been an absolute pleasure to work with. She is thoughtful, responsive, and incredibly detail-oriented. She took the time to truly understand my vision and translated it into clean, professional design work that exceeded my expectations. Communication was clear and timely throughout the entire process, and revisions were handled quickly and thoughtfully. I would not hesitate to work with Ramsha again and would highly recommend her to anyone looking for reliable, high-quality creative work.', rating: 5 },
    { name: 'Brandon Sturgill', role: 'Product Lead, Pulse Health ', work: 'Logo and Brand Guidelines', text: 'Ramsha completed our re-branding project within budget and on-time with fantastic results. We would highly recommend exploring her design services if you are looking to create, refresh or redo your company branding!', rating: 5 },
    { name: 'Manthias Fisker', role: 'Creative Director, Aura Magazine', work: 'Brand Logo and Brand Strategy', text: 'Ramsha is a consummate professional and working with her was a pleasure. She asked excellent questions at the start and helped me identify what I really wanted. Ramsha brought a little humor to my logo that I didn\'t expect but appreciate!', rating: 5 },
  ]

  return (
    <section className="py-32 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-18 mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mt-3">What clients say</h2>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          baseDelay={0.05}
          step={0.12}
        >
          {testimonials.map((t) => (
            <TiltCard
              key={t.name}
              depth={4}
              className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-default h-full flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array(t.rating).fill(null).map((_, i) => (
                  <Star key={i} size={13} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Subheading: What you did for the client */}
              <p className="text-primary font-semibold text-sm mb-4">
                {t.work}
              </p>

              {/* Testimonial text */}
              <p className="text-foreground leading-relaxed mb-8 italic text-[0.95rem]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────────────────────── */
function CTASection() {
  const mouse = useMouseLerp(0.04)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="py-36 bg-[var(--brand-dark)] relative overflow-hidden">
      {/* Reactive background glow follows mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.62 0.18 35 / 0.14) 0%, transparent 65%)',
          left: '50%',
          top: '50%',
          filter: 'blur(80px)',
          transform: mounted
            ? `translate(calc(-50% + ${mouse.x * 80}px), calc(-50% + ${mouse.y * 80}px))`
            : 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Let&apos;s collaborate</span>
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-[var(--brand-cream)] mt-4 mb-6 text-balance leading-tight">
            Have a project<br />in mind?
          </h2>
          <p className="text-white/45 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            I am available for freelance projects and brand consultations. Whether you need a complete brand identity, a standout logo, or a polished brand book, I bring strategy, precision and creativity to every project. Let's create something remarkable together. Connect with me on Upwork and let's get started.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-wrap justify-center gap-4">
          <MagneticBtn
            href="https://www.upwork.com/freelancers/ramshaa17?mp_source=share"
            className="items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--brand-coral-deep)] transition-colors shadow-xl shadow-primary/30"
            strength={0.25}
          >
            Let’s Connect on upwork <ArrowRight size={18} />
          </MagneticBtn>
          <MagneticBtn
            href="/case-studies"
            className="items-center gap-2 border border-white/20 text-white/70 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
            strength={0.25}
          >
            View Case Studies
          </MagneticBtn>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedWork />
        <AboutSection />
        <ProcessStrip />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
