import { useEffect, useState } from "react";
import GlitchTitle from "@/components/GlitchTitle";
import ScrollReveal from "@/components/ScrollReveal";

function TypewriterIntro() {
  const fullText = "Trading is not allowed in this server. It has never been allowed. It will never be allowed.";
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "styled">("typing");

  useEffect(() => {
    let i = 0;
    const speed = 32;
    const timer = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(timer);
        setTimeout(() => setPhase("styled"), 250);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  if (phase === "styled") {
    return (
      <p className="text-2xl text-white font-semibold worn-text fade-in">
        Trading is{" "}
        <span style={{ color: "#e01515" }} className="font-black pulse-red">
          not allowed
        </span>{" "}
        in this server. It has never been allowed. It will never be allowed.
      </p>
    );
  }

  return (
    <p className="text-2xl text-white font-semibold worn-text">
      {displayed}
      <span className="cursor-blink" style={{ color: "#e01515" }}>|</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen rustic-bg text-white relative">
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-14 md:py-20">

        <GlitchTitle />

        <div className="w-16 h-[3px] mb-10" style={{ background: "linear-gradient(90deg, #c81e1e, transparent)" }} />

        <div className="space-y-8 text-[#bfbfbf] text-lg leading-relaxed">

          <TypewriterIntro />

          <ScrollReveal delay={0}>
            <p>
              Congratulations! You have just been sent this link because you asked to trade, begged for free
              items, or committed some other crime against the rules that are{" "}
              <strong className="text-white">clearly written down</strong> and{" "}
              <strong className="text-white">have been there the whole time.</strong>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rustic-card rounded p-6 space-y-4">
              <h2 className="text-xl font-bold text-white worn-text">Let's address some common excuses:</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "#e01515" }}>✗</span>
                  <span><strong className="text-white">"I didn't know."</strong> The rules channel exists. It has words in it. Those words specifically say no trading. Incredible.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "#e01515" }}>✗</span>
                  <span><strong className="text-white">"But other servers allow it."</strong> Cool. Go there then. This isn't other servers.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "#e01515" }}>✗</span>
                  <span><strong className="text-white">"Can someone just give me [item] for free?"</strong> No. Work for it. We have guides. They're free. You're welcome.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black flex-shrink-0" style={{ color: "#e01515" }}>✗</span>
                  <span><strong className="text-white">"I just want to trade one thing."</strong> That's still trading. The word "just" does not unlock secret trading permissions.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rounded p-6 border border-white/5" style={{ background: "rgba(15,12,10,0.7)" }}>
              <h2 className="text-xl font-bold text-white mb-4 worn-text">What you SHOULD do instead:</h2>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 font-black flex-shrink-0">✓</span>
                  <span><strong className="text-white">Play the game.</strong> ARC Raiders is a game. Items come from playing the game. This is how games work.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 font-black flex-shrink-0">✓</span>
                  <span><strong className="text-white">Read guides.</strong> Smart people have written guides so you don't have to suffer alone. Use them.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 font-black flex-shrink-0">✓</span>
                  <span><strong className="text-white">Ask for help getting items.</strong> Tips on HOW to get something? Yes. Asking someone to just GIVE you something? Absolutely not.</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-green-500 font-black flex-shrink-0">✓</span>
                  <span><strong className="text-white">Read the rules.</strong> They're right there. They've always been right there. Go read them right now. We'll wait.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="pl-6" style={{ borderLeft: "4px solid #c81e1e" }}>
              <p className="text-white font-semibold text-xl italic worn-text">
                "But it's just a game, why do rules matter?"
              </p>
              <p className="mt-2">
                Precisely because it's a game. A game with a community that agreed to certain rules so everyone
                can have a good time. When you ask to trade, you're not just breaking a rule, you're becoming{" "}
                <strong className="text-white">that person.</strong> Don't be that person.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p>
              We genuinely hope you find the items you're looking for through{" "}
              <strong style={{ color: "#e01515" }}>actual gameplay</strong>. The grind is the point.
              The victory means nothing if someone handed it to you in a Discord message.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-sm text-[#555]">
              If you believe this link was sent to you in error, please consider the possibility
              that it was not sent to you in error.
            </p>
          </ScrollReveal>

        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
          style={{ borderTop: "1px solid rgba(120,40,30,0.2)" }}
        >
          <p className="text-[#444] text-sm">
            ARC Raiders Community &bull; No Trading. No Exceptions. No Sympathy.
          </p>
          <a
            href="/wall-of-shame"
            className="text-sm font-semibold transition-colors duration-200 px-4 py-2 rounded"
            style={{ color: "#e01515", border: "1px solid rgba(200,30,30,0.3)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "#c81e1e";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "#e01515";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,30,30,0.3)";
            }}
          >
            View Wall of Shame →
          </a>
        </div>

      </div>
    </div>
  );
}
