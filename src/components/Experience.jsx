import { experience } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div>
            <SectionHeading index="03" title="Experience" />
            <p className="text-stone-400 text-sm mt-4 max-w-xs">
              Where I've worked and what I've built along the way.
            </p>
          </div>

          {/* Right: timeline */}
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-6 border-l border-stone-200">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-stone-300 border-2 border-stone-50" />

                {/* Period + type */}
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-stone-400">{job.period}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
                    {job.type}
                  </span>
                </div>

                {/* Role & company */}
                <h3 className="text-base font-medium text-stone-900">{job.role}</h3>
                <p className="text-sm text-stone-500 mb-4">
                  {job.company} · {job.location}
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-stone-500 leading-relaxed flex gap-3">
                      <span className="text-stone-300 mt-1 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}