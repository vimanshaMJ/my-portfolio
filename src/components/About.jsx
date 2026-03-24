import { about, siteConfig } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div>
            <SectionHeading index="01" title="About Me" />
            <p className="text-stone-400 text-sm mt-4 max-w-xs">
              A little about who I am, what I do, and what drives me.
            </p>
          </div>

          {/* Right: bio + resume */}
          <div className="space-y-5">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-stone-600 leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <a
                href={about.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-700 border-b border-stone-300 pb-0.5 hover:border-stone-700 transition-colors"
              >
                Download Resume
                <span className="text-stone-400">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}