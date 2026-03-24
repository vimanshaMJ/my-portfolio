export default function Blog({ data }) {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="sec-label">05 — Writing</div>
        <h2 className="sec-title">Blog & Articles</h2>
        <p className="sec-sub">Thoughts on AI, engineering, and building things.</p>

        <div className="blog-grid">
          {data.map((post, i) => (
            <div key={i} className="blog-card reveal">
              <div className="blog-date">{post.date}</div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-desc">{post.excerpt}</div>
              <a href={post.url || '#'} className="blog-read">Read article →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}