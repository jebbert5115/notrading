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
  { id: 1, imageUrl: "https://cdn.discordapp.com/attachments/994366078702604390/1491934710643818496/image.png?ex=69d97ff9&is=69d82e79&hm=3752800210862990ce579984a4f62f972f98edcc1ad14dc596568184d666ce9f&", date: "2026-04-09", note: "Bro ought to read the rules." },
  { id: 2, imageUrl: "https://cdn.discordapp.com/attachments/994366078702604390/1491935211892637756/image.png?ex=69d98071&is=69d82ef1&hm=db01416ec9b0555cdbe54e2c4bbe63429f751b2704e99f669e1f2bff3f5328a6&", date: "2026-04-09", note: "Bro ought to read the rules." },

];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function WallOfShame() {
  const count = offenders.length;

  return (
    <div className="min-h-screen rustic-bg text-white relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">

        <h1 className="text-5xl md:text-6xl font-black leading-none mb-4 tracking-tight worn-text">
          Wall of{" "}
          <span className="glow-red" style={{ color: '#e01515' }}>
            Shame
          </span>
        </h1>

        {/* Live counter */}
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-4xl md:text-5xl font-black tabular-nums glow-red" style={{ color: '#e01515' }}>
            {count}
          </span>
          <span className="text-xl text-[#888] font-semibold">
            {count === 1 ? "Offender" : "Offenders"} Logged
          </span>
        </div>

        <div className="w-16 h-[3px] mb-10" style={{ background: 'linear-gradient(90deg, #c81e1e, transparent)' }} />

        {count === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-6">👀</div>
            <h2 className="text-2xl font-bold text-white mb-3 worn-text">No offenders yet...</h2>
            <p className="text-[#666] text-lg max-w-md">
              Either everyone has been behaving themselves, or the first screenshot hasn't been
              added yet. We're betting on the latter.
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {offenders.map((offender) => (
              <div
                key={offender.id}
                className="break-inside-avoid rustic-card rounded overflow-hidden shame-card"
                style={{ border: '1px solid rgba(120,40,30,0.3)' }}
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
                    <span className="font-black text-xs" style={{ color: '#e01515' }}>#{offender.id}</span>
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

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(120,40,30,0.2)' }}>
          <p className="text-[#444] text-sm text-center">
            Every entry on this page is a reminder that the rules were{" "}
            <strong className="text-[#666]">right there.</strong> They were always right there.
          </p>
        </div>

      </div>
    </div>
  );
}
