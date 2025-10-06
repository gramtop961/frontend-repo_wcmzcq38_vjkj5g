import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />

        <section id="about" className="bg-black py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About this starter</h2>
                <p className="mt-4 text-white/70">
                  This template is crafted to help you launch quickly with a clean, modern aesthetic. It includes
                  sensible structure, accessible components, and Tailwind styling so you can focus on building real
                  features.
                </p>
                <ul className="mt-6 space-y-2 text-white/70">
                  <li>• Vite + React + Tailwind setup</li>
                  <li>• Pre-wired responsive layout</li>
                  <li>• Reusable components</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">0-config</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">DX</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">100</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Lighthouse</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">A11y</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Friendly</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">SSR</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="relative overflow-hidden bg-zinc-950 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get started in minutes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Use this as your foundation. Swap content, connect your backend, and deploy. You are ready to build.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-2">
              <code className="rounded-md bg-black/60 px-3 py-2 font-mono text-sm text-white/90">npm run dev</code>
              <span className="text-white/40">or</span>
              <code className="rounded-md bg-black/60 px-3 py-2 font-mono text-sm text-white/90">pnpm dev</code>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
            <p className="mt-3 text-white/70">Have questions or feedback? Send a message below.</p>
            <form className="mt-8 grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
