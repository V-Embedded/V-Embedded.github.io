import Image from 'next/image';
import { Manrope, Outfit } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

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
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#111827_0%,_#222831_100%)]">
          <header className="border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-800">
                <Image src="/assets/images/logo.svg" alt="V Embedded LLC logo" width={56} height={56} className="h-14 w-14 object-contain" priority />
                <span className="text-[1.05rem] sm:text-[1.15rem]">V Embedded LLC</span>
              </Link>
              <nav className="hidden gap-2 text-sm font-medium text-slate-600 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow-[0_0_0_2px_rgba(34,211,238,0.2)]"
                  >
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
