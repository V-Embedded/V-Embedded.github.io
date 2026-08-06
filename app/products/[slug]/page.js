import Link from 'next/link';

const products = [
  {
    slug: 'educore-kit',
    name: 'EduCore Kit',
    type: 'Microcontroller Kit',
    description: 'A classroom-friendly starter kit designed for embedded programming, sensor experiments, and firmware-first learning.',
    highlights: ['Hands-on labs', 'USB-C programming', 'Beginner-friendly firmware docs'],
  },
  {
    slug: 'sensor-lab-pack',
    name: 'Sensor Lab Pack',
    type: 'Sensor Bundle',
    description: 'A set of environmental and motion sensors paired with a compact driver library for guided experimentation.',
    highlights: ['Temperature and light sensing', 'Motion and proximity modules', 'Project-ready sample code'],
  },
  {
    slug: 'iot-starter-board',
    name: 'IoT Starter Board',
    type: 'Connectivity Board',
    description: 'An accessible wireless learning board for building connected prototypes and teaching cloud concepts.',
    highlights: ['Wireless connectivity', 'Low-power design', 'Simple deployment examples'],
  },
];

function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }) {
  const product = getProduct(params.slug);

  if (!product) {
    return <div className="mx-auto max-w-7xl px-6 py-16 text-info/80">Product not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Link href="/products" className="text-sm font-medium text-accent transition hover:text-success">
        ← Back to products
      </Link>
      <div className="mt-8 rounded-3xl border border-white/10 bg-primary/60 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-success">{product.type}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">{product.name}</h1>
        <p className="mt-4 max-w-2xl text-info/80">{product.description}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {product.highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-info/70">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
