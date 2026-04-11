import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════
   BoxoMemories — Homepage
   Memory Preservation Studio · Salado, TX
   ═══════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
        {/* Background Pattern — subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #3A3A3A 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label mb-8">Memory Preservation Studio</p>
          <h1 className="text-balance mb-8">
            Every photograph
            <br />
            <em className="font-light">deserves a future</em>
          </h1>
          <p className="font-body text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto mb-12 font-light">
            We bring your family&rsquo;s treasured moments into the digital age
            — with the care they were created with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works" className="btn-primary">
              Begin Here
            </a>
            <a href="#pricing" className="btn-outline">
              View Pricing
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-charcoal/20 mx-auto" />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label">How It Works</p>
            <h2 className="text-balance">Three simple steps</h2>
            <div className="divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                step: "01",
                title: "Gather",
                desc: "Collect your photos, slides, negatives, VHS tapes, or film reels. Any condition, any era.",
                icon: (
                  <svg className="w-12 h-12 text-olive/60" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1}>
                    <rect x="8" y="12" width="32" height="24" rx="2" />
                    <path d="M16 12V8a4 4 0 018 0v4" />
                    <circle cx="24" cy="24" r="4" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Drop Off or Ship",
                desc: "Bring them to our studio in Salado, inside Salado Village Framer. Secure shipping available.",
                icon: (
                  <svg className="w-12 h-12 text-olive/60" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1}>
                    <path d="M6 32l6-20h24l6 20" />
                    <rect x="6" y="32" width="36" height="8" rx="1" />
                    <path d="M20 12V8M28 12V8" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Receive Your Archive",
                desc: "We return your originals and deliver beautifully organized digital files. Yours to keep forever.",
                icon: (
                  <svg className="w-12 h-12 text-olive/60" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1}>
                    <rect x="8" y="6" width="32" height="36" rx="2" />
                    <path d="M16 18h16M16 24h12M16 30h8" />
                    <path d="M30 34l4 4 6-8" strokeWidth={1.5} />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <p className="text-xs tracking-ultrawide text-olive font-body uppercase mb-3">
                  Step {item.step}
                </p>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-charcoal/60 font-light text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DIGITIZE ─── */}
      <section id="services" className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label">Services</p>
            <h2 className="text-balance">What we preserve</h2>
            <div className="divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Photo Prints",
                desc: "From faded snapshots to formal portraits. Scanned at archival resolution.",
                detail: "Up to 1200 dpi",
              },
              {
                title: "35mm Slides",
                desc: "Carousel trays, individual mounts. Every slide cleaned and color-corrected.",
                detail: "Individual attention",
              },
              {
                title: "Film Negatives",
                desc: "Black-and-white or color. Strips or rolls, any format from 35mm to 120.",
                detail: "Inverted & optimized",
              },
              {
                title: "VHS & Camcorder Tapes",
                desc: "VHS, VHS-C, Hi8, MiniDV. Converted to high-quality digital video files.",
                detail: "MP4 delivery",
              },
              {
                title: "Film Reels",
                desc: "8mm, Super 8, 16mm. Frame-by-frame scanning preserves every detail.",
                detail: "Frame-by-frame",
              },
              {
                title: "Documents & Albums",
                desc: "Bound albums, certificates, letters, artwork. Handled with archival care.",
                detail: "White-glove handling",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-warm-white p-8 md:p-10 card-hover group"
              >
                <p className="text-[10px] uppercase tracking-ultrawide text-olive/60 mb-4 font-body">
                  {service.detail}
                </p>
                <h3 className="mb-3 group-hover:text-olive transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-charcoal/50 font-light text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label">Pricing</p>
            <h2 className="text-balance">Straightforward, by the piece</h2>
            <div className="divider" />
            <p className="text-charcoal/50 font-light mt-6 max-w-lg mx-auto">
              Every project is different. These starting points cover most
              collections. We&rsquo;ll provide an exact quote when you bring
              your materials in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essentials",
                price: "From $0.35",
                unit: "per photo",
                features: [
                  "Photo prints up to 8×10",
                  "300 dpi standard scan",
                  "Digital delivery via USB or cloud",
                  "Originals returned safely",
                ],
                note: "Minimum 50 photos",
              },
              {
                name: "Full Collection",
                price: "From $0.65",
                unit: "per item",
                features: [
                  "Photos, slides, and negatives",
                  "600 dpi high-resolution scan",
                  "Color correction included",
                  "Organized digital folders",
                ],
                note: "Our most popular tier",
                featured: true,
              },
              {
                name: "Legacy Archive",
                price: "Custom",
                unit: "quote",
                features: [
                  "VHS, film reels, and mixed media",
                  "Archival-grade resolution",
                  "Full restoration available",
                  "Dedicated project manager",
                ],
                note: "For heirloom collections",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`p-10 md:p-12 flex flex-col card-hover ${
                  tier.featured
                    ? "bg-charcoal text-cream ring-1 ring-charcoal"
                    : "bg-cream ring-1 ring-charcoal/10"
                }`}
              >
                <p
                  className={`text-[10px] uppercase tracking-ultrawide mb-4 font-body ${
                    tier.featured ? "text-soft-yellow" : "text-olive"
                  }`}
                >
                  {tier.note}
                </p>
                <h3
                  className={`mb-1 ${
                    tier.featured ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="font-display text-3xl mb-1">{tier.price}</p>
                <p
                  className={`text-xs font-body mb-8 ${
                    tier.featured ? "text-cream/50" : "text-charcoal/40"
                  }`}
                >
                  {tier.unit}
                </p>
                <ul className="flex-1 space-y-3 mb-10">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm font-light flex items-start gap-3 ${
                        tier.featured ? "text-cream/70" : "text-charcoal/60"
                      }`}
                    >
                      <span
                        className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${
                          tier.featured ? "bg-soft-yellow" : "bg-olive"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center py-3 text-xs uppercase tracking-widest transition-colors duration-300 ${
                    tier.featured
                      ? "bg-cream text-charcoal hover:bg-soft-yellow"
                      : "bg-charcoal text-cream hover:bg-olive"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMOTIONAL DIVIDER ─── */}
      <section className="py-32 md:py-40 px-6 bg-cream text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-charcoal/80 leading-snug text-balance">
            &ldquo;The best time to preserve a memory
            <br />
            was the day it was made.
            <br />
            The second best time is today.&rdquo;
          </h2>
        </div>
      </section>

      {/* ─── ABOUT / TRUST ─── */}
      <section id="about" className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-cream flex items-center justify-center">
              <div className="text-center px-8">
                <svg
                  className="w-16 h-16 text-olive/30 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 48 48"
                  stroke="currentColor"
                  strokeWidth={0.75}
                >
                  <rect x="4" y="8" width="40" height="32" rx="2" />
                  <circle cx="18" cy="20" r="4" />
                  <path d="M4 32l12-8 8 6 10-10 10 12" />
                </svg>
                <p className="text-xs text-olive/40 tracking-wider uppercase">
                  Tim in the studio
                </p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="section-label">About</p>
              <h2 className="mb-8">Thirty years of seeing</h2>
              <div className="space-y-6 text-charcoal/60 font-light leading-relaxed">
                <p>
                  Tim Flanagan has spent three decades making photographs and
                  preserving the work of others. As the founder of Solas Gallery
                  in Salado, Texas, he understands that every image carries a
                  story worth keeping.
                </p>
                <p>
                  BoxoMemories brings that same archival discipline to your
                  family&rsquo;s collection. Whether it&rsquo;s a shoebox of
                  snapshots or a closet full of VHS tapes, every item is handled
                  with the care of a gallery-grade original.
                </p>
                <p>
                  Located inside Salado Village Framer on Rock Creek Drive,
                  the studio is equipped for high-resolution scanning,
                  professional color correction, and frame-by-frame film
                  transfer. Everything stays in-house — your memories never
                  leave our hands.
                </p>
              </div>
              <div className="mt-10">
                <a href="#contact" className="btn-outline">
                  Visit the Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / DROP-OFF ─── */}
      <section id="contact" className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label">Contact</p>
            <h2 className="text-balance">Come see us</h2>
            <div className="divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-ultrawide text-olive mb-4 font-body">
                  Location
                </p>
                <p className="font-display text-xl mb-2">
                  Inside Salado Village Framer
                </p>
                <address className="not-italic text-charcoal/60 font-light leading-relaxed">
                  <p>2 Rock Creek Dr Unit A</p>
                  <p>Salado, TX 76571</p>
                </address>
              </div>

              <div>
                <p className="text-xs uppercase tracking-ultrawide text-olive mb-4 font-body">
                  Hours
                </p>
                <div className="text-charcoal/60 font-light space-y-1">
                  <p>Tuesday – Saturday: 10 am – 5 pm</p>
                  <p>Sunday & Monday: Closed</p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-ultrawide text-olive mb-4 font-body">
                  Phone
                </p>
                <a
                  href="tel:+12546136123"
                  className="font-display text-xl text-charcoal hover:text-olive transition-colors"
                >
                  (254) 613-6123
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-ultrawide text-olive mb-4 font-body">
                  Drop-Off
                </p>
                <p className="text-charcoal/60 font-light leading-relaxed max-w-sm">
                  Walk in during business hours with your materials. No
                  appointment needed. We&rsquo;ll assess your collection and
                  provide a quote on the spot.
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="aspect-square md:aspect-auto bg-deep-cream flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5!2d-97.539!3d30.947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU2JzQ5LjIiTiA5N8KwMzInMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BoxoMemories Location — Salado Village Framer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
