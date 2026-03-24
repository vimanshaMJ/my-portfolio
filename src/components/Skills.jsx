'use client';
import { useEffect, useRef } from 'react';

export default function Skills({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.skill-fill').forEach(el => el.classList.add('go'));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="sec-label">02 — Skills</div>
        <h2 className="sec-title">Tech Stack</h2>
        <p className="sec-sub">The tools and technologies I work with daily.</p>

        <div className="skills-grid reveal">
          {data.groups.map(group => (
            <div key={group.label} className="skill-group">
              <div className="skill-group-label">{group.label}</div>

              {group.skills?.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}

              {group.chips && (
                <div className="chips">
                  {group.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}