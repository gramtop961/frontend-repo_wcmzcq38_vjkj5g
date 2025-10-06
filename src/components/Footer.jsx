export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Kung Fu Kenny. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Spotify</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
