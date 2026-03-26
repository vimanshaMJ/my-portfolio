'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Vi<span>.</span></a>
        <ul className="nav-links">
          {['About','Skills','Experience','Projects','Blog','Contact'].map(s => (
            <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
          ))}
        </ul>
        <a href="/resume.pdf" className="nav-cta" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>
    </nav>
  );
}