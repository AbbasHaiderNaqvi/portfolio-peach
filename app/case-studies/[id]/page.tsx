import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { caseStudies } from '@/lib/data'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params
  const cs = caseStudies.find((c) => c.id === id)
  if (!cs) notFound()

  const others = caseStudies.filter((c) => c.id !== id)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-28 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6 pb-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Case Studies
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  {cs.category}
                </span>
                <span className="text-muted-foreground text-sm">{cs.year} · {cs.duration}</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                {cs.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{cs.subtitle}</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image src={cs.image} alt={cs.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
        </section>

        {/* Key results */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cs.results.map((r) => (
                <div key={r.label} className="bg-[var(--brand-cream)] rounded-3xl p-8 border border-border text-center">
                  <p className="font-serif text-4xl font-bold text-primary">{r.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Overview */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{cs.challenge}</p>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">The Approach</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{cs.approach}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-[var(--brand-cream)] rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">Project info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Client</span>
                      <span className="font-medium text-foreground">{cs.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium text-foreground">{cs.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{cs.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--brand-cream)] rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">Tools used</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((tool) => (
                      <span key={tool} className="bg-white text-muted-foreground text-xs px-3 py-1.5 rounded-full border border-border">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Design process */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-12">Design process</h2>
              <div className="space-y-0">
                {cs.process.map((step, i) => (
                  <div key={step.phase} className="relative grid grid-cols-[auto,1fr] gap-8 pb-12 last:pb-0">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 shadow-lg">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      {i < cs.process.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-3" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 pb-4">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{step.phase}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results deep-dive */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Results</h2>
              <div className="grid grid-cols-2 gap-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="flex items-start gap-4 bg-[var(--brand-cream)] rounded-2xl p-6 border border-border">
                    <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-serif text-3xl font-bold text-foreground">{r.value}</p>
                      <p className="text-muted-foreground text-sm mt-1">{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More case studies */}
        {others.length > 0 && (
          <section className="py-20 bg-[var(--brand-cream)] border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-serif text-3xl font-bold text-foreground">More case studies</h2>
                <Link href="/case-studies" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {others.map((other) => (
                  <Link key={other.id} href={`/case-studies/${other.id}`} className="group bg-card rounded-3xl border border-border hover:border-primary/40 overflow-hidden hover:shadow-lg transition-all duration-300 block" data-hover>
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-8">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">{other.category}</span>
                      <h3 className="font-serif text-2xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">{other.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{other.subtitle}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read case study <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-[var(--brand-dark)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-5xl font-bold text-[var(--brand-cream)] mb-4">
              Want results like these?
            </h2>
            <p className="text-white/50 text-lg mb-8">Let&apos;s work together to solve your design challenge.</p>
            <a href="mailto:ramsha@example.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-[var(--brand-coral-deep)] transition-colors">
              Start a project <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
