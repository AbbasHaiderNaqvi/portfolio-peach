'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import { projects } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = ['All', 'Brand Identity', 'Packaging',"pitch-deck", 'UI/UX Design', 'Editorial', 'Social Media', 'Motion Design']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mt-3 mb-6 text-balance">
              Selected work
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              A curated collection of brand identities, digital experiences, and visual stories crafted over 5+ years of design practice.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-lg border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                  active === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className={cn(
                    'group relative rounded-3xl overflow-hidden aspect-[4/3] block',
                    i === 0 && active === 'All' ? 'md:col-span-2 aspect-video' : ''
                  )}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  data-hover
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className={cn(
                    'absolute inset-0 transition-all duration-500',
                    hovered === project.id
                      ? 'bg-gradient-to-t from-black/80 via-black/40 to-black/10'
                      : 'bg-gradient-to-t from-black/60 via-black/10 to-transparent'
                  )} />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow icon */}
                  <div className={cn(
                    'absolute top-4 right-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center transition-all duration-300',
                    hovered === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  )}>
                    <ArrowUpRight size={16} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/60">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className={cn(
                      'text-white/70 text-sm line-clamp-2 transition-all duration-300',
                      hovered === project.id ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0'
                    )}>
                      {project.description}
                    </p>
                    <div className={cn(
                      'mt-3 inline-flex items-center gap-1.5 text-primary text-sm font-semibold transition-all duration-300',
                      hovered === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    )}>
                      View Project <ArrowUpRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-24 text-muted-foreground">
                No projects in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground">Interested in working together?</h2>
              <p className="text-muted-foreground mt-2">Let&apos;s discuss your next project.</p>
            </div>
            <a href="mailto:ramsha@example.com" className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-[var(--brand-coral-deep)] transition-colors">
              let's connect on upwork <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}