import { blog } from '../../data/portfolio';
import SectionHeading from './ui/SectionHeading';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div>
            <SectionHeading index="05" title="Writing" />
            <p className="text-stone-400 text-sm mt-4 max-w-xs">
              Thoughts on ML, engineering, and building things that work.
            </p>
          </div>

          {/* Right: posts */}
          <div className="space-y-8">
            {blog.map((post, i) => (
              <article key={i} className="group border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 mb-2 text-xs text-stone-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-[15px] font-medium text-stone-800 mb-2 group-hover:text-stone-600 transition-colors leading-snug">
                  {/* Replace href with your actual blog URL or /blog/[slug] route */}
                  <a href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}