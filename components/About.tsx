import Image from 'next/image';
import overviewImage from '../public/apt.jpg';

export default function About() {
  const stats = [
    { value: '4.5', unit: 'Acres', label: 'Project Area' },
    { value: '3', unit: 'Towers', label: 'Residential Towers' },
    { value: '3 & 4', unit: 'BHK', label: 'Configurations' },
    { value: '46', unit: 'Acres', label: 'Authority Park View' },
  ];

  const features = [
    'Luxury clubhouse and ultra luxurious amenities',
    '100% Mivan construction for premium build quality',
    'Vaastu compliant planning with practical layouts',
    'Podium based, two-side open corner development',
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        .ab-root {
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

        .ab-section {
          background: var(--cream);
          padding: 120px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .ab-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        /* Watermark letter */
        .ab-watermark {
          position: absolute;
          top: -40px;
          right: -20px;
          font-family: 'Playfair Display', serif;
          font-size: 340px;
          font-weight: 400;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.08);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .ab-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        @media (max-width: 768px) {
          .ab-inner { padding: 0 24px; }
          .ab-section { padding: 80px 0 72px; }
        }

        /* Header */
        .ab-eyebrow {
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

        .ab-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--gold);
        }

        .ab-header-divider {
          width: 48px; height: 1px;
          background: var(--gold);
          margin: 20px 0;
        }

        /* Main grid */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          margin-top: 72px;
        }

        @media (max-width: 900px) {
          .ab-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Image column */
        .ab-img-wrap {
          position: relative;
        }

        .ab-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        /* Offset border decoration */
        .ab-img-frame::before {
          content: '';
          position: absolute;
          inset: -12px -12px 12px 12px;
          border: 1px solid var(--border);
          z-index: 0;
          pointer-events: none;
        }

        .ab-img-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .ab-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,9,7,0.72) 0%, rgba(10,9,7,0.1) 50%, transparent 100%);
          z-index: 2;
        }

        .ab-img-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 28px 24px;
          z-index: 3;
        }

        .ab-img-caption-tag {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }

        .ab-img-caption-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          line-height: 1.25;
        }

        /* Badge pinned top-right of image */
        .ab-badge {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 4;
          background: var(--ink);
          border: 1px solid var(--border);
          padding: 14px 18px;
          text-align: center;
        }

        .ab-badge-value {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--gold-light);
          line-height: 1;
        }

        .ab-badge-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
          margin-top: 4px;
        }

        /* Text column */
        .ab-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 3.5vw, 50px);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }

        .ab-text h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .ab-body {
          font-size: 15px;
          font-weight: 400;
          color: var(--ink-muted);
          line-height: 1.8;
          margin-bottom: 36px;
        }

        /* Feature list */
        .ab-features {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ab-feature {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid var(--cream-dark);
          transition: padding-left 0.2s ease;
        }

        .ab-feature:first-child { border-top: 1px solid var(--cream-dark); }

        .ab-feature:hover { padding-left: 6px; }

        .ab-feature-num {
          font-family: 'Playfair Display', serif;
          font-size: 12px;
          font-weight: 400;
          color: var(--gold);
          width: 20px;
          flex-shrink: 0;
          padding-top: 2px;
        }

        .ab-feature-text {
          font-size: 15px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1.5;
        }

        /* Stats row */
        .ab-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 80px;
          border: 1px solid var(--border);
        }

        @media (max-width: 700px) {
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
        }

        .ab-stat {
          padding: 36px 28px;
          text-align: center;
          border-right: 1px solid var(--border);
          position: relative;
          transition: background 0.25s ease;
        }

        .ab-stat:last-child { border-right: none; }

        @media (max-width: 700px) {
          .ab-stat:nth-child(2) { border-right: none; }
          .ab-stat:nth-child(3) { border-right: 1px solid var(--border); }
          .ab-stat:nth-child(1),
          .ab-stat:nth-child(2) { border-bottom: 1px solid var(--border); }
        }

        .ab-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .ab-stat:hover { background: rgba(201,168,76,0.04); }
        .ab-stat:hover::before { opacity: 1; }

        .ab-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .ab-stat-unit {
          font-size: 14px;
          font-weight: 400;
          color: var(--gold);
          margin-left: 3px;
        }

        .ab-stat-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-top: 8px;
        }
      `}</style>

      <section id="overview" className="ab-root ab-section">
        <div className="ab-topline" />
        <div className="ab-watermark">A</div>

        <div className="ab-inner">

          {/* Header */}
          <div>
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              Project Overview
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(38px, 4.5vw, 60px)',
              fontWeight: 400,
              color: 'var(--ink)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              About <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>SKA Group Launch</em>
            </h2>
            <div className="ab-header-divider" />
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--ink-muted)',
              lineHeight: 1.75,
              maxWidth: '520px',
            }}>
              SKA Group is launching soon a premium residential development in Sidharth Vihar, Ghaziabad for homebuyers seeking comfort, elegance, and modern amenities.
            </p>
          </div>

          {/* Main Grid */}
          <div className="ab-grid">

            {/* Image */}
            <div className="ab-img-wrap">
              <div className="ab-img-frame">
                <div className="ab-img-inner">
                  <Image
                    src={overviewImage}
                    alt="SKA Group Luxury Project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={{ transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="ab-img-overlay" />
                  <div className="ab-img-caption">
                    <div className="ab-img-caption-tag">Sidharth Vihar, Ghaziabad</div>
                    <div className="ab-img-caption-title">Luxury Living<br />Launching Soon</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="ab-badge">
                <div className="ab-badge-value">Rates</div>
                <div className="ab-badge-label">Opening Soon</div>
              </div>
            </div>

            {/* Text */}
            <div className="ab-text">
              <h2>
                Where Luxury<br />Meets <em>Comfort</em>
              </h2>
              <p className="ab-body">
                SKA Group offers thoughtfully designed semi-furnished 3 &amp; 4 BHK
                residences in the 1500 sq.ft to 2400 sq.ft range with curated
                luxury amenities and a premium park-facing setting.
              </p>

              <div className="ab-features">
                {features.map((item, idx) => (
                  <div key={idx} className="ab-feature">
                    <span className="ab-feature-num">0{idx + 1}</span>
                    <span className="ab-feature-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="ab-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="ab-stat">
                <div className="ab-stat-value">
                  {stat.value}
                  {stat.unit && <span className="ab-stat-unit">{stat.unit}</span>}
                </div>
                <div className="ab-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}



