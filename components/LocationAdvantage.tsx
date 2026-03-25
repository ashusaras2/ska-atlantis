import Image from "next/image";
import logo from "../public/skalogo.webp";

export default function LocationAdvantage() {
  const advantages = [
    { icon: '⊕', title: 'Sidharth Vihar Address', distance: 'Prime', description: 'Located in one of Ghaziabad\'s fast-growing corridors' },
    { icon: '◆', title: 'Project Footprint', distance: '4.5 Acres', description: 'Expansive planning with premium residential zoning' },
    { icon: '◎', title: 'Tower Planning', distance: '3 Towers', description: 'Balanced tower placement for openness and privacy' },
    { icon: '⟡', title: 'Apartment Range', distance: '1500-2400', description: 'Spacious 3 & 4 BHK homes in multiple size options' },
    { icon: '□', title: 'Corner Openness', distance: '2-Side', description: 'Corner concept for better light and ventilation' },
    { icon: '◉', title: 'Podium Concept', distance: 'Elevated', description: 'Dedicated podium-level lifestyle and leisure zones' },
    { icon: '◌', title: 'Park Facing View', distance: '46 Acres', description: 'Authority park view adding openness and greenery' },
    { icon: '✦', title: 'Launch Update', distance: 'Soon', description: 'Rates will open very soon for priority buyers' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .lc-root {
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

        .lc-section {
          background: var(--ink);
          padding: 120px 0 112px;
          position: relative;
          overflow: hidden;
        }

        .lc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
        }

        .lc-topline, .lc-bottomline {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }
        .lc-topline    { top: 0; }
        .lc-bottomline { bottom: 0; }

        .lc-glow {
          position: absolute;
          top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .lc-watermark {
          position: absolute;
          bottom: -80px; right: -30px;
          font-family: 'Playfair Display', serif;
          font-size: 360px;
          font-weight: 400;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.06);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .lc-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        /* ── Brand mark — dark-theme variant ── */
        .lc-brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.07);
          margin-bottom: 14px;
        }

        /*
          On the dark ink background the logo .webp may have a white/light
          background. We invert it so it reads cleanly on dark.
          If your logo is already transparent/light-on-dark, remove the filter.
        */
        .lc-brand-mark-logo {
          filter: brightness(0) invert(1);
          opacity: 0.88;
        }

        .lc-brand-mark-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .lc-eyebrow {
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
        .lc-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--gold);
        }

        .lc-header-divider {
          width: 48px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          margin: 20px 0;
        }

        /* Two-column header layout */
        .lc-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 72px;
        }

        /* Address card */
        .lc-address {
          padding: 28px 28px 24px;
          border: 1px solid rgba(201,168,76,0.2);
          position: relative;
        }
        .lc-address::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }
        .lc-address-label {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 10px;
        }
        .lc-address-value {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .lc-address-sub {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.58);
          line-height: 1.6;
        }

        /* Grid */
        .lc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(201,168,76,0.15);
        }

        .lc-cell {
          padding: 32px 24px 28px;
          border-right: 1px solid rgba(201,168,76,0.12);
          border-bottom: 1px solid rgba(201,168,76,0.12);
          position: relative;
          transition: background 0.3s ease;
          cursor: default;
          overflow: hidden;
        }
        .lc-cell:nth-child(4n)  { border-right: none; }
        .lc-cell:nth-child(n+5) { border-bottom: none; }

        .lc-cell::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .lc-cell:hover { background: rgba(201,168,76,0.05); }
        .lc-cell:hover::before { opacity: 1; }

        .lc-icon-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .lc-icon {
          width: 40px; height: 40px;
          border: 1px solid rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          color: var(--gold);
          flex-shrink: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .lc-cell:hover .lc-icon {
          background: rgba(201,168,76,0.14);
          transform: rotate(10deg) scale(1.08);
        }
        .lc-distance {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--gold-light);
          letter-spacing: -0.01em;
        }
        .lc-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .lc-desc {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.56);
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .lc-grid { grid-template-columns: repeat(2, 1fr); }
          .lc-cell:nth-child(4n)  { border-right: 1px solid rgba(201,168,76,0.12); }
          .lc-cell:nth-child(2n)  { border-right: none; }
          .lc-cell:nth-child(n+5) { border-bottom: 1px solid rgba(201,168,76,0.12); }
          .lc-cell:nth-child(n+7) { border-bottom: none; }
        }

        @media (max-width: 800px) {
          .lc-header-row { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
        }

        @media (max-width: 768px) {
          .lc-inner   { padding: 0 24px; }
          .lc-section { padding: 80px 0 72px; }
        }
      `}</style>

      <section id="location" className="lc-root lc-section">
        <div className="lc-topline" />
        <div className="lc-bottomline" />
        <div className="lc-glow" />
        <div className="lc-watermark">G</div>

        <div className="lc-inner">

          {/* Header row */}
          <div className="lc-header-row">
            <div>

              {/* Brand mark — inverted for dark background */}
              <div className="lc-brand-mark">
                <Image
                  src={logo}
                  alt="SKA Group logo"
                  width={108}
                  height={36}
                  priority
                  className="lc-brand-mark-logo"
                />
                <span className="lc-brand-mark-label">Location Advantage</span>
              </div>

              <div className="lc-eyebrow">
                <span className="lc-eyebrow-line" />
                Connectivity
              </div>

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
              }}>
                Strategically{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Located</em>
              </h2>

              <div className="lc-header-divider" />

              <p style={{
                fontSize: '15px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                maxWidth: '380px',
              }}>
                Sidharth Vihar places this project in a premium urban pocket with strong residential growth potential.
              </p>
            </div>

            {/* Address card */}
            <div className="lc-address">
              <div className="lc-address-label">Project Address</div>
              <div className="lc-address-value">
                SKA Group Launch,<br />
                Sidharth Vihar, Ghaziabad
              </div>
              <div className="lc-address-sub">
                Uttar Pradesh - 201010<br />
                Luxury 3 &amp; 4 BHK Apartments
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lc-grid">
            {advantages.map((adv, index) => (
              <div key={index} className="lc-cell">
                <div className="lc-icon-wrap">
                  <div className="lc-icon">{adv.icon}</div>
                  <div className="lc-distance">{adv.distance}</div>
                </div>
                <div className="lc-title">{adv.title}</div>
                <div className="lc-desc">{adv.description}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}