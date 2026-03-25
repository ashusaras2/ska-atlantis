import Image from 'next/image';
import logo from '../public/skalogo.webp';

export default function Footer() {
  const quickLinks = [
    { label: 'Overview',   href: '#overview' },
    { label: 'Amenities',  href: '#amenities' },
    { label: 'Location',   href: '#location' },
    { label: 'Contact',    href: '#contact' },
  ];

  const highlights = [
    '3 & 4 BHK Luxury Homes',
    'Sidharth Vihar, Ghaziabad',
    '4.5 Acre Development',
    '46 Acre Park Facing',
    '100% Mivan Construction',
    'Launch Rates Opening Soon',
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .ft-root {
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --gold-pale: #F5EDD4;
          --ink: #1A1710;
          --ink-muted: #6B6252;
          font-family: 'Jost', sans-serif;
        }

        /* ── Wrapper ── */
        .ft-footer {
          background: #0E0C09;
          position: relative;
          overflow: hidden;
        }

        /* Dot-grid texture */
        .ft-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(201,168,76,0.10) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        /* Ambient glow */
        .ft-glow {
          position: absolute;
          bottom: -120px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Gold rule at very top */
        .ft-topline {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        /* ── Main body ── */
        .ft-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 48px 56px;
          position: relative;
        }

        /* Three-column layout */
        .ft-cols {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 64px;
          margin-bottom: 56px;
        }

        /* ── Col 1 — Brand ── */
        .ft-logo-wrap {
          margin-bottom: 20px;
          display: inline-block;
          /* invert for dark bg — remove if logo is already light/transparent */
          filter: brightness(0) invert(1);
          opacity: 0.88;
        }

        .ft-tagline {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 400;
          font-style: italic;
          color: var(--gold-light);
          margin-bottom: 14px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .ft-about {
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(255,255,255,0.52);
          line-height: 1.8;
          max-width: 300px;
        }

        .ft-divider-sm {
          width: 36px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          margin: 20px 0;
        }

        .ft-contact-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          margin-bottom: 8px;
        }

        .ft-contact-line span:first-child {
          color: var(--gold);
          font-size: 14px;
        }

        .ft-contact-line a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-contact-line a:hover { color: var(--gold-light); }

        /* ── Col 2 — Quick Links ── */
        .ft-col-heading {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ft-col-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(201,168,76,0.2);
        }

        .ft-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ft-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
        }

        .ft-link:last-child { border-bottom: none; }

        .ft-link::before {
          content: '◆';
          font-size: 6px;
          color: var(--gold);
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }

        .ft-link:hover {
          color: var(--gold-light);
          padding-left: 4px;
        }

        .ft-link:hover::before { opacity: 1; }

        /* ── Col 3 — Highlights ── */
        .ft-highlights {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ft-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
        }

        .ft-highlight:last-child { border-bottom: none; }

        .ft-highlight-dot {
          width: 5px; height: 5px;
          border: 1px solid var(--gold);
          flex-shrink: 0;
          transform: rotate(45deg);
        }

        /* ── Bottom bar ── */
        .ft-bottom-rule {
          height: 1px;
          background: rgba(201,168,76,0.12);
          margin-bottom: 28px;
        }

        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .ft-copyright {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
          line-height: 1.7;
        }

        .ft-copyright strong {
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }

        .ft-legal {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ft-legal-link {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-legal-link:hover { color: var(--gold); }

        .ft-legal-sep {
          width: 1px; height: 12px;
          background: rgba(201,168,76,0.2);
        }

        /* RERA badge */
        .ft-rera {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border: 1px solid rgba(201,168,76,0.18);
          background: rgba(201,168,76,0.04);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          margin-top: 16px;
          display: block;
          width: fit-content;
        }

        .ft-rera span {
          color: var(--gold);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ft-cols {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          /* Brand col spans full width */
          .ft-cols > div:first-child {
            grid-column: 1 / -1;
          }
          .ft-about { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .ft-body { padding: 56px 24px 40px; }
          .ft-cols { grid-template-columns: 1fr; gap: 36px; }
          .ft-cols > div:first-child { grid-column: auto; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <footer className="ft-root ft-footer">
        <div className="ft-topline" />
        <div className="ft-glow" />

        <div className="ft-body">

          {/* Three columns */}
          <div className="ft-cols">

            {/* Col 1 — Brand */}
            <div>
              <div className="ft-logo-wrap">
                <Image
                  src={logo}
                  alt="SKA Group Logo"
                  width={114}
                  height={40}
                  style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div className="ft-tagline">
                Crafting Luxury Living<br />in Sidharth Vihar
              </div>

              <p className="ft-about">
                SKA Group presents an exclusive pre-launch residential development — luxury 3 &amp; 4 BHK apartments designed for modern families seeking space, openness, and premium lifestyle amenities.
              </p>

              <div className="ft-divider-sm" />

              <div className="ft-contact-line">
                <span>☎</span>
                <a href="tel:+918512010869">+91-8512010869</a>
              </div>
              <div className="ft-contact-line">
                <span>◉</span>
                <span>Sidharth Vihar, Ghaziabad, UP</span>
              </div>
              <div className="ft-contact-line">
                <span>⏰</span>
                <span>All Days · 10 AM – 6 PM</span>
              </div>

              <div className="ft-rera">
                <span>◆</span> RERA Registration · Awaited
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <div className="ft-col-heading">Quick Links</div>
              <nav className="ft-links">
                {quickLinks.map((l) => (
                  <a key={l.label} href={l.href} className="ft-link">
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3 — Project Highlights */}
            <div>
              <div className="ft-col-heading">Highlights</div>
              <div className="ft-highlights">
                {highlights.map((h) => (
                  <div key={h} className="ft-highlight">
                    <div className="ft-highlight-dot" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="ft-bottom-rule" />
          <div className="ft-bottom">
            <p className="ft-copyright">
              <strong>© 2026 SKA Group.</strong> All rights reserved.<br />
              This is a channel partner website for informational purposes. All details are subject to change without prior notice. Images are for representation only.
            </p>
            <div className="ft-legal">
              <a href="#" className="ft-legal-link">Privacy Policy</a>
              <div className="ft-legal-sep" />
              <a href="#" className="ft-legal-link">Disclaimer</a>
              <div className="ft-legal-sep" />
              <a href="#" className="ft-legal-link">Terms</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}