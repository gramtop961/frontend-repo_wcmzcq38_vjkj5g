import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Ship beautiful apps, faster.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            A polished starter with Vite, React, Tailwind, and delightful components so you can focus on your product.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-lg">
            {[
              { label: 'Components', value: '12+' },
              { label: 'Perf Score', value: '100' },
              { label: 'Stars', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-wide text-white/60">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
            <div className="relative grid h-full w-full place-items-center p-8">
              <div className="mx-auto max-w-sm text-center">
                <div className="mx-auto h-16 w-16 rounded-full border border-white/10 bg-white/5" />
                <h3 className="mt-4 text-xl font-semibold text-white">Ready to customize</h3>
                <p className="mt-2 text-sm text-white/70">
                  Swap this with your product screenshot, Spline scene, or a background video.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
