import { Code, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Instant dev server, lightning builds, and zero-config DX built on Vite.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Best practices and sensible defaults to keep your app resilient.',
  },
  {
    icon: Code,
    title: 'Clean Components',
    desc: 'Composable, accessible React components styled with Tailwind.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-white/70">A focused set of features to help you launch high-quality experiences quickly.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.12), transparent 40%)'}} />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
