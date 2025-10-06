const tour = [
  { date: 'May 24, 2025', city: 'Los Angeles, CA', venue: 'The Forum' },
  { date: 'Jun 02, 2025', city: 'New York, NY', venue: 'Madison Square Garden' },
  { date: 'Jun 15, 2025', city: 'Chicago, IL', venue: 'United Center' },
  { date: 'Jun 28, 2025', city: 'Atlanta, GA', venue: 'State Farm Arena' },
];

export default function Tour() {
  return (
    <section id="tour" className="bg-gradient-to-b from-zinc-950 to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">On Tour</h2>
          <p className="mt-3 text-white/70">Catch the live experience. Limited tickets at select venues.</p>
        </div>
        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          {tour.map((s, i) => (
            <div key={s.date} className="grid grid-cols-1 items-center gap-4 p-5 sm:grid-cols-5">
              <div className="col-span-2 text-white/90">{s.date}</div>
              <div className="col-span-2 text-white">{s.city}</div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <span className="text-white/70">{s.venue}</span>
                <a href="#" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90">Tickets</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
