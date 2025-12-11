"use client";

import React, { useState } from 'react';
import WhyBitcoin from '../components/WhyBitcoin/WhyBitcoin';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Bitcoin', href: '#why-bitcoin' },
    { label: 'Login', href: '#' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      {/* Navbar */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-transparent">
        <div className="flex items-center">
          {/* Logo updated to buttons folder */}
          <img src="/buttons/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Hamburger Menu - Top Far Right (Visible on all screens) */}
        <button
          className="flex flex-col gap-1.5 cursor-pointer p-2 z-[1002] absolute right-6 top-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 rounded-full transition-all ${isMenuOpen ? 'bg-white rotate-45 translate-y-2' : 'bg-[#059669]'}`}></div>
          <div className={`w-6 h-0.5 rounded-full transition-all ${isMenuOpen ? 'bg-white opacity-0' : 'bg-[#059669]'}`}></div>
          <div className={`w-6 h-0.5 rounded-full transition-all ${isMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : 'bg-[#059669]'}`}></div>
        </button>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Drawer */}
        <div
          className={`fixed top-0 right-0 w-[240px] bg-[#059669] z-[1001] shadow-2xl transform transition-transform duration-300 ease-in-out rounded-bl-3xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ height: 'max-content', maxHeight: '100vh', borderBottomLeftRadius: '24px' }}
        >

          {/* Close Button or Spacer */}
          <div className="flex justify-end mb-4 h-12">
            {/* Space for the hamburger (absolute positioned) to overlay without blocking content if needed, 
                but hamburger is absolute z-1002 so it sits on top..
                We just need padding for the list. */}
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-2 pt-2 pb-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-lg font-medium py-3 px-4 rounded-xl hover:bg-[#047857] transition-all hover:pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Why Bitcoin Section */}
      <WhyBitcoin />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}

