export default function Contact({ data }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="sec-label">06 — Contact</div>
        <h2 className="sec-title">Get in Touch</h2>

        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <p>I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a conversation about AI and engineering. My inbox is always open.</p>
            <div className="contact-links">
              {data.links.map((l, i) => (
                <a key={i} href={l.url} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span>{l.icon}</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}