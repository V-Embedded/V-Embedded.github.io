import Link from 'next/link';

const featuredProducts = [
  {
    title: 'EduCore Kit',
    description: 'A plug-and-play classroom microcontroller bundle with sensors, LEDs, and a guided workbook.',
  },
  {
    title: 'Sensor Lab Pack',
    description: 'Environmental, motion, and light sensors designed for experiential engineering labs.',
  },
  {
    title: 'IoT Starter Board',
    description: 'A compact prototyping board for wireless connectivity and embedded programming lessons.',
  },
];

const tutorials = [
  'Getting started with embedded C',
  'Building your first sensor dashboard',
  'Teaching real-time systems in the classroom',
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:px-8 lg:py-24">
      <section className="grid gap-10 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
            Embedded learning hardware for modern classrooms
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Build real engineering skills with hands-on embedded systems.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            V Embedded LLC designs educational hardware kits, firmware tools, and project guides that help students move from curiosity to confident creation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
              Explore products
            </Link>
            <Link href="/tutorials" className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-700">
              Browse tutorials
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Latest update</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">New classroom-ready kits now shipping</h2>
          <p className="mt-4 text-slate-600">
            Our newest modules combine sensor experimentation, firmware guidance, and easy deployment paths for educators and clubs.
          </p>
          <div className="mt-6 space-y-3">
            {tutorials.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <article key={product.title} className="rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
            <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
            <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
