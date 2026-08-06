import Image from 'next/image';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'V Embedded LLC',
  description: 'Embedded hardware and learning platforms for education and innovation.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/tutorials', label: 'Tutorials' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#111827_0%,_#222831_100%)]">
          <header className="border-b border-white/10 bg-primary/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-info">
                <Image src="/assets/images/logo.svg" alt="V Embedded LLC logo" width={40} height={40} className="rounded-full bg-info/90 p-1" priority />
                <span>V Embedded LLC</span>
              </Link>
              <nav className="hidden gap-6 text-sm font-medium text-info/80 md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-success">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-white/10 bg-primary/70">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-info/70 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <p>© 2026 V Embedded LLC. Building hands-on embedded learning tools.</p>
              <p>info@vembedded.com</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
