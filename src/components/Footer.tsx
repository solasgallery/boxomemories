export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h4 className="font-display text-2xl text-cream tracking-wider mb-4">
              BoxoMemories
            </h4>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Professional memory preservation. Every photograph, every frame,
              every moment — brought forward with care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-ultrawide text-cream/40 mb-6">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-ultrawide text-cream/40 mb-6">
              Visit Us
            </p>
            <address className="not-italic text-sm leading-relaxed text-cream/60">
              <p>Inside Salado Village Framer</p>
              <p>2 Rock Creek Dr Unit A</p>
              <p>Salado, TX 76571</p>
              <p className="mt-4">
                <a
                  href="tel:+12546136123"
                  className="hover:text-cream transition-colors"
                >
                  (254) 613-6123
                </a>
              </p>
              <p className="mt-2 text-cream/40">
                Tue – Sat, 10 am – 5 pm
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} BoxoMemories · A service of{" "}
            <a
              href="https://solasgallery.com"
              className="hover:text-cream/60 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solas Gallery
            </a>
          </p>
          <p className="text-xs text-cream/30">Salado, Texas</p>
        </div>
      </div>
    </footer>
  );
}
