import React, { useState } from "react";

const steps = [
  {
    title: "Welcome to LLM",
    subtitle: "Your world-class AI gateway — powered by OmniRoute v3.8.48",
    description:
      "One endpoint. 268+ providers. 500+ models. Auto-fallback. RTK + Caveman compression saves up to 95% tokens. Let's set you up in 30 seconds.",
  },
  {
    title: "Connect Your Key",
    subtitle: "Add an API key or use free tiers",
    description:
      "No card needed. Connect Kiro, Qoder, Pollinations, or any OpenAI-compatible key. We'll route you to the cheapest working model automatically.",
  },
  {
    title: "Pick Your Mode",
    subtitle: "Balance speed, quality, and cost",
    description:
      "Auto mode learns your preferences. Choose Coding, Fast, Cheap, or Smart. The wizard configures it instantly.",
  },
  {
    title: "You're Ready",
    subtitle: "Launch your first request",
    description:
      "Dashboard is at localhost:20128. Point any tool at /v1 and start coding. Auto-combo keeps you online 24/7.",
  },
];

export default function StartupWizardPage() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Accessibility: announce step changes
  const [announcement, setAnnouncement] = useState("");

  const next = () => {
    if (current < steps.length - 1) {
      const nextStep = steps[current + 1];
      setCurrent(current + 1);
      setAnnouncement(`Step ${current + 2}: ${nextStep.title}`);
    } else {
      setCompleted(true);
      setAnnouncement("Setup complete. Ready to launch.");
    }
  };

  const prev = () => {
    if (current > 0) {
      const prevStep = steps[current - 1];
      setCurrent(current - 1);
      setAnnouncement(`Step ${current}: ${prevStep.title}`);
    }
  };

  const progress = ((current + 1) / steps.length) * 100;

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] text-white flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/header-llm.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-md text-center p-8 rounded-3xl bg-[#0f172a]/80 backdrop-blur-xl border border-[#f0c14b]/20 shadow-2xl shadow-[#f0c14b]/5">
          <img src="/assets/logo-llm.png" alt="LLM" className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f0c14b] to-[#60a5fa] mb-4 tracking-tight">
            Ready to Launch
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Your LLM gateway is configured. The dashboard is running on{" "}
            <span className="text-[#60a5fa] font-semibold">localhost:20128</span>.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f0c14b] to-[#d4a017] text-[#0b1120] font-black text-lg shadow-lg shadow-[#f0c14b]/20 hover:shadow-[#f0c14b]/40 transition-all hover:-translate-y-0.5"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  const step = steps[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#0b1120] text-white relative overflow-hidden selection:bg-[#f0c14b]/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <img src="/assets/splash-llm.png" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>

      {/* Accessibility: live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0b1120]/80 to-transparent pointer-events-none" />

      {/* Accessibility: skip link */}
      <a
        href="#wizard-main"
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-[#f0c14b] text-[#0b1120] font-black rounded-xl -translate-y-[150%] focus:translate-y-0 transition-transform shadow-lg text-sm"
      >
        Skip to wizard
      </a>

      {/* Header branding */}
      <header className="relative z-10 flex items-center justify-between px-8 pt-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/assets/logo-llm.png" alt="LLM" className="w-10 h-10 rounded-xl shadow-lg shadow-[#60a5fa]/20" />
          <div>
            <h2 className="text-xl font-black tracking-tight leading-none">LLM</h2>
            <span className="text-xs text-slate-400 font-medium tracking-wide">DLinacre • OmniRoute v3.8.48</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f172a]/80 border border-[#f0c14b]/20 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#f0c14b] animate-pulse" />
          <span className="text-xs font-bold text-[#f0c14b] tracking-wider">WORLD-CLASS AI GATEWAY</span>
        </div>
      </header>

      {/* Wizard Card */}
      <main id="wizard-main" className="relative z-10 max-w-2xl mx-auto px-6 pt-12 pb-24">
        <div className="rounded-[2.5rem] bg-[#0f172a]/70 backdrop-blur-2xl border border-white/5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Banner */}
          <div className="h-48 relative overflow-hidden">
            <img src="/assets/header-llm.png" alt="" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/30" />
            <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-1">
                  {step.title}
                </h1>
                <p className="text-[#f0c14b] font-semibold text-sm tracking-wide">{step.subtitle}</p>
              </div>
              <div className="text-6xl font-black text-white/5 leading-none select-none">{String(current + 1).padStart(2, "0")}</div>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 md:px-12 py-8 md:py-10">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">{step.description}</p>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span>Step {current + 1} of {steps.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-2 w-full bg-[#0b1120] rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-[#60a5fa] via-[#f0c14b] to-[#60a5fa] rounded-full transition-all duration-500 ease-out shadow-[0_0_20px_rgba(240,193,75,0.4)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Go back one step"
                aria-disabled={current === 0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft" && current > 0) prev();
                  if (e.key === "ArrowRight" && current < steps.length - 1) next();
                  if (e.key === "Enter" || e.key === " ") next();
                }}
                className="px-6 py-3 rounded-2xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-[#f0c14b]/50 focus:ring-offset-2 focus:ring-offset-[#0b1120]"
              >
                Back
              </button>
              <button
                onClick={next}
                aria-label={current === steps.length - 1 ? "Finish setup and go to dashboard" : "Continue to next step"}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft" && current > 0) prev();
                  if (e.key === "ArrowRight" && current < steps.length - 1) next();
                  if (e.key === "Enter" || e.key === " ") next();
                }}
                className="flex-1 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#60a5fa] to-[#f0c14b] text-[#0b1120] font-black text-base shadow-[0_8px_30px_rgba(240,193,75,0.3)] hover:shadow-[0_8px_40px_rgba(240,193,75,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#f0c14b]/60 focus:ring-offset-2 focus:ring-offset-[#0b1120]"
              >
                {current === steps.length - 1 ? "Finish Setup" : "Continue"}
                <span aria-hidden="true" className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-8 text-slate-500 text-xs tracking-wide">
        <p>Built with ❤️ for the open-source AI community • MIT License</p>
        <p className="mt-1">Forked by DLinacre • OmniRoute v3.8.48 • Android APK</p>
      </footer>
    </div>
  );
}
