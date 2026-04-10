import { useMemo } from "react";

const PARTICLE_COUNT = 28;

export default function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${7 + Math.random() * 10}s`,
      size: `${1 + Math.random() * 2.5}px`,
      opacity: 0.2 + Math.random() * 0.45,
      drift: Math.random() > 0.5 ? 1 : -1,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.opacity > 0.45 ? '#c84020' : '#8a3010',
            opacity: p.opacity,
            animationName: 'ember-float',
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            boxShadow: p.opacity > 0.5 ? '0 0 4px rgba(200,60,20,0.6)' : 'none',
            '--drift': `${p.drift * (15 + Math.random() * 25)}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
