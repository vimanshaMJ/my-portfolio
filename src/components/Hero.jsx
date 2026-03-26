export default function Hero({ data }) {
  return (
  <section className="hero" id="home">
    <div className="hero-bg" />
    <div className="hero-grid" />
    <div className="container hero-content">
      <div className="hero-badge">
        <span className="hero-dot" />
        Open to opportunities
      </div>

      <div className="hero-layout">
        <div>
          <h1 className="hero-name">
            {data.firstName}<br />
            <span className="hero-name-outline accent-gradient">{data.lastName}</span>
          </h1>

          <p className="hero-role">
            <strong>{data.title}</strong> &nbsp;·&nbsp; {data.location}
          </p>
          <p className="hero-desc">{data.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>

          <div className="hero-socials">
            {data.socials.map(s => (
              <a key={s.label} href={s.url} className="hero-social"
                 target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <div className="hero-stats">
            {data.stats.map(s => (
              <div key={s.label} className="stat">
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHOTO ── Replace src with your actual image path */}
        <div className="hero-photo-wrap">
          {data.photo
            ? <img src={data.photo} alt={data.firstName} className="hero-photo" />
            : <div className="hero-photo-placeholder">
                <span>👤</span>
                <span>your photo</span>
              </div>
          }
        </div>
      </div>
    </div>
  </section>
);
}