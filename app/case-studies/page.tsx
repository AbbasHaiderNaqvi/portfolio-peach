'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import { caseStudies } from '@/lib/data'
import { ArrowUpRight, Clock, User } from 'lucide-react'

export default function CaseStudiesPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Case Studies</span>
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mt-3 mb-6 text-balance">
              Design process &<br />
              <span className="text-primary">real results</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Deep dives into my design process — from problem definition through strategy, execution, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* Case study list */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.id}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl border border-border hover:border-primary/40 overflow-hidden hover:shadow-xl transition-all duration-500 bg-card block"
                data-hover
              >
                {/* Image */}
                <div className={`relative lg:col-span-5 aspect-video lg:aspect-auto min-h-64 overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:bg-none" />
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 p-10 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {cs.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{cs.year}</span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight text-balance group-hover:text-primary transition-colors duration-300">
                    {cs.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{cs.subtitle}</p>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User size={14} className="text-primary" />
                      {cs.client}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} className="text-primary" />
                      {cs.duration}
                    </div>
                  </div>

                  {/* Results preview */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.label} className="bg-[var(--brand-cream)] rounded-2xl px-5 py-3 border border-border">
                        <p className="font-serif text-2xl font-bold text-primary">{r.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Read full case study <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Process overview */}
        <section className="py-24 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">My approach</span>
              <h2 className="font-serif text-5xl font-bold text-foreground mt-2">How I work</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Discover', desc: 'Deep research into your business, audience, and competitive landscape to uncover real insights.' },
                { num: '02', title: 'Strategize', desc: 'Define the positioning, messaging hierarchy, and visual direction that will achieve your goals.' },
                { num: '03', title: 'Design', desc: 'Craft the visual system with precision — iterating through feedback until every detail is right.' },
                { num: '04', title: 'Deliver', desc: 'Hand off production-ready assets with thorough documentation and implementation support.' },
              ].map((step) => (
                <div key={step.num} className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300" data-hover>
                  <span className="font-serif text-7xl font-bold text-primary/10 absolute top-4 right-6">{step.num}</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground text-balance">Ready to start your project?</h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">Let&apos;s solve your design challenge together.</p>
            </div>
            <div className="flex-shrink-0 flex flex-wrap gap-4">
              <a href="mailto:ramsha@example.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-[var(--brand-coral-deep)] transition-colors">
                Get in touch <ArrowUpRight size={16} />
              </a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors">
                View portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
