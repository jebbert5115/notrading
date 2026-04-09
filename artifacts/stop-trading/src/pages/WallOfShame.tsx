import arcLines from "/arc-lines.png";

/**
 * WALL OF SHAME - HOW TO ADD OFFENDERS
 *
 * Add a new entry to the offenders array below.
 * Each entry needs:
 *   - id:        unique number (just increment)
 *   - imageUrl:  direct link to the screenshot image
 *   - date:      date the offense happened (YYYY-MM-DD)
 *   - note:      (optional) short funny caption
 *
 * Example:
 *   { id: 4, imageUrl: "https://i.imgur.com/abc123.png", date: "2026-04-09", note: "Truly bold strategy" },
 */

const offenders: { id: number; imageUrl: string; date: string; note?: string }[] = [
  // ← PASTE YOUR ENTRIES HERE
  // { id: 1, imageUrl: "https://your-image-url.png", date: "2026-04-09", note: "Optional caption" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function WallOfShame() {
  const count = offenders.length;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Arc Lines decoration */}
      <div className="fixed top-0 right-0 w-48 md:w-72 opacity-20 pointer-events-none select-none z-0">
        <img src={arcLines} alt="" className="w-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#666] hover:text-[#ff6b1a] text-sm mb-10 transition-colors duration-200"
        >
          ← Back to the Rules
        </a>

        {/* Header */}
        <div className="mb-4">
          <div className="inline-block bg-[#ff6b1a] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
            ARC RAIDERS COMMUNITY
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black leading-none mb-4 tracking-tight">
          Wall of{" "}
          <span style={{ color: '#ff6b1a', textShadow: '0 0 40px rgba(255,107,26,0.4)' }}>
            Shame
          </span>
        </h1>

        {/* Live counter */}
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-4xl md:text-5xl font-black tabular-nums" style={{ color: '#ff6b1a' }}>
            {count}
          </span>
          <span className="text-xl text-[#888] font-semibold">
            {count === 1 ? "Offender" : "Offenders"} Logged
          </span>
        </div>

        <div className="w-16 h-1 bg-[#ff6b1a] mb-10" />

        {count === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-6">👀</div>
            <h2 className="text-2xl font-bold text-white mb-3">No offenders yet...</h2>
            <p className="text-[#666] text-lg max-w-md">
              Either everyone has been behaving themselves, or the first screenshot hasn't been
              added yet. We're betting on the latter.
            </p>
            <p className="text-[#444] text-sm mt-4">
              (Check the <code className="bg-[#1a1a1a] px-2 py-0.5 rounded text-[#ff6b1a]">wall-of-shame-photos/</code> folder in the repo to add entries)
            </p>
          </div>
        ) : (
          /* Photo grid */
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {offenders.map((offender) => (
              <div
                key={offender.id}
                className="break-inside-avoid bg-[#161616] border border-[#2a2a2a] rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,26,0.25)] hover:border-[#ff6b1a]/40"
              >
                <img
                  src={offender.imageUrl}
                  alt={`Offender #${offender.id}`}
                  className="w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' fill='%231a1a1a'%3E%3Crect width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui' font-size='14' fill='%23555' text-anchor='middle' dy='.3em'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ff6b1a] font-black text-xs">#{offender.id}</span>
                    {offender.note && (
                      <span className="text-[#888] text-xs italic truncate">{offender.note}</span>
                    )}
                  </div>
                  <span className="text-[#555] text-xs flex-shrink-0">{formatDate(offender.date)}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-[#1f1f1f]">
          <p className="text-[#444] text-sm text-center">
            Every entry on this page is a reminder that the rules were{" "}
            <strong className="text-[#666]">right there.</strong> They were always right there.
          </p>
        </div>

      </div>
    </div>
  );
}
