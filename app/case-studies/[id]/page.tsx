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
      <main className="overflow-x-hidden">
        {/* Hero Section */}
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

        {/* Key Results Boxes (Width: 1400px) */}
        <section className="py-16 bg-background">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cs.results.map((r) => (
                <div key={r.label} className="bg-[#f4f7f4] rounded-[2.5rem] p-8 md:p-10 border border-black/5 flex flex-col items-center justify-center text-center min-h-[180px]">
                  <p className="font-serif font-bold text-[#00853E] leading-tight whitespace-nowrap text-[clamp(1.1rem,1.8vw,1.75rem)]">
                    {r.value}
                  </p>
                  <p className="text-base font-medium text-[#6B7280] mt-4">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content (Challenge/Approach) - Now matches Box Width (1400px) */}
        <section className="py-12 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 space-y-20">
            {/* Overview Grid */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column: Challenge & Approach */}
              <div className="md:col-span-8 space-y-16">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-6">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">{cs.challenge}</p>
                </div>
                <div>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-6">The Approach</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">{cs.approach}</p>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="md:col-span-4 space-y-6">
                <div className="bg-[var(--brand-cream)] rounded-3xl p-8 border border-border">
                  <h3 className="font-semibold text-foreground mb-6 text-xs uppercase tracking-[0.2em]">Project info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-muted-foreground">Client</span>
                      <span className="font-medium text-foreground">{cs.client}</span>
                    </div>
                    <div className="flex justify-between border-b border-black/5 pb-3">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium text-foreground">{cs.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{cs.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--brand-cream)] rounded-3xl p-8 border border-border">
                  <h3 className="font-semibold text-foreground mb-6 text-xs uppercase tracking-[0.2em]">Tools used</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((tool) => (
                      <span key={tool} className="bg-white text-muted-foreground text-xs px-4 py-2 rounded-full border border-border font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FULL WIDTH IMAGE (Full Height, No Crop) */}
          <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-24 mb-24 overflow-hidden">
            <Image
              src={cs.fullimage}
              alt={cs.title}
              width={2560}
              height={1440}
              className="w-full h-auto block"
              priority
            />
          </div>

          {/* Results Deep-Dive (Also matches 1400px width) */}
          <div className="max-w-[1400px] mx-auto px-6 mb-20">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-10">Detailed Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cs.results.map((r) => (
                <div key={r.label} className="flex items-center gap-6 bg-[var(--brand-cream)] rounded-[2.5rem] p-8 border border-border">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle size={24} className="text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">{r.value}</p>
                    <p className="text-muted-foreground text-base mt-1">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Case Studies Section */}
        {others.length > 0 && (
          <section className="py-24 bg-[var(--brand-cream)] border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-serif text-4xl font-bold text-foreground">Explore more</h2>
                <Link href="/case-studies" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 uppercase tracking-widest">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {others.map((other) => (
                  <Link key={other.id} href={`/case-studies/${other.id}`} className="group bg-card rounded-[2.5rem] border border-border hover:border-primary/40 overflow-hidden hover:shadow-xl transition-all duration-500 block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="p-10">
                      <span className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">{other.category}</span>
                      <h3 className="font-serif text-3xl font-bold text-foreground mt-6 mb-3 group-hover:text-primary transition-colors">{other.title}</h3>
                      <p className="text-muted-foreground text-base line-clamp-2">{other.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-[var(--brand-dark)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--brand-cream)] mb-6">
              Want results like these?
            </h2>
            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">Let&apos;s collaborate to transform your vision into an iconic brand experience.</p>
            <a href="mailto:ramsha@example.com" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold hover:bg-[var(--brand-coral-deep)] transition-all transform hover:scale-105">
              Start a project <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}