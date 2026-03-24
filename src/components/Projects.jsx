export default function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="sec-label">04 — Projects</div>
        <h2 className="sec-title">What I've Built</h2>
        <p className="sec-sub">A selection of projects spanning AI/ML and full-stack development.</p>

        <div className="projects-grid">
          {data.map((p, i) => (
            <div key={i} className={`project-card reveal ${p.featured ? 'featured' : ''}`}>
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <div className="project-links">
                  {p.github && <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer" title="GitHub">⌥</a>}
                  {p.demo && <a href={p.demo} className="project-link" target="_blank" rel="noopener noreferrer" title="Live Demo">↗</a>}
                </div>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.description}</div>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}