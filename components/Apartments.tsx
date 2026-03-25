import Image from 'next/image';
import img1 from '../public/3.jpg';
import img2 from '../public/4.webp';

export default function Apartments() {
  const apartments = [
    {
      type: '3 BHK',
      tag: 'Launching Soon',
      sizes: ['1500 Sq.Ft', '1750 Sq.Ft', '1900 Sq.Ft'],
      description: 'Luxury semi-furnished homes with practical layouts and modern family comfort.',
      image: img1,
      features: ['Vaastu Compliant Design', 'Podium Based Planning', 'Ultra Luxury Amenities'],
    },
    {
      type: '4 BHK',
      tag: 'Ultra Luxury',
      sizes: ['2100 Sq.Ft', '2250 Sq.Ft', '2400 Sq.Ft'],
      description: 'Premium 4 BHK residences built for larger families with elegant living spaces.',
      image: img2,
      features: ['Semi-Furnished Specification', '2-Side Open Corner Layout', '46 Acre Park View'],
    },
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .ap-root {
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --gold-pale: #F5EDD4;
          --ink: #1A1710;
          --ink-muted: #6B6252;
          --cream: #FAF8F3;
          --cream-dark: #F0EBE0;
          --border: rgba(201, 168, 76, 0.22);
          font-family: 'Jost', sans-serif;
        }

        .ap-section {
          background: var(--cream-dark);
          padding: 120px 0 112px;
          position: relative;
          overflow: hidden;
        }

        .ap-topline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent);
        }

        .ap-watermark {
          position: absolute;
          bottom: -60px;
          left: -20px;
          font-family: 'Playfair Display', serif;
          font-size: 320px;
          font-weight: 400;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201, 168, 76, 0.07);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .ap-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        @media (max-width: 768px) {
          .ap-inner {
            padding: 0 24px;
          }
          .ap-section {
            padding: 80px 0 72px;
          }
        }

        .ap-eyebrow {
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

        .ap-eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--gold);
        }

        .ap-header-divider {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin: 20px 0;
        }

        .ap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 64px;
        }

        @media (max-width: 900px) {
          .ap-grid {
            grid-template-columns: 1fr;
          }
        }

        .ap-card {
          background: var(--cream);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .ap-card:hover {
          box-shadow: 0 24px 64px rgba(26, 23, 16, 0.12);
          transform: translateY(-4px);
        }

        .ap-card-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          z-index: 5;
        }

        .ap-img-wrap {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .ap-img-wrap img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .ap-card:hover .ap-img-wrap img {
          transform: scale(1.06) !important;
        }

        .ap-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 9, 7, 0.65) 0%, rgba(10, 9, 7, 0.1) 55%, transparent 100%);
          z-index: 2;
        }

        .ap-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 4;
          background: var(--ink);
          border: 1px solid var(--border);
          padding: 6px 14px;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-light);
        }

        .ap-content {
          padding: 32px 32px 28px;
        }

        .ap-type {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }

        .ap-type em {
          font-style: italic;
          color: var(--gold);
        }

        .ap-desc {
          font-size: 14.5px;
          font-weight: 400;
          color: var(--ink-muted);
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .ap-sizes-label {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 10px;
        }

        .ap-sizes {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .ap-size-tag {
          padding: 7px 16px;
          border: 1px solid var(--border);
          font-size: 13px;
          font-weight: 400;
          color: var(--ink);
          background: transparent;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          cursor: default;
        }

        .ap-size-tag:hover {
          background: var(--gold-pale);
          border-color: var(--gold);
          color: var(--ink);
        }

        .ap-rule {
          height: 1px;
          background: var(--cream-dark);
          margin-bottom: 20px;
        }

        .ap-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ap-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--ink-muted);
        }

        .ap-feature-dot {
          width: 5px;
          height: 5px;
          background: var(--gold);
          flex-shrink: 0;
          transform: rotate(45deg);
        }

        .ap-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 28px;
          background: var(--ink);
          color: var(--gold-light);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--ink);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .ap-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ap-cta:hover::before {
          opacity: 1;
        }

        .ap-cta:hover {
          color: var(--ink);
        }

        .ap-cta span {
          position: relative;
          z-index: 1;
        }

        .ap-cta-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.25s ease;
        }

        .ap-cta:hover .ap-cta-arrow {
          transform: translateX(4px);
        }

        .ap-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: var(--gold);
          border-style: solid;
          opacity: 0.4;
          z-index: 10;
        }

        .ap-corner.tl {
          top: 8px;
          left: 8px;
          border-width: 1px 0 0 1px;
        }

        .ap-corner.br {
          bottom: 8px;
          right: 8px;
          border-width: 0 1px 1px 0;
        }
      `}</style>

      <section id="apartments" className="ap-root ap-section">
        <div className="ap-topline" />
        <div className="ap-watermark">S</div>

        <div className="ap-inner">
          {/* Header */}
          <div>
            <div className="ap-eyebrow">
              <span className="ap-eyebrow-line" />
              Residences
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Apartment{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                Configurations
              </em>
            </h2>
            <div className="ap-header-divider" />
            <p
              style={{
                fontSize: '15.5px',
                fontWeight: 300,
                color: 'var(--ink-muted)',
                lineHeight: 1.75,
                maxWidth: '460px',
              }}
            >
              Choose from spacious 3 & 4 BHK residences with size options from
              1500 sq.ft to 2400 sq.ft in a premium upcoming development.
            </p>
          </div>

          {/* Cards */}
          <div className="ap-grid">
            {apartments.map((apt, index) => (
              <div key={index} className="ap-card">
                <div className="ap-card-topbar" />
                <div className="ap-corner tl" />
                <div className="ap-corner br" />

                {/* Image */}
                <div className="ap-img-wrap">
                  <Image
                    src={apt.image}
                    alt={`SKA Group ${apt.type}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="ap-img-overlay" />
                  <div className="ap-tag">{apt.tag}</div>
                </div>

                {/* Content */}
                <div className="ap-content">
                  <div className="ap-type">
                    {apt.type} <em>Apartments</em>
                  </div>
                  <p className="ap-desc">{apt.description}</p>

                  <div className="ap-sizes-label">Available Sizes</div>
                  <div className="ap-sizes">
                    {apt.sizes.map((size, i) => (
                      <span key={i} className="ap-size-tag">
                        {size}
                      </span>
                    ))}
                  </div>

                  <div className="ap-rule" />

                  <div className="ap-features">
                    {apt.features.map((f, i) => (
                      <div key={i} className="ap-feature">
                        <span className="ap-feature-dot" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="ap-cta">
                    <span>Request Floor Plan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



