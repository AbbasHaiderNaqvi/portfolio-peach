import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-[var(--brand-cream)] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          <div className="max-w-xs">
            <span className="font-serif text-3xl font-bold text-primary">Ramsha Ali</span>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Graphic designer crafting brand identities and visual experiences that leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <p className="font-semibold text-white/30 uppercase tracking-widest text-xs mb-4">Pages</p>
              <ul className="space-y-3">
                <li><Link href="/" className="text-white/60 hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/portfolios" className="text-white/60 hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/case-studies" className="text-white/60 hover:text-primary transition-colors">Case Studies</Link></li>
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold text-white/30 uppercase tracking-widest text-xs mb-4">Connect</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Dribbble</a></li>
                <li><a href="mailto:ramsha@example.com" className="text-white/60 hover:text-primary transition-colors">Email</a></li>
              </ul>
            </div> */}
          </div>

          <div>
            <p className="font-semibold text-white/30 uppercase tracking-widest text-xs mb-4">Available for freelance</p>
            <a
              href="https://www.upwork.com/freelancers/ramshaa17?mp_source=share"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-[var(--brand-coral-deep)] transition-colors"
            >
              Let’s Connect on upwork
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/30">
          <p>© 2026 Ramsha Ali. All rights reserved.</p>
          {/* <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={16} /></a>
            <a href="#" aria-label="Dribbble" className="hover:text-primary transition-colors"><Dribbble size={16} /></a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
