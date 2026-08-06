import Link from 'next/link';
import { getTutorialBySlug, getTutorials } from '../../../lib/content';

export function generateStaticParams() {
  const tutorials = getTutorials();
  return tutorials.map((t) => ({ slug: t.slug }));
}

export default function TutorialPage({ params }) {
  const tutorial = getTutorialBySlug(params.slug);
  if (!tutorial) {
    return <div className="mx-auto max-w-7xl px-6 py-16 text-info/80">Tutorial not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/tutorials" className="text-sm font-medium text-accent transition hover:text-success">
        ← Back to tutorials
      </Link>
      <div className="mt-8 rounded-3xl border border-white/10 bg-primary/60 p-8 shadow-soft prose prose-invert">
        <h1 className="mt-0 text-3xl font-semibold text-white">{tutorial.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: tutorial.html }} />
      </div>
    </div>
  );
}
