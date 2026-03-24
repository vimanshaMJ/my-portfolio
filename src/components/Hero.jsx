import { siteConfig } from '../../data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Available badge */}
        {siteConfig.available && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white text-xs text-stone-500 mb-10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </div>
        )}

        {/* Name */}
        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-stone-900 leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          {siteConfig.name.split(' ')[0]}<br />
          <span className="italic text-stone-400">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Title */}
        <p
          className="text-lg sm:text-xl text-stone-500 font-light max-w-xl mb-4 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {siteConfig.title}
        </p>

        {/* Tagline */}
        <p
          className="text-base text-stone-400 max-w-lg mb-12 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-stone-900 text-stone-50 rounded-full text-sm hover:bg-stone-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-stone-300 text-stone-700 rounded-full text-sm hover:bg-stone-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-6 mt-16 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {siteConfig.social.github && (
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors tracking-wider uppercase">
              GitHub
            </a>
          )}
          {siteConfig.social.linkedin && (
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors tracking-wider uppercase">
              LinkedIn
            </a>
          )}
          {siteConfig.social.twitter && (
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors tracking-wider uppercase">
              Twitter
            </a>
          )}
          <span className="text-xs text-stone-300">·</span>
          <span className="text-xs text-stone-400">{siteConfig.location}</span>
        </div>
      </div>
    </section>
  );
}