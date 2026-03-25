import Image from "next/image";
import logo from "../public/skalogo.webp";

export default function Amenities() {
  const amenities = [
    { icon: '◆', name: 'Luxury Clubhouse', sub: 'Signature social spaces' },
    { icon: '◉', name: 'Ultra Luxury Amenities', sub: 'Curated modern lifestyle' },
    { icon: '⟳', name: 'Podium Development', sub: 'Elevated common zones' },
    { icon: '□', name: 'Semi-Furnished Homes', sub: 'Move-in friendly planning' },
    { icon: '✦', name: '46 Acre Park View', sub: 'Open green outlook' },
    { icon: '◎', name: '2-Side Open Corner', sub: 'Cross-ventilation focused' },
    { icon: '⟡', name: 'Vaastu Compliant', sub: 'Balanced home layout' },
    { icon: '◇', name: '100% Mivan Build', sub: 'Modern construction quality' },
    { icon: '⬙', name: 'Premium Lobby Design', sub: 'Elegant arrival experience' },
    { icon: '⊕', name: 'Multi-Tower Layout', sub: 'Three tower masterplan' },
    { icon: '◌', name: 'Family-Centric Planning', sub: 'Spacious apartment sizes' },
    { icon: '⚡', name: 'Launch Benefits', sub: 'Rates opening very soon' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .am-root {
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --gold-pale: #F5EDD4;
          --ink: #1A1710;
          --ink-muted: #6B6252;
          --cream: #FAF8F3;
          --cream-dark: #F0EBE0;
          --border: rgba(201,168,76,0.22);
          font-family: 'Jost', sans-serif;
        }

        .am-section {
          background: var(--cream);
          padding: 120px 0 112px;
          position: relative;
          overflow: hidden;
        }

        .am-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        .am-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(201,168,76,0.025) 40px,
            rgba(201,168,76,0.025) 41px
          );
          pointer-events: none;
        }

        .am-watermark {
          position: absolute;
          top: -80px; right: -40px;
          font-family: 'Playfair Display', serif;
          font-size: 380px;
          font-weight: 400;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.06);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .am-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        /* ── Brand mark — matches GetExclusiveDetails exactly ── */
        .am-brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid var(--border);
          background: rgba(201,168,76,0.06);
          margin-bottom: 14px;
        }
        .am-brand-mark-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        .am-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .am-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--gold);
        }

        .am-header-divider {
          width: 48px; height: 1px;
          background: var(--gold);
          margin: 20px 0;
        }

        /* ── Grid ── */
        .am-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 64px;
          border: 1px solid var(--border);
        }

        .am-cell {
          padding: 36px 24px 32px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: background 0.3s ease;
          cursor: default;
          text-align: center;
          overflow: hidden;
        }

        .am-cell:nth-child(4n)  { border-right: none; }
        .am-cell:nth-child(n+9) { border-bottom: none; }

        .am-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .am-cell:hover { background: rgba(201,168,76,0.04); }
        .am-cell:hover::before { opacity: 1; }

        .am-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px; height: 52px;
          border: 1px solid var(--border);
          background: var(--cream-dark);
          margin: 0 auto 16px;
          font-size: 20px;
          color: var(--gold);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .am-cell:hover .am-icon {
          background: var(--gold-pale);
          border-color: var(--gold);
          transform: scale(1.08) rotate(8deg);
        }

        .am-name {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 400;
          color: var(--ink);
          margin-bottom: 5px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .am-sub {
          font-size: 12px;
          font-weight: 400;
          color: var(--ink-muted);
          letter-spacing: 0.04em;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .am-grid { grid-template-columns: repeat(3, 1fr); }
          .am-cell:nth-child(4n)   { border-right: 1px solid var(--border); }
          .am-cell:nth-child(3n)   { border-right: none; }
          .am-cell:nth-child(n+9)  { border-bottom: 1px solid var(--border); }
          .am-cell:nth-child(n+10) { border-bottom: none; }
        }

        @media (max-width: 640px) {
          .am-grid { grid-template-columns: repeat(2, 1fr); }
          .am-cell:nth-child(3n)   { border-right: 1px solid var(--border); }
          .am-cell:nth-child(2n)   { border-right: none; }
          .am-cell:nth-child(n+10) { border-bottom: 1px solid var(--border); }
          .am-cell:nth-child(n+11) { border-bottom: none; }
        }

        @media (max-width: 768px) {
          .am-inner   { padding: 0 24px; }
          .am-section { padding: 80px 0 72px; }
        }
      `}</style>

      <section id="amenities" className="am-root am-section">
        <div className="am-topline" />
        <div className="am-watermark">L</div>

        <div className="am-inner">

          {/* Header */}
          <div>
            {/* Brand mark — same pattern as GetExclusiveDetails */}
            <div className="am-brand-mark">
              <Image
                src={logo}
                alt="SKA Group logo"
                width={108}
                height={36}
                priority
              />
              <span className="am-brand-mark-label">Premium Living</span>
            </div>

            <div className="am-eyebrow">
              <span className="am-eyebrow-line" />
              Lifestyle Facilities
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 400,
              color: 'var(--ink)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              World-Class{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Amenities</em>
            </h2>

            <div className="am-header-divider" />

            <p style={{
              fontSize: '15.5px',
              fontWeight: 300,
              color: 'var(--ink-muted)',
              lineHeight: 1.75,
              maxWidth: '460px',
            }}>
              A complete set of premium features designed for modern luxury living in Sidharth Vihar.
            </p>
          </div>

          {/* Grid */}
          <div className="am-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="am-cell">
                <div className="am-icon">{amenity.icon}</div>
                <div className="am-name">{amenity.name}</div>
                <div className="am-sub">{amenity.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}