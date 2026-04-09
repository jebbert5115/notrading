import { useLocation } from "wouter";

export default function Nav() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-red-900/30 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-white font-black text-lg tracking-tight hover:text-red-400 transition-colors duration-200">
          no-trad<span className="text-red-500">.ing</span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location === "/"
                ? "text-red-400"
                : "text-[#888] hover:text-white"
            }`}
          >
            The Rules
          </a>
          <a
            href="/wall-of-shame"
            className={`text-sm font-semibold transition-colors duration-200 ${
              location === "/wall-of-shame"
                ? "text-red-400"
                : "text-[#888] hover:text-white"
            }`}
          >
            Wall of Shame
          </a>
        </div>
      </div>
    </nav>
  );
}
