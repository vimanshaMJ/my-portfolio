'use client';
import { useState, useEffect } from 'react';
import { siteConfig } from '../../data/portfolio';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = siteConfig.name.split(' ').map(n => n[0]).join('');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
    }`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-lg text-stone-900 hover:text-stone-600 transition-colors">
          {initials}<span className="text-stone-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 border border-stone-300 rounded-full text-stone-700 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-stone-600"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-stone-600 hover:text-stone-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" target="_blank" className="text-sm text-stone-600 hover:text-stone-900">
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}