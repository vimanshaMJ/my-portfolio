export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-xs text-stone-300 font-mono">{index}</span>
      <h2 className="font-serif text-3xl text-stone-900 italic">{title}</h2>
    </div>
  );
}