export default function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="sec-label">01 — About</div>
        <h2 className="sec-title">Who I Am</h2>
        <p className="sec-sub">A little about me, what I do, and what drives me.</p>

        <div className="about-grid">
          <div className="about-text reveal">
            {data.bio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
            <div className="about-tags">
              {data.interests.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="about-card reveal">
            {data.highlights.map((h, i) => (
              <div key={i} className="about-item">
                <div className="about-icon">{h.icon}</div>
                <div>
                  <div className="about-item-title">{h.title}</div>
                  <div className="about-item-sub">{h.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}