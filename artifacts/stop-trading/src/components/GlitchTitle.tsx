import { useEffect, useState } from "react";

export default function GlitchTitle() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function scheduleGlitch() {
      timeoutId = setTimeout(() => {
        setGlitching(true);
        setTimeout(() => {
          setGlitching(false);
          scheduleGlitch();
        }, 600);
      }, 3000 + Math.random() * 5000);
    }

    scheduleGlitch();
    return () => clearTimeout(timeoutId);
  }, []);

  const titleClass = `text-5xl md:text-7xl font-black leading-none tracking-tight`;

  return (
    <div className={`relative mb-6 glitch-container ${glitching ? "is-glitching" : ""}`}>
      {/* Base layer */}
      <h1 className={`${titleClass} worn-text relative z-10`}>
        You Cannot<br />
        <span style={{ color: "#e01515" }}>Trade Here.</span>
      </h1>

      {/* Red chromatic layer */}
      <h1
        className={`${titleClass} absolute inset-0 z-20 pointer-events-none glitch-layer-red`}
        aria-hidden
      >
        You Cannot<br />
        <span style={{ color: "#e01515" }}>Trade Here.</span>
      </h1>

      {/* Cyan chromatic layer */}
      <h1
        className={`${titleClass} absolute inset-0 z-20 pointer-events-none glitch-layer-cyan`}
        aria-hidden
      >
        You Cannot<br />
        <span style={{ color: "#e01515" }}>Trade Here.</span>
      </h1>
    </div>
  );
}
