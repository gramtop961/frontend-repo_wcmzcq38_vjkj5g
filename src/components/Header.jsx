import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">Vibe Starter</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get Started
          </a>
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
