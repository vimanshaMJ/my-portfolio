import { skills } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div>
            <SectionHeading index="02" title="Skills & Stack" />
            <p className="text-stone-400 text-sm mt-4 max-w-xs">
              Technologies I work with across the full spectrum — model to UI.
            </p>
          </div>

          {/* Right: skill categories */}
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-white border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-800 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}