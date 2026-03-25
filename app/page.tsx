'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Apartments from '@/components/Apartments';
import Amenities from '@/components/Amenities';
import LocationAdvantage from '@/components/LocationAdvantage';
import GetExclusiveDetails from '@/components/GetExclusiveDetails';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Apartments />
      <Amenities />
      <LocationAdvantage />
      
      <GetExclusiveDetails />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918512010869?text=Hi,%20I%20am%20interested%20in%20SKA%20Group%20Luxury%203%20%26%204%20BHK%20Apartments"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        aria-label="Contact us on WhatsApp"
        className="group fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 blur-md animate-pulse" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.42)] transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2">
          <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.03 7.8L.5 31.5l7.93-2.08A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5Zm0 28.3a13.23 13.23 0 0 1-6.74-1.84l-.48-.29-4.71 1.23 1.26-4.58-.32-.5A13.22 13.22 0 0 1 2.7 16C2.7 9.16 8.16 3.7 16 3.7S29.3 9.16 29.3 16 23.84 28.8 16 28.8Zm7.26-9.9c-.4-.2-2.35-1.16-2.72-1.29-.36-.13-.63-.2-.89.2s-1.02 1.29-1.25 1.55c-.23.27-.46.3-.85.1a10.8 10.8 0 0 1-3.18-1.96 11.9 11.9 0 0 1-2.2-2.74c-.23-.4 0-.61.17-.81.16-.18.4-.46.6-.69.18-.23.24-.4.37-.66.12-.27.06-.5-.03-.7-.1-.2-.89-2.14-1.22-2.93-.32-.77-.65-.66-.89-.67h-.76c-.26 0-.69.1-1.05.5-.36.39-1.38 1.35-1.38 3.29s1.42 3.82 1.62 4.08c.2.27 2.8 4.27 6.77 5.99.95.41 1.69.65 2.26.83.95.3 1.82.26 2.5.16.76-.11 2.35-.96 2.69-1.89.33-.93.33-1.72.23-1.89-.1-.17-.36-.27-.76-.47Z" />
          </svg>
        </span>
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-[#111111] px-3 py-1.5 text-xs font-medium tracking-wide text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-[4.6rem] sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
