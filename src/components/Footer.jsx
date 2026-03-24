import { siteConfig } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-stone-400">
          © {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="text-xs text-stone-400">
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}