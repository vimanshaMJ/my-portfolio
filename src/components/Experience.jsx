export default function Experience({ data }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="sec-label">03 — Experience</div>
        <h2 className="sec-title">Where I've Worked</h2>
        <p className="sec-sub">My professional journey so far.</p>

        <div className="exp-list">
          {data.map((exp, i) => (
            <div key={i} className="exp-item reveal">
              <div className="exp-date">
                {exp.period}
                {exp.current && <div className="exp-badge">Current</div>}
              </div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-desc">{exp.description}</div>
                <div className="exp-tags">
                  {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}