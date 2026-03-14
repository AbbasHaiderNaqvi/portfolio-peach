import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { projects } from '@/lib/data'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Wrench } from 'lucide-react'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const others = projects.filter((p) => p.id !== id).slice(0, 2)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-0 bg-[var(--brand-cream)]">
          <div className="max-w-7xl mx-auto px-6 pb-12">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">{project.category}</span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6 text-balance leading-tight">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-accent text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <User size={14} />, label: 'Client', value: project.client },
                  { icon: <Calendar size={14} />, label: 'Year', value: project.year },
                  { icon: <Clock size={14} />, label: 'Duration', value: project.duration },
                  { icon: <Wrench size={14} />, label: 'Role', value: project.role },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-2xl p-5 border border-border">
                    <div className="flex items-center gap-1.5 text-primary mb-2">
                      {item.icon}
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</span>
                    </div>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-[60%] mx-auto rounded-4xl overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              width={1600}
              height={2000}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Content */}
        {/* <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8"> */}
        {/* <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">About the project</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.longDescription}</p>
                </div> */}

        {/* Outcomes */}
        {/* <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Outcomes</h2>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
        {/* </div> */}

        {/* Tools sidebar */}
        {/* <div>
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">Tools used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="bg-muted text-muted-foreground text-sm px-4 py-1.5 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">Like this work?</h3>
                  <a href="mailto:ramsha@example.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-[var(--brand-coral-deep)] transition-colors w-full justify-center">
                    Hire me <ArrowRight size={14} />
                  </a>
                </div>
              </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}

        {/* Gallery */}
        {/* {project.gallery.length > 0 && (
          <section className="pb-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                    <Image src={img} alt={`${project.title} gallery ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* More projects */}
        <section className="py-20 bg-[var(--brand-cream)] border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-10">More projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.id}`} className="group relative rounded-3xl overflow-hidden aspect-video block" data-hover>
                  {/* <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/60">{p.category}</span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">{p.title}</h3>
                    <div className="mt-2 inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/portfolio" className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded-full font-semibold hover:bg-accent transition-colors">
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
