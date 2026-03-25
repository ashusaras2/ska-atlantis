'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/skalogo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#overview', label: 'About' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#apartments', label: 'Apartments' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#location', label: 'Location' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .nb-root {
          --gold: #C9A84C;
          --gold-light: #E8C96A;
          --ink: #1A1710;
          --ink-muted: #8A8070;
          --cream: #FAF8F3;
          --white: #FFFFFF;
          --border: rgba(201,168,76,0.2);
          font-family: 'DM Sans', sans-serif;
        }

        .nb-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          background: rgba(250,248,243,0.92);
          border-bottom: 1px solid transparent;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .nb-bar.scrolled {
          background: rgba(250,248,243,0.97);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 32px rgba(26,23,16,0.07);
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          transition: height 0.3s ease;
        }

        .nb-bar.scrolled .nb-inner {
          height: 64px;
        }

        @media (max-width: 1024px) {
          .nb-inner { padding: 0 24px; height: 64px; }
        }

        /* Logo */
        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Eyebrow above logo - optional brand lockup */
        .nb-logo-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nb-logo-eyebrow {
          font-size: 9.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          line-height: 1;
        }

        .nb-logo-sub {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-muted);
          line-height: 1;
        }

        @media (max-width: 640px) {
          .nb-logo-sub {
            display: none;
          }
        }

        /* Desktop nav links */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        @media (max-width: 1024px) {
          .nb-links { display: none; }
        }

        .nb-link {
          position: relative;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--ink-muted);
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.2s ease;
        }

        .nb-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -1px;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .nb-link:hover {
          color: var(--ink);
        }

        .nb-link:hover::after {
          width: 100%;
        }

        /* CTA button */
        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
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
        }

        .nb-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nb-cta:hover::before { opacity: 1; }
        .nb-cta:hover { color: var(--ink); }
        .nb-cta span { position: relative; z-index: 1; }

        /* Divider between links and CTA */
        .nb-sep {
          width: 1px;
          height: 20px;
          background: var(--border);
          margin: 0 4px;
        }

        /* Hamburger */
        .nb-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .nb-burger { display: flex; }
        }

        .nb-burger-line {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--ink);
          transform-origin: center;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
        }

        .nb-burger.open .nb-burger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .nb-burger.open .nb-burger-line:nth-child(2) {
          opacity: 0; width: 0;
        }
        .nb-burger.open .nb-burger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* Mobile drawer */
        .nb-drawer {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }

        .nb-drawer.open {
          max-height: 480px;
          opacity: 1;
        }

        .nb-drawer-inner {
          padding: 12px 0 24px;
          border-top: 1px solid var(--border);
        }

        .nb-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 24px;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--ink-muted);
          text-decoration: none;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .nb-mobile-link:hover {
          color: var(--ink);
          background: rgba(201,168,76,0.05);
        }

        .nb-mobile-link-arrow {
          font-size: 11px;
          color: var(--gold);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }

        .nb-mobile-link:hover .nb-mobile-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nb-mobile-cta {
          display: block;
          margin: 16px 24px 0;
          padding: 14px 24px;
          background: var(--ink);
          color: var(--gold-light);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nb-mobile-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nb-mobile-cta:hover::before { opacity: 1; }
        .nb-mobile-cta:hover { color: var(--ink); }
        .nb-mobile-cta span { position: relative; z-index: 1; }

        /* Gold top accent line */
        .nb-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .nb-bar.scrolled .nb-topline {
          opacity: 1;
        }
      `}</style>

      <nav className={`nb-root nb-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nb-topline" />

        <div className="nb-inner">

          {/* Logo */}
          <a href="#home" className="nb-logo">
            <div className="nb-logo-wrap">
              <Image
                src={logo}
                alt="SKA Group Logo"
                width={112}
                height={40}
                priority
                className="object-contain w-auto"
                style={{ height: '36px' }}
              />
              <span className="nb-logo-sub">Sidharth Vihar, Ghaziabad</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="nb-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nb-link">
                {link.label}
              </a>
            ))}

            <div className="nb-sep" />

            <a href="#contact" className="nb-cta">
              <span>Enquire Now</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nb-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="nb-burger-line" />
            <span className="nb-burger-line" />
            <span className="nb-burger-line" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`nb-drawer ${isOpen ? 'open' : ''}`}>
          <div className="nb-drawer-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nb-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span className="nb-mobile-link-arrow">-&gt;</span>
              </a>
            ))}
            <a
              href="#contact"
              className="nb-mobile-cta"
              onClick={() => setIsOpen(false)}
            >
              <span>Enquire Now</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}


