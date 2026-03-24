'use client';
import { useEffect } from 'react';
import Navbar     from '../components/Navbar';
import Hero       from '../components/Hero';
import About      from '../components/About';
import Skills     from '../components/Skills';
import Experience from '../components/Experience';
import Projects   from '../components/Projects';
import Blog       from '../components/Blog';
import Contact    from '../components/Contact';
import Footer     from '../components/Footer';
import { hero, about, skills, experience, projects, blog, contact } from '../../data/portfolio';

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero       data={hero} />
        <About      data={about} />
        <Skills     data={skills} />
        <Experience data={experience} />
        <Projects   data={projects} />
        <Blog       data={blog} />
        <Contact    data={contact} />
      </main>
      <Footer name={`${hero.firstName} ${hero.lastName}`} />
    </>
  );
}