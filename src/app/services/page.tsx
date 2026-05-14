import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services | BoxoMemories — Photo & Video Digitization, Salado TX',
  description:
    'Professional digitization of photos, slides, negatives, VHS tapes, Hi8, MiniDV, 8mm film, and more. Archival-quality preservation by BoxoMemories in Salado, Texas.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | BoxoMemories — Memory Preservation Studio',
    description: 'Photo digitization, slide scanning, negative scanning, VHS to digital, and film reel transfer in Salado, TX.',
    url: 'https://www.boxomemories.com/services',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'BoxoMemories Services' }],
  },
}

const services = [
  {
    title: 'Photo Prints',
    detail: 'Up to 1200 dpi',
    desc: 'From faded snapshots to formal portraits. Scanned at archival resolution with color correction and dust removal. Any size, any era, any condition.',
    formats: ['Standard prints', 'Large format (up to 11×17)', 'Panoramics', 'Polaroids'],
  },
  {
    title: '35mm Slides',
    detail: 'Individual attention',
    desc: 'Carousel trays, individual mounts, or loose slides. Each one cleaned, scanned, color-corrected, and delivered in organized digital folders.',
    formats: ['Carousel trays', 'Individual mounts', 'Kodachrome & Ektachrome', 'Black-and-white'],
  },
  {
    title: 'Film Negatives',
    detail: 'Inverted & optimized',
    desc: 'Black-and-white or color. Strips, rolls, or individual frames. Any format from 35mm to medium format 120 film.',
    formats: ['35mm strips', '120 / medium format', 'Black-and-white', 'Color negatives'],
  },
  {
    title: 'VHS & Camcorder Tapes',
    detail: 'MP4 delivery',
    desc: 'VHS, VHS-C, Hi8, MiniDV — converted to high-quality digital video files. Birthdays, holidays, weddings, school plays. Nothing lost.',
    formats: ['VHS', 'VHS-C', 'Hi8 / Video8', 'MiniDV'],
  },
  {
    title: 'Film Reels',
    detail: 'Frame-by-frame',
    desc: '8mm, Super 8, and 16mm film. Frame-by-frame scanning preserves every detail. Delivered as high-quality MP4 with optional stabilization.',
    formats: ['8mm', 'Super 8', '16mm', 'Double 8mm'],
  },
  {
    title: 'Documents & Albums',
    detail: 'White-glove handling',
    desc: 'Bound albums, letters, certificates, artwork, and heirloom documents. Handled with archival care and returned in the same condition we received them.',
    formats: ['Photo albums', 'Documents & letters', 'Artwork & drawings', 'Certificates & diplomas'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="bg-charcoal text-cream py-24 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4 font-body">
          What We Preserve
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Services
        </h1>
        <p className="text-cream/60 font-body font-light max-w-md mx-auto leading-relaxed">
          Every format. Every era. Returned to you as a permanent digital
          archive — organized, labeled, and ready to share.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-stone/20 p-10 hover:border-charcoal/30 transition-colors duration-300"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-olive mb-3 font-body">
                  {s.detail}
                </p>
                <h2 className="font-display text-2xl text-charcoal mb-4">{s.title}</h2>
                <p className="text-charcoal/60 font-light text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-1">
                  {s.formats.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-charcoal/40 font-body flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-olive flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Not sure? */}
          <div className="mt-16 p-10 bg-charcoal/5 border border-stone/10 text-center">
            <h3 className="font-display text-xl text-charcoal mb-3">
              Not sure what you have?
            </h3>
            <p className="text-charcoal/60 font-light text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Bring it in. We&rsquo;ve seen everything — and we&rsquo;ll tell
              you exactly what&rsquo;s possible before you commit to anything.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-charcoal text-cream text-xs tracking-[0.15em] uppercase hover:bg-olive transition-colors duration-300"
            >
              Visit the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-charcoal text-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-cream font-light mb-5">
            Pricing is straightforward.
          </h2>
          <p className="text-cream/60 font-body font-light text-sm leading-relaxed mb-8">
            Most projects are quoted by the piece or the reel. We provide an
            exact estimate when you bring in your materials — no surprises.
          </p>
          <Link
            href="/#pricing"
            className="inline-block px-8 py-3 border border-stone/50 text-stone text-xs tracking-[0.15em] uppercase hover:border-cream hover:text-cream transition-colors duration-300"
          >
            View Pricing Guide
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
