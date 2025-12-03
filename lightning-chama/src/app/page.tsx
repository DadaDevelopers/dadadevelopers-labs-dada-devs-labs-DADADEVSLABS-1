"use client";

import React, { useState } from 'react';

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
    <div style={styles.container}>
      {/* Navbar - WHITE background */}
      <nav style={styles.navbar}>
        {/* Logo only - no text */}
        <div style={styles.logo}>
          <img 
            src="/images/logo.svg" 
            alt="Charmavolt Logo"
            style={styles.logoImage}
          />
        </div>

        {/* Hamburger Menu */}
        <div 
          style={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={styles.line}></div>
          <div style={styles.line}></div>
          <div style={styles.line}></div>
        </div>

        {/* Dropdown Menu - GREEN with white text */}
        {isMenuOpen && (
          <div style={styles.dropdownMenu}>
            {/* X Button at top right */}
            <button 
              style={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>

            {/* Menu Items */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={styles.dropdownLink}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          {/* FIXED HEADLINE FORMATTING - No div inside p */}
          <div style={styles.headline}>
            <div style={styles.headlineLine1}>Empowering Chamas to Save</div>
            <div style={styles.headlineLine2}>Grow & Thrive</div>
          </div>

          {/* FIXED SUBTITLE FORMATTING - Using div instead of p with divs inside */}
          <div style={styles.subtitle}>
            <div style={styles.subtitleLine1}>Manage contributions, track savings,</div>
            <div style={styles.subtitleLine2}>and build financial growth together</div>
          </div>

          <div style={styles.buttons}>
            <div style={styles.buttonRow}>
              <button 
                style={styles.signUpButton}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              >
                Sign Up
              </button>
              
              <button 
                style={styles.loginButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#059669';
                }}
              >
                Login
              </button>
            </div>
            
            <button 
              style={styles.bitcoinButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7931A';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFF7ED';
                e.currentTarget.style.color = '#F7931A';
              }}
            >
              Learn About Bitcoin
            </button>
          </div>
        </div>
      </section>

      {/* Rest of page content would go here */}
      <div style={styles.restOfPage}>
        <p style={{ textAlign: 'center', color: '#6B7280', padding: '40px' }}>
          How It Works section and other content will go below...
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  navbar: {
    backgroundColor: 'white',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid #e5e7eb',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
  line: {
    width: '24px',
    height: '2px',
    backgroundColor: '#374151',
    borderRadius: '1px',
  },
  dropdownMenu: {
    position: 'absolute' as const,
    top: '70px',
    right: '24px',
    backgroundColor: '#059669',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(5, 150, 105, 0.3)',
    padding: '16px',
    minWidth: '200px',
    zIndex: 1001,
    border: 'none',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '8px',
    right: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '4px',
    lineHeight: '1',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  dropdownLink: {
    display: 'block',
    padding: '12px 16px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    marginBottom: '4px',
    backgroundColor: '#059669',
  },
  heroSection: {
    padding: '140px 20px 80px',
    textAlign: 'center' as const,
    background: 'linear-gradient(to right, #F6E9C5 0%, #F6E9C5 30%, #5CB79A 70%, #5CB79A 100%)',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headline: {
    marginBottom: '24px',
  },
  headlineLine1: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: '1.1',
    color: '#111827',
    marginBottom: '8px',
  },
  headlineLine2: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: '1.1',
    color: '#111827',
  },
  subtitle: {
    marginBottom: '48px',
  },
  subtitleLine1: {
    fontSize: '20px',
    color: '#6B7280',
    lineHeight: '1.6',
  },
  subtitleLine2: {
    fontSize: '20px',
    color: '#6B7280',
    lineHeight: '1.6',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  signUpButton: {
    padding: '16px 40px',
    backgroundColor: '#059669',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)',
  },
  loginButton: {
    padding: '16px 40px',
    backgroundColor: 'transparent',
    color: '#059669',
    border: '2px solid #059669',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  bitcoinButton: {
    padding: '16px 40px',
    backgroundColor: '#FFF7ED',
    color: '#F7931A',
    border: '2px solid #F7931A',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  restOfPage: {
    minHeight: '50vh',
    backgroundColor: 'white',
  },
};
