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
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-success/30 bg-success/10 px-3 py-1 text-sm font-medium text-success">
            Embedded learning hardware for modern classrooms
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build real engineering skills with hands-on embedded systems.
          </h1>
          <p className="max-w-2xl text-lg text-info/80">
            V Embedded LLC designs educational hardware kits, firmware tools, and project guides that help students move from curiosity to confident creation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="rounded-full bg-success px-5 py-3 font-semibold text-primary transition hover:brightness-95">
              Explore products
            </Link>
            <Link href="/tutorials" className="rounded-full border border-info/20 px-5 py-3 font-semibold text-info transition hover:border-success hover:text-success">
              Browse tutorials
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-primary/70 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Latest update</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">New classroom-ready kits now shipping</h2>
          <p className="mt-4 text-info/80">
            Our newest modules combine sensor experimentation, firmware guidance, and easy deployment paths for educators and clubs.
          </p>
          <div className="mt-6 space-y-3">
            {tutorials.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-info/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <article key={product.title} className="rounded-2xl border border-white/10 bg-primary/60 p-6 shadow-soft">
            <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-accent to-violet" />
            <h3 className="text-xl font-semibold text-white">{product.title}</h3>
            <p className="mt-3 text-sm leading-7 text-info/70">{product.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
