const guides = [
  {
    title: 'Getting started with embedded C',
    description: 'A practical introduction to setup, compilation, and hardware communication.',
  },
  {
    title: 'Building your first sensor dashboard',
    description: 'Learn to collect readings, visualize trends, and present data clearly.',
  },
  {
    title: 'Teaching real-time systems in the classroom',
    description: 'Use structured lab activities and simple examples to introduce timing concepts.',
  },
];

export default function TutorialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Tutorials</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Guides that bridge theory and practice.</h1>
        <p className="mt-4 max-w-2xl text-info/80">Find step-by-step lessons, code snippets, and project ideas that make embedded learning approachable.</p>
      </div>
      <div className="space-y-4">
        {guides.map((guide) => (
          <article key={guide.title} className="rounded-2xl border border-white/10 bg-primary/60 p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-white">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-info/70">{guide.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
