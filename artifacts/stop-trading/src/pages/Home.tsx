import arcLines from "/arc-lines.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Arc Lines decoration */}
      <div className="fixed top-0 right-0 w-48 md:w-72 opacity-20 pointer-events-none select-none z-0">
        <img src={arcLines} alt="" className="w-full" />
      </div>
      <div className="fixed bottom-0 left-0 w-48 md:w-72 opacity-10 pointer-events-none select-none z-0 rotate-180">
        <img src={arcLines} alt="" className="w-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <div className="mb-6">
          <div className="inline-block bg-[#ff6b1a] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
            ARC RAIDERS COMMUNITY
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
          You Cannot<br />
          <span style={{ color: '#ff6b1a', textShadow: '0 0 40px rgba(255,107,26,0.4)' }}>
            Trade Here.
          </span>
        </h1>

        <div className="w-16 h-1 bg-[#ff6b1a] mb-10" />

        {/* Main content */}
        <div className="space-y-8 text-[#c8c8c8] text-lg leading-relaxed">

          <p className="text-2xl text-white font-semibold">
            Trading is <span className="text-[#ff6b1a] font-black">not allowed</span> in this server.
            It has never been allowed. It will never be allowed.
          </p>

          <p>
            Congratulations! You have just been sent this link because you asked to trade, begged for free
            items, or committed some other crime against the rules that are{" "}
            <strong className="text-white">clearly written down</strong> and{" "}
            <strong className="text-white">have been there the whole time.</strong>
          </p>

          <div className="border border-[#ff6b1a]/30 bg-[#ff6b1a]/5 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold text-white">Let's address some common excuses:</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#ff6b1a] font-black flex-shrink-0">✗</span>
                <span><strong className="text-white">"I didn't know."</strong> The rules channel exists. It has words in it. Those words specifically say no trading. Incredible.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff6b1a] font-black flex-shrink-0">✗</span>
                <span><strong className="text-white">"But other servers allow it."</strong> Cool. Go there then. This isn't other servers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff6b1a] font-black flex-shrink-0">✗</span>
                <span><strong className="text-white">"Can someone just give me [item] for free?"</strong> No. Work for it. We have guides. They're free. You're welcome.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff6b1a] font-black flex-shrink-0">✗</span>
                <span><strong className="text-white">"I just want to trade one thing."</strong> That's still trading. The word "just" does not unlock secret trading permissions.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
            <h2 className="text-xl font-bold text-white mb-4">What you SHOULD do instead:</h2>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-green-400 font-black flex-shrink-0">✓</span>
                <span><strong className="text-white">Play the game.</strong> ARC Raiders is a game. Items come from playing the game. This is how games work.</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-400 font-black flex-shrink-0">✓</span>
                <span><strong className="text-white">Read guides.</strong> Smart people have written guides so you don't have to suffer alone. Use them.</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-400 font-black flex-shrink-0">✓</span>
                <span><strong className="text-white">Ask for help getting items.</strong> Tips on HOW to get something? Yes. Asking someone to just GIVE you something? Absolutely not.</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-400 font-black flex-shrink-0">✓</span>
                <span><strong className="text-white">Read the rules.</strong> They're right there. They've always been right there. Go read them right now. We'll wait.</span>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#ff6b1a] pl-6">
            <p className="text-white font-semibold text-xl italic">
              "But it's just a game, why do rules matter?"
            </p>
            <p className="mt-2">
              Precisely because it's a game — a game with a community that agreed to certain rules so everyone
              can have a good time. When you ask to trade, you're not just breaking a rule, you're becoming{" "}
              <strong className="text-white">that person.</strong> Don't be that person.
            </p>
          </div>

          <p>
            We genuinely hope you find the items you're looking for through{" "}
            <strong className="text-[#ff6b1a]">actual gameplay</strong>. The grind is the point.
            The victory means nothing if someone handed it to you in a Discord message.
          </p>

          <p className="text-sm text-[#666]">
            If you believe this link was sent to you in error, please consider the possibility
            that it was not sent to you in error.
          </p>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-[#555] text-sm">
            ARC Raiders Community &bull; No Trading. No Exceptions. No Sympathy.
          </p>
          <a
            href="/wall-of-shame"
            className="text-[#ff6b1a] hover:text-white text-sm font-semibold transition-colors duration-200 border border-[#ff6b1a]/30 hover:border-[#ff6b1a] px-4 py-2 rounded"
          >
            View Wall of Shame →
          </a>
        </div>

      </div>
    </div>
  );
}
