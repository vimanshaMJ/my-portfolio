export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} {name}. Built with Next.js.</span>
        <nav className="footer-links">
          <a href="#home">Top</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}