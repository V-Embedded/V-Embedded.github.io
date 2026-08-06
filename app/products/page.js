import Link from 'next/link';

const products = [
  {
    slug: 'educore-kit',
    name: 'EduCore Kit',
    type: 'Microcontroller Kit',
    summary: 'A beginner-friendly package for embedded programming, I/O, and firmware projects.',
  },
  {
    slug: 'sensor-lab-pack',
    name: 'Sensor Lab Pack',
    type: 'Sensor Bundle',
    summary: 'Multiple environmental and motion sensors for interactive project-based lessons.',
  },
  {
    slug: 'iot-starter-board',
    name: 'IoT Starter Board',
    type: 'Connectivity Board',
    summary: 'Compact wireless prototyping hardware for connected device experiments.',
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Products</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Educational hardware for modern makers.</h1>
        <p className="mt-4 max-w-2xl text-info/80">Choose from flexible kits and boards designed for classrooms, lab spaces, and student innovation projects.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="rounded-2xl border border-white/10 bg-primary/60 p-6 shadow-soft">
            <p className="text-sm font-medium text-success">{product.type}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{product.name}</h2>
            <p className="mt-3 text-sm leading-7 text-info/70">{product.summary}</p>
            <Link href={`/products/${product.slug}`} className="mt-4 inline-flex text-sm font-semibold text-accent transition hover:text-success">
              View details →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
