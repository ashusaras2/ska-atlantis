import Image from 'next/image';
import logo from '../public/skalogo.webp';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-center">
        <div className="mb-3 flex justify-center">
          <Image
            src={logo}
            alt="SKA Group Logo"
            width={110}
            height={40}
            className="h-9 w-auto object-contain"
          />
        </div>
        <p className="text-[14px] leading-relaxed text-gray-300">
          Disclaimer - Copyright (c) SKA Group 2026.
          <br />
          Luxury 3 & 4 BHK Apartments at Sidharth Vihar, Ghaziabad. Rates will
          open very soon.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-gray-400">
          Disclaimer & Privacy Policy
        </p>
      </div>
    </footer>
  );
}
