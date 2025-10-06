import { Play, Pause, Disc3 } from 'lucide-react';
import { useState } from 'react';

const tracks = [
  { id: 1, title: 'Dojo Anthem', length: '3:12' },
  { id: 2, title: 'Crane Style', length: '2:58' },
  { id: 3, title: 'Lotus Flow', length: '3:45' },
  { id: 4, title: 'Tiger Palm', length: '3:05' },
];

export default function Music() {
  const [current, setCurrent] = useState(null);

  return (
    <section id="music" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.12),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Tracks</h2>
            <p className="mt-2 text-white/70">Bangers from the dojo. Turn the volume up.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
            <Disc3 size={16} />
            <span className="text-sm">New EP: Way of the Mic</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tracks.map((t) => {
            const isPlaying = current === t.id;
            return (
              <div key={t.id} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-4">
                <div className="flex items-center gap-4">
                  <button
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    onClick={() => setCurrent(isPlaying ? null : t.id)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-white/90"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <div>
                    <div className="font-semibold text-white">{t.title}</div>
                    <div className="text-xs text-white/50">{t.length}</div>
                  </div>
                </div>
                <div className="text-xs text-white/50">{isPlaying ? 'Playing...' : 'Ready'}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
