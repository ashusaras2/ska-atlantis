export default function Highlights() {
  const highlights = [
    {
      icon: '\u27E1',
      title: '3 Towers',
      description: 'Thoughtfully planned high-rise towers for elevated urban living',
    },
    {
      icon: '\u25C6',
      title: '4.5 Acres Land',
      description: 'A spacious and integrated development footprint in Sidharth Vihar',
    },
    {
      icon: '\u25CE',
      title: '100% Mivan Construction',
      description: 'Modern construction quality designed for long-term structural strength',
    },
    {
      icon: '\u25A1',
      title: 'Vaastu Compliant Project',
      description: 'Planned with attention to spatial harmony and balanced home layouts',
    },
    {
      icon: '\u2726',
      title: 'Podium + Corner Design',
      description: 'Podium-based development with a two-side open corner planning concept',
    },
    {
      icon: '\u2B19',
      title: '46 Acre Park View',
      description: 'Facing a large authority park zone for open views and a green outlook',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .hl-root {
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

        .hl-section {
          background: var(--ink);
          padding: 120px 0 112px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid pattern */
        .hl-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hl-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        .hl-bottomline {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        /* Radial glow center */
        .hl-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 900px; height: 600px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .hl-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        @media (max-width: 768px) {
          .hl-inner { padding: 0 24px; }
          .hl-section { padding: 80px 0 72px; }
        }

        /* Header */
        .hl-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .hl-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--gold);
        }

        .hl-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 400;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 20px;
        }

        .hl-heading em {
          font-style: italic;
          color: var(--gold-light);
        }

        .hl-divider {
          width: 48px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          margin: 0 auto 20px;
        }

        .hl-subhead {
          font-size: 15.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.62);
          text-align: center;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Cards grid */
        .hl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 72px;
          border: 1px solid rgba(201,168,76,0.15);
        }

        @media (max-width: 900px) {
          .hl-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .hl-grid { grid-template-columns: 1fr; }
        }

        .hl-card {
          padding: 40px 36px 36px;
          border-right: 1px solid rgba(201,168,76,0.12);
          border-bottom: 1px solid rgba(201,168,76,0.12);
          position: relative;
          transition: background 0.3s ease;
          cursor: default;
          overflow: hidden;
        }

        /* Remove right border on last column */
        .hl-card:nth-child(3n) { border-right: none; }

        @media (max-width: 900px) {
          .hl-card:nth-child(3n) { border-right: 1px solid rgba(201,168,76,0.12); }
          .hl-card:nth-child(2n) { border-right: none; }
        }

        @media (max-width: 560px) {
          .hl-card { border-right: none; }
        }

        /* Remove bottom border on last row */
        .hl-card:nth-last-child(-n+3) { border-bottom: none; }

        @media (max-width: 900px) {
          .hl-card:nth-last-child(-n+3) { border-bottom: 1px solid rgba(201,168,76,0.12); }
          .hl-card:nth-last-child(-n+2) { border-bottom: none; }
        }

        @media (max-width: 560px) {
          .hl-card:last-child { border-bottom: none; }
          .hl-card:nth-last-child(-n+3),
          .hl-card:nth-last-child(-n+2) { border-bottom: 1px solid rgba(201,168,76,0.12); }
        }

        /* Gold corner reveal on hover */
        .hl-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .hl-card:hover { background: rgba(201,168,76,0.04); }
        .hl-card:hover::before { width: 100%; }

        .hl-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(201,168,76,0.5);
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        .hl-card-icon {
          font-size: 22px;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 16px;
          display: block;
          transition: transform 0.3s ease;
        }

        .hl-card:hover .hl-card-icon {
          transform: scale(1.15) rotate(15deg);
        }

        .hl-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .hl-card-desc {
          font-size: 14.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.62);
          line-height: 1.75;
        }

        /* Bottom line grow */
        .hl-card-line {
          margin-top: 24px;
          height: 1px;
          width: 24px;
          background: rgba(201,168,76,0.35);
          transition: width 0.35s ease, background 0.35s ease;
        }

        .hl-card:hover .hl-card-line {
          width: 48px;
          background: var(--gold);
        }
      `}</style>

      <section id="highlights" className="hl-root hl-section">
        <div className="hl-topline" />
        <div className="hl-bottomline" />
        <div className="hl-glow" />

        <div className="hl-inner">

          {/* Header */}
          <div>
            <div className="hl-eyebrow">
              <span className="hl-eyebrow-line" />
              What Sets Us Apart
              <span className="hl-eyebrow-line" />
            </div>
            <h2 className="hl-heading">
              Project <em>Highlights</em>
            </h2>
            <div className="hl-divider" />
            <p className="hl-subhead">
              Premium planning highlights from the upcoming SKA Group luxury development
            </p>
          </div>

          {/* Grid */}
          <div className="hl-grid">
            {highlights.map((item, index) => (
              <div key={index} className="hl-card">
                <div className="hl-card-num">{String(index + 1).padStart(2, '0')}</div>
                <span className="hl-card-icon">{item.icon}</span>
                <h3 className="hl-card-title">{item.title}</h3>
                <p className="hl-card-desc">{item.description}</p>
                <div className="hl-card-line" />
              </div>
            ))}
          </div>

        </div>

        <div className="hl-bottomline" />
      </section>
    </>
  );
}


