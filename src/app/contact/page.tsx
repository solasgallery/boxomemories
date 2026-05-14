import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | BoxoMemories — Salado, TX',
  description:
    'Visit BoxoMemories in Salado, Texas — inside Salado Village Framer at 2 Rock Creek Dr Unit A. Walk in during business hours or call to discuss your project.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="bg-charcoal text-cream py-24 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4 font-body">
          Come See Us
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Visit the Studio
        </h1>
        <p className="text-cream/60 font-body font-light max-w-md mx-auto leading-relaxed">
          No appointment needed. Bring your collection and we&rsquo;ll assess
          it together and give you a quote on the spot.
        </p>
      </section>

      {/* Contact Details */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-olive mb-4 font-body">
                Location
              </p>
              <p className="font-display text-xl text-charcoal mb-2">
                Inside Salado Village Framer
              </p>
              <address className="not-italic text-charcoal/60 font-light text-sm leading-relaxed">
                <p>2 Rock Creek Dr Unit A</p>
                <p>Salado, TX 76571</p>
              </address>
              <a
                href="https://maps.google.com/?q=2+Rock+Creek+Dr+Unit+A+Salado+TX+76571"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-olive hover:text-charcoal transition-colors tracking-wide"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-olive mb-4 font-body">
                Hours
              </p>
              <div className="text-charcoal/60 font-light text-sm space-y-1">
                <p>Tuesday – Saturday: 10 am – 5 pm</p>
                <p>Sunday &amp; Monday: Closed</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-olive mb-4 font-body">
                Phone
              </p>
              <a
                href="tel:+12546136123"
                className="font-display text-2xl text-charcoal hover:text-olive transition-colors"
              >
                (254) 613-6123
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-olive mb-4 font-body">
                Email
              </p>
              <a
                href="mailto:info@solasgallery.com"
                className="font-display text-lg text-charcoal hover:text-olive transition-colors"
              >
                info@solasgallery.com
              </a>
            </div>

            <div className="border border-charcoal/10 p-7">
              <h3 className="font-display text-base text-charcoal mb-3">
                Shipping Available
              </h3>
              <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                Can&rsquo;t make it to Salado? We accept secure shipping. Call or
                email first and we&rsquo;ll provide packing instructions and a
                prepaid return label.
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-olive mb-6 font-body">
              Map
            </p>
            <div className="aspect-square overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5!2d-97.539!3d30.947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU2JzQ5LjIiTiA5N8KwMzInMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BoxoMemories — Salado Village Framer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Walk-in CTA */}
      <section className="bg-charcoal text-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-cream font-light mb-5">
            Just walk in.
          </h2>
          <p className="text-cream/60 font-body font-light text-sm leading-relaxed">
            Bring whatever you have — shoebox, carousel tray, a bag of VHS
            tapes. We&rsquo;ll look through it with you and tell you exactly
            what&rsquo;s possible.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
