import Header from './components/Header';
import Hero from './components/Hero';
import Music from './components/Music';
import Tour from './components/Tour';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Music />
        <section id="about" className="bg-black py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Art of Flow</h2>
                <p className="mt-4 text-white/80">
                  Kung Fu Kenny blends razor-sharp lyricism with cinematic soundscapes. A balance of force and finesse,
                  where every bar is a strike—precise, intentional, unforgettable.
                </p>
                <p className="mt-3 text-white/70">
                  This landing page is crafted for music drops, tour dates, and a bold aesthetic that mirrors the
                  discipline of the craft.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">8</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Albums</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">23M+</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Monthly Plays</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">42</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Cities</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Energy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Tour />
      </main>
      <Footer />
    </div>
  );
}

export default App;
