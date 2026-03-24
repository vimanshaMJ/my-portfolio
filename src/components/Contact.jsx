import { siteConfig } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div>
            <SectionHeading index="06" title="Contact" />
            <p className="text-stone-400 text-sm mt-4 max-w-xs">
              Have a project in mind or just want to connect? My inbox is open.
            </p>
          </div>

          {/* Right: contact content */}
          <div>
            <p className="text-stone-600 text-[15px] leading-relaxed mb-8">
              Whether you're looking for an AI/ML engineer, a full-stack developer, or just want to
              chat about machine learning — I'm always happy to talk. Drop me an email and I'll get
              back to you as soon as I can.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 text-stone-900 text-lg font-medium border-b-2 border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors"
            >
              {siteConfig.email}
              <span className="text-base">→</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-stone-100">
              {siteConfig.social.github && (
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                  LinkedIn
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}