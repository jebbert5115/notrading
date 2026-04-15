import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

/**
 * WALL OF SHAME - HOW TO ADD ENTRIES
 *
 * Add a new entry to the offenders array below.
 * Each entry needs:
 *   - id:        unique number (just increment)
 *   - imageUrl:  direct link to the screenshot image (i.imgur.com/XXXX.jpg format)
 *   - date:      date the offense happened (YYYY-MM-DD)
 *
 * Example:
 *   { id: 4, imageUrl: "https://i.imgur.com/abc123.png", date: "2026-04-09" },
 */

const offenders: { id: number; imageUrl: string; date: string }[] = [
  // ← PASTE YOUR ENTRIES HERE
  // imgur link format: https://i.imgur.com/abc123.png
  // { id: 1, imageUrl: "https://your-image-url.png", date: "2026-04-09" },
  { id: 1, imageUrl: "https://i.imgur.com/nc0VRKh.png", date: "2026-04-10" },
  { id: 2, imageUrl: "https://i.imgur.com/Mrailr5.png", date: "2026-04-11" },
  { id: 3, imageUrl: "https://i.imgur.com/LngofEc.png", date: "2026-04-12" },
  { id: 4, imageUrl: "https://i.imgur.com/h0Yo87L.png", date: "2026-04-14" },
  { id: 5, imageUrl: "https://i.imgur.com/ywXjBFD.png", date: "2026-04-14" },
  { id: 6, imageUrl: "https://i.imgur.com/E1FYw7l.png", date: "2026-04-15" },
];

const EMAIL = "submissions@no-trad.ing";

function SubmitModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-lg rustic-card rounded-lg overflow-hidden"
        style={{ border: "1px solid rgba(200,30,30,0.35)", boxShadow: "0 0 60px rgba(180,20,20,0.25), 0 0 0 1px rgba(120,40,30,0.2)" }}
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(120,40,30,0.25)" }}>
          <h2 className="text-lg font-black text-white worn-text tracking-tight">
            Submit a Screenshot
          </h2>
          <button
            onClick={onClose}
            className="text-[#555] hover:text-white transition-colors duration-150 text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5 text-[#bfbfbf] text-sm leading-relaxed">
          <p>
            Witnessed someone asking to trade in the server? Good. Document it.
            Send your screenshot to the really cool guy who runs this site and it will be added to the Wall of Shame.
          </p>

          {/* Email address */}
          <div className="rounded p-4 space-y-2" style={{ background: "rgba(200,30,30,0.07)", border: "1px solid rgba(200,30,30,0.2)" }}>
            <p className="text-xs text-[#666] uppercase tracking-widest font-semibold">Send your submission to</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-black tracking-tight flex-1" style={{ color: "#e01515" }}>
                {EMAIL}
              </span>
              <button
                onClick={copyEmail}
                className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded transition-all duration-150"
                style={{
                  border: "1px solid rgba(200,30,30,0.4)",
                  color: copied ? "#4ade80" : "#e01515",
                  background: copied ? "rgba(74,222,128,0.08)" : "rgba(200,30,30,0.1)",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3">
            <p className="text-xs text-[#555] uppercase tracking-widest font-semibold">Your email should include</p>
            <div className="flex gap-3 items-start">
              <span className="font-black text-xs flex-shrink-0 mt-0.5" style={{ color: "#e01515" }}>01</span>
              <div>
                <p className="text-white font-semibold">A screenshot of the offense</p>
                <p className="text-[#666] text-xs mt-0.5">
                  Attach the image directly to the email, <span className="italic">or</span> paste a publicly
                  accessible link (Imgur, etc.) in the body.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-[#444] text-xs">
            Have a desktop email app?{" "}
            <a
              href="mailto:submissions@no-trad.ing?subject=Trader%20Caught&body=%5BImage%20link%20or%20attachment%5D"
              className="underline transition-colors duration-150"
              style={{ color: "#666" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#aaa"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#666"; }}
            >
              Open in email client
            </a>
          </p>

        </div>
      </motion.div>
    </motion.div>
  );
}

function OffenderCard({ offender, index }: { offender: typeof offenders[0]; index: number }) {
  return (
    <motion.div
      className="break-inside-avoid rustic-card rounded overflow-hidden shame-card"
      style={{ border: "1px solid rgba(120,40,30,0.3)" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={offender.imageUrl}
        alt={`Entry #${offender.id}`}
        className="w-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' fill='%231a1a1a'%3E%3Crect width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui' font-size='14' fill='%23555' text-anchor='middle' dy='.3em'%3EImage not found%3C/text%3E%3C/svg%3E";
        }}
      />
    </motion.div>
  );
}

export default function WallOfShame() {
  const count = offenders.length;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen rustic-bg text-white relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">

        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <motion.h1
            className="text-5xl md:text-6xl font-black leading-none tracking-tight worn-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Wall of{" "}
            <span className="glow-red" style={{ color: "#e01515" }}>Shame</span>
          </motion.h1>

          <motion.button
            onClick={() => setShowModal(true)}
            className="flex-shrink-0 self-start sm:self-auto text-sm font-bold px-4 py-2 rounded transition-all duration-200"
            style={{
              border: "1px solid rgba(200,30,30,0.35)",
              color: "#e01515",
              background: "rgba(200,30,30,0.07)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,30,30,0.18)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,30,30,0.07)";
              (e.currentTarget as HTMLElement).style.color = "#e01515";
            }}
          >
            Submit your own →
          </motion.button>
        </div>

        {/* Animated counter */}
        <motion.div
          className="flex items-baseline gap-3 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-4xl md:text-5xl font-black tabular-nums glow-red" style={{ color: "#e01515" }}>
            <AnimatedCounter target={count} />
          </span>
          <span className="text-xl text-[#888] font-semibold">
            {count === 1 ? "User" : "Users"} Logged
          </span>
        </motion.div>

        <div className="w-16 h-[3px] mb-10" style={{ background: "linear-gradient(90deg, #c81e1e, transparent)" }} />

        {count === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center py-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-6xl mb-6">👀</div>
            <h2 className="text-2xl font-bold text-white mb-3 worn-text">No users yet...</h2>
            <p className="text-[#666] text-lg max-w-md">
              Either everyone has been behaving themselves, or the first screenshot hasn't been
              added yet. We're betting on the latter.
            </p>
          </motion.div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {offenders.map((offender, i) => (
              <OffenderCard key={offender.id} offender={offender} index={i} />
            ))}
          </div>
        )}


      </div>

      {/* Submit modal */}
      <AnimatePresence>
        {showModal && <SubmitModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}
