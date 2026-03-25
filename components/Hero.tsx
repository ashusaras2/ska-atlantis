import Image from 'next/image';
import img from '../public/apt.jpg';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        .hero-root {
          --gold: #c9a84c;
          --gold-light: #e8c96a;
          --ink: #1a1710;
          --cream: #faf8f3;
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 56px; }
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          60% { transform: translateY(8px); opacity: 0.3; }
        }

        .hero-animate-1 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .hero-animate-2 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .hero-animate-3 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
        .hero-animate-4 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
        .hero-animate-5 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.75s both; }
        .hero-animate-form { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both; }

        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.6;
          mix-blend-mode: overlay;
        }

        .hero-content {
          width: min(1280px, 100%);
          margin: 0 auto;
          padding: clamp(96px, 13vh, 140px) clamp(18px, 5vw, 84px) clamp(64px, 10vh, 96px);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 420px);
          align-items: center;
          gap: clamp(30px, 4vw, 80px);
        }

        .hero-copy {
          color: #fff;
          max-width: 640px;
          padding-left: clamp(0px, 1.6vw, 22px);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border: 1px solid rgba(201, 168, 76, 0.4);
          background: rgba(10, 9, 7, 0.35);
          margin-bottom: 22px;
        }

        .hero-eyebrow-line {
          width: 24px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .hero-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 6.2vw, 84px);
          font-weight: 400;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0;
        }

        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .hero-divider {
          height: 1px;
          width: 56px;
          background: var(--gold);
          margin-top: 24px;
          animation: lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both;
        }

        .hero-lead {
          font-family: 'Playfair Display', serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 400;
          color: rgba(255,255,255,0.86);
          margin-top: 20px;
          line-height: 1.45;
          letter-spacing: 0.01em;
          max-width: 560px;
        }

        .hero-sublead {
          margin-top: 9px;
          font-family: 'Jost', sans-serif;
          font-size: clamp(13px, 1.35vw, 15px);
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .hero-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .hero-chip {
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-stat {
          min-width: 130px;
          padding: 0 20px 0 0;
          border-right: 1px solid rgba(255,255,255,0.17);
          margin-right: 6px;
        }

        .hero-stat:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }

        .hero-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 500;
          color: var(--gold-light);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .hero-stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
          margin-top: 5px;
        }

        .hero-cta-row {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          border: 1px solid var(--gold);
          color: var(--gold-light);
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .hero-cta:hover::before { opacity: 1; }
        .hero-cta:hover { color: var(--ink); }
        .hero-cta span { position: relative; z-index: 1; }

        .hero-cta-arrow {
          position: relative;
          z-index: 1;
          font-size: 15px;
          transition: transform 0.25s ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        .hero-cta-note {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
        }

        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: fadeIn 1s ease 1.4s both;
        }

        .hero-scroll-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.52);
        }

        .hero-scroll-dot {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(201,168,76,0.6), transparent);
          animation: scrollBounce 1.8s ease infinite;
        }

        @media (max-width: 1200px) {
          .hero-content {
            padding: clamp(92px, 12vh, 124px) clamp(20px, 4vw, 52px) clamp(56px, 8vh, 84px);
          }
          .hero-copy {
            padding-left: 0;
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            padding-top: 106px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .hero-copy {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 98px 16px 54px;
          }
          .hero-title {
            font-size: clamp(36px, 11vw, 52px);
          }
          .hero-stats {
            gap: 10px;
            margin-top: 30px;
          }
          .hero-stat {
            min-width: 112px;
            padding-right: 14px;
            margin-right: 4px;
          }
          .hero-stat-value {
            font-size: 22px;
          }
          .hero-scroll {
            display: none;
          }
        }
      `}</style>

      <section
        id="home"
        className="hero-root relative w-full min-h-screen flex items-center"
        style={{ paddingTop: '72px' }}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={img}
            alt="SKA Group Luxury Apartments"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(10,9,7,0.88) 0%, rgba(10,9,7,0.70) 45%, rgba(10,9,7,0.35) 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(to top, rgba(10,9,7,0.6), transparent)' }}
          />
        </div>

        <div className="hero-grain" />

        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-animate-1 hero-eyebrow">
                <div className="hero-eyebrow-line" />
                <span className="hero-eyebrow-text">Sidharth Vihar | Ghaziabad</span>
              </div>

              <h1 className="hero-animate-2 hero-title">
                SKA Group
                <br />
                <em>Launching Soon</em>
              </h1>

              <div className="hero-divider" />

              <p className="hero-animate-3 hero-lead">
                Luxury 3 & 4 BHK apartments crafted for modern family living.
              </p>
              <div className="hero-animate-3 hero-sublead">
                4.5 acres | 3 towers | 1500 sq.ft to 2400 sq.ft configurations
              </div>

              <div className="hero-animate-3 hero-highlights">
                {[
                  'Luxury Clubhouse',
                  '100% Mivan Construction',
                  'Vaastu Compliant',
                  'Podium Based Development',
                  '2-Side Open Corner Project',
                ].map((item) => (
                  <span key={item} className="hero-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="hero-stats hero-animate-4">
                {[
                  { value: '4.5', label: 'Acres Land' },
                  { value: '3', label: 'Towers' },
                  { value: '1500-2400', label: 'Sq.Ft Range' },
                ].map((s) => (
                  <div key={s.label} className="hero-stat">
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="hero-animate-5 hero-cta-row">
                <a href="#contact" className="hero-cta">
                  <span>Register Interest</span>
                  <span className="hero-cta-arrow">-&gt;</span>
                </a>
                <span className="hero-cta-note">Rates will open very soon</span>
              </div>
            </div>

            <div className="hero-animate-form w-full flex justify-center lg:justify-end">
              <div style={{ width: '100%', maxWidth: '420px' }}>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-dot" />
        </div>
      </section>
    </>
  );
}



