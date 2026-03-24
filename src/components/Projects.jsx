import { projects } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const others   = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <SectionHeading index="04" title="Projects" />
            <p className="text-stone-400 text-sm mt-2">
              Things I've built — ML systems, full-stack apps, and everything in between.
            </p>
          </div>
          {others.length > 0 && (
            <a
              href="https://github.com/alexperera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-stone-700 hidden md:block transition-colors"
            >
              All projects on GitHub →
            </a>
          )}
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white border border-stone-200 rounded-2xl p-6 hover:border-stone-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Title + links */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-medium text-stone-900 group-hover:text-stone-700">
                  {project.title}
                </h3>
                <div className="flex gap-3 ml-2 shrink-0">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="border-t border-stone-100 pt-8 space-y-4">
            {others.map((project, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-stone-100 group">
                <div className="flex items-center gap-6">
                  <h3 className="text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors">
                    {project.title}
                  </h3>
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 shrink-0">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-stone-700">GitHub</a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-stone-700">Live ↗</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}