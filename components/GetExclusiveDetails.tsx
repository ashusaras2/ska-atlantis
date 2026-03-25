import Image from "next/image";
import ContactForm from "./ContactForm";
import logo from "../public/skalogo.webp";

export default function GetExclusiveDetails() {
  const contactItems = [
    {
      icon: "\u260E",
      id:1,
      value: "+91-8512010869",
      sub: "Mon - Sun, 10 AM - 6 PM",
    },
    {
      icon: "\u25C9",
      id:2,
      value: "Sidharth Vihar",
      sub: "Ghaziabad, Uttar Pradesh",
    },
    {
      icon: "\u23F0",
      id:3,
      value: "All Days Open",
      sub: "10 AM - 6 PM | By Appointment",
    },
  ];

  const trustItems = [
    "Instant Callback Guaranteed",
    "Best Price - No Brokerage",
    "Rates Opening Soon - Early Access",
    "Dedicated Relationship Manager",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        .gx-root {
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

        /* Section background */
        .gx-section {
          position: relative;
          background: var(--cream);
          padding: 120px 0 100px;
          overflow: hidden;
        }

        /* Decorative BG elements */
        .gx-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .gx-bg-circle-1 {
          width: 600px; height: 600px;
          top: -200px; right: -160px;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
        }

        .gx-bg-circle-2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -80px;
          background: radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%);
        }

        /* Thin gold horizontal rule across full width */
        .gx-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
        }

        /* Inner container */
        .gx-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        @media (max-width: 768px) {
          .gx-inner { padding: 0 24px; }
          .gx-section { padding: 80px 0 72px; }
        }

        /* Header */
        .gx-eyebrow {
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

        .gx-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .gx-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .gx-heading em {
          font-style: italic;
          color: var(--gold);
        }

        .gx-subhead {
          font-size: 15px;
          font-weight: 400;
          color: var(--ink-muted);
          line-height: 1.7;
          max-width: 480px;
        }

        .gx-header-divider {
          width: 48px; height: 1px;
          background: var(--gold);
          margin: 20px 0 24px;
        }

        .gx-brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid var(--border);
          background: rgba(201,168,76,0.06);
          margin-bottom: 14px;
        }

        .gx-brand-mark-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        /* Layout grid */
        .gx-grid {
          display: grid;
          grid-template-columns: 1fr 1.45fr;
          gap: 64px;
          align-items: start;
          margin-top: 64px;
        }

        @media (max-width: 1024px) {
          .gx-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* Left column label */
        .gx-col-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 24px;
        }

        /* Contact items */
        .gx-contact-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 40px;
        }

        .gx-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--cream-dark);
          transition: padding-left 0.2s ease;
        }

        .gx-contact-item:first-child {
          border-top: 1px solid var(--cream-dark);
        }

        .gx-contact-item:hover {
          padding-left: 6px;
        }

        .gx-contact-icon {
          width: 40px; height: 40px;
          background: var(--cream-dark);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .gx-contact-item:hover .gx-contact-icon {
          background: var(--gold-pale);
          border-color: var(--gold);
        }

        .gx-contact-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 3px;
        }

        .gx-contact-value {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1.2;
        }

        .gx-contact-sub {
          font-size: 13px;
          font-weight: 400;
          color: var(--ink-muted);
          margin-top: 2px;
        }

        /* Trust block */
        .gx-trust {
          background: var(--ink);
          padding: 28px 28px 24px;
          position: relative;
          overflow: hidden;
        }

        .gx-trust::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold));
        }

        .gx-trust-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }

        .gx-trust-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gx-trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.02em;
        }

        .gx-trust-check {
          width: 18px; height: 18px;
          border: 1px solid rgba(201,168,76,0.4);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 10px;
          color: var(--gold-light);
        }

        /* Right column - form wrapper */
        .gx-form-wrap {
          background: linear-gradient(180deg, #fffdf8 0%, var(--cream) 100%);
          border: 1px solid rgba(201,168,76,0.42);
          padding: 0;
          position: relative;
          box-shadow: 0 22px 54px rgba(26,23,16,0.14), 0 10px 22px rgba(201,168,76,0.14);
          transform: translateY(-10px);
          isolation: isolate;
        }

        .gx-form-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border: 1px solid rgba(232,201,106,0.4);
          pointer-events: none;
          z-index: 0;
        }

        .gx-form-wrap::after {
          content: '';
          position: absolute;
          top: -80px;
          right: -70px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .gx-form-badge {
          position: absolute;
          top: -13px;
          right: 24px;
          z-index: 2;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: var(--ink);
          color: var(--gold-light);
          border: 1px solid rgba(201,168,76,0.45);
          padding: 7px 12px 6px;
        }

        .gx-form-header {
          position: relative;
          z-index: 1;
          padding: 32px 40px 24px;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          background: linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.03) 48%, transparent 100%);
        }

        @media (max-width: 600px) {
          .gx-form-header { padding: 24px 24px 20px; }
        }

        .gx-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--ink);
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }

        .gx-form-subtitle {
          font-size: 14.5px;
          font-weight: 400;
          color: var(--ink-muted);
          line-height: 1.55;
        }

        .gx-form-body {
          position: relative;
          z-index: 1;
          padding: 32px 40px 36px;
        }

        @media (max-width: 600px) {
          .gx-form-body { padding: 24px 24px 28px; }
          .gx-form-wrap {
            transform: translateY(0);
          }
          .gx-form-badge {
            right: 16px;
          }
        }

        /* Corner accents on form wrap */
        .gx-corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: var(--gold);
          border-style: solid;
          opacity: 0.45;
        }
        .gx-corner.tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
        .gx-corner.br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }
      `}</style>

      <section id="contact" className="gx-root gx-section">
        <div className="gx-topline" />
        <div className="gx-bg-circle gx-bg-circle-1" />
        <div className="gx-bg-circle gx-bg-circle-2" />

        <div className="gx-inner">

          {/* Header */}
          <div>
            <div className="gx-brand-mark">
              <Image
                src={logo}
                alt="SKA Group logo"
                width={108}
                height={36}
                priority
              />
              <span className="gx-brand-mark-label">Official Sales Desk</span>
            </div>

            <div className="gx-eyebrow">
              <span className="gx-eyebrow-line" />
              Get In Touch
            </div>
            <h2 className="gx-heading">
              Exclusive <em>Pre-Launch</em><br />Updates
            </h2>
            <div className="gx-header-divider" />
            <p className="gx-subhead">
              Register now to receive launch updates, floor plans, and priority early access for the SKA Group launch.
            </p>
          </div>

          {/* Grid */}
          <div className="gx-grid">

            {/* LEFT - Contact info */}
            <div>
              <div className="gx-col-label">Reach Us Directly</div>

              <div className="gx-contact-list">
                {contactItems.map((item) => (
                  <div key={item.id} className="gx-contact-item">
                    <div className="gx-contact-icon">{item.icon}</div>
                    <div>
                      <div className="gx-contact-value">{item.value}</div>
                      <div className="gx-contact-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust block */}
              <div className="gx-trust">
                <div className="gx-trust-title">Why SKA Group Launch</div>
                <div className="gx-trust-list">
                  {trustItems.map((t) => (
                    <div key={t} className="gx-trust-item">
                      <div className="gx-trust-check">{"\u2713"}</div>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT - Form */}
            <div className="gx-form-wrap">
              <div className="gx-form-badge">Priority Desk</div>
              <div className="gx-corner tl" />
              <div className="gx-corner br" />

              <div className="gx-form-header">
                <div className="gx-form-title">Register Your Interest</div>
                <div className="gx-form-subtitle">
                  Fill the form below - our advisor will contact you with pre-launch details and size-wise availability.
                </div>
              </div>

              <div className="gx-form-body">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}




