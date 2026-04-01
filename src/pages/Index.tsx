import { useState } from "react";
import { CheckCircle, Lock } from "lucide-react";
import logo from "@/assets/logo.png";
import appleIcon from "@/assets/apple-icon.png";

const CTA_URL = "https://linkthem.net/aff_c?offer_id=3932&aff_id=16339";

const questions = [
  {
    heading: "Do you scroll on your phone?",
    answers: ["Yes, daily", "Sometimes", "Rarely"],
  },
  {
    heading: "How many hours a day do you scroll?",
    answers: ["Less than 1 hour", "1–3 hours", "3–5 hours", "5+ hours"],
  },
  {
    heading: "How do you plan to use your reward?",
    answers: ["Keep it", "Give it to a friend"],
  },
];

const AppLogo = () => (
  <div className="flex flex-col items-center mb-6">
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-1 animate-glow-flicker"
      style={{
        border: "1.5px solid rgba(0,230,118,0.5)",
        boxShadow: "0 0 12px rgba(0,230,118,0.3), inset 0 0 8px rgba(0,230,118,0.1)",
        background: "linear-gradient(135deg, #1A1A2E, #2D1B4E)",
      }}>
      <img src={logo} alt="Logo" className="w-full h-full rounded-xl object-contain" />
    </div>
    <div className="w-12 h-3 rounded-full mt-2 blur-lg opacity-60 animate-glow-flicker" style={{ background: "#00E676" }} />
  </div>
);

const ProgressBar = ({ step }: { step: number }) => (
  <div className="w-full mb-4">
    <div className="w-full h-2 rounded-full" style={{ background: "#2A2A2A" }}>
      <div
        className="h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${((step + 1) / 3) * 100}%`, background: "#00E676" }}
      />
    </div>
    <p className="text-xs mt-2 text-center" style={{ color: "#00E676" }}>
      Answer question {step + 1} of 3:
    </p>
  </div>
);

const AnswerButton = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full py-4 px-6 rounded-[14px] text-center transition-all duration-200 border"
    style={{
      background: "#1A1A2E",
      borderColor: "rgba(255,255,255,0.08)",
      color: "#fff",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#00E676";
      e.currentTarget.style.boxShadow = "0 0 20px rgba(0,230,118,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {text}
  </button>
);

const QuizScreen = ({ step, onAnswer }: { step: number; onAnswer: () => void }) => {
  const q = questions[step];
  return (
    <div className="flex flex-col items-center w-full">
      <AppLogo />
      <ProgressBar step={step} />
      <h1 className="text-2xl font-bold text-center mb-8" style={{ color: "#fff" }}>
        {q.heading}
      </h1>
      <div className="flex flex-col gap-3 w-full">
        {q.answers.map((a) => (
          <AnswerButton key={a} text={a} onClick={onAnswer} />
        ))}
      </div>
    </div>
  );
};

const ResultsScreen = () => (
  <div className="flex flex-col items-center w-full">
    <AppLogo />

    <div className="flex items-center gap-3 mb-4">
      <CheckCircle size={40} className="animate-glow-flicker" style={{ color: "#00E676" }} />
      <h1 className="text-3xl font-bold animate-glow-flicker-text" style={{ color: "#fff" }}>You're In!</h1>
    </div>

    <p className="text-center text-sm mb-6" style={{ color: "#aaa" }}>
      Your account is pre-qualified for higher payouts. Download the app to activate full access.
    </p>

    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-4 rounded-[14px] text-center font-bold text-lg flex items-center justify-center gap-2 mb-8 animate-cta-glow"
      style={{ background: "#00E676", color: "#000" }}
    >
      <img src={appleIcon} alt="Apple" className="w-5 h-5 invert" /> DOWNLOAD NOW
    </a>

    {/* Earning Journey Card */}
    <div className="w-full rounded-2xl border p-5 mb-6" style={{ background: "#1A1A2E", borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="text-xs text-center tracking-widest mb-5" style={{ color: "#888" }}>YOUR EARNING JOURNEY</p>
      <div className="flex flex-col gap-5">
        {[
          { n: 1, title: "Download the Freecash App", sub: "Available on iOS & Android – Takes less than 60 seconds" },
          { n: 2, title: "Complete Daily Offers", sub: "Watch Netflix, scroll TikTok, test apps & games, or take surveys!" },
          { n: 3, title: "Cash Out Your Earnings", sub: "Instant Payouts: PayPal, CashApp, Venmo, Crypto & Wire" },
        ].map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
              style={{ background: "rgba(0,230,118,0.15)", color: "#00E676" }}>
              {s.n}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "#fff" }}>{s.title}</p>
              <p className="text-xs mt-0.5" style={{ color: "#888" }}>{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Alert Box */}
    <div className="w-full rounded-2xl border p-4 mb-6 relative" style={{ borderColor: "rgba(239,68,68,0.5)", background: "#1A1A2E" }}>
      <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded"
        style={{ background: "rgba(239,68,68,0.2)", color: "#ef4444" }}>IMPORTANT</span>
      <div className="flex items-center gap-2 mb-2">
        <Lock size={16} style={{ color: "#fff" }} />
        <span className="font-bold text-sm" style={{ color: "#fff" }}>Activation Required</span>
      </div>
      <p className="text-xs" style={{ color: "#aaa" }}>
        New users: Complete <span className="font-bold" style={{ color: "#00E676" }}>2 quick offers</span> to unlock full access and start earning with TikTok videos.
      </p>
    </div>

    <p className="text-xs text-center" style={{ color: "#555" }}>
      Trusted by over 500,000 users earning money daily
    </p>
  </div>
);

const Index = () => {
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);

  const advance = () => {
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{ background: "#0a0a1a" }}>
      {/* Green freckles */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(0,230,118,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 30% 50%, rgba(0,230,118,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 50% 10%, rgba(0,230,118,0.25) 0%, transparent 100%),
          radial-gradient(1px 1px at 70% 70%, rgba(0,230,118,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 30%, rgba(0,230,118,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 15% 80%, rgba(0,230,118,0.15) 0%, transparent 100%),
          radial-gradient(1px 1px at 85% 90%, rgba(0,230,118,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 40% 85%, rgba(0,230,118,0.25) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 40%, rgba(0,230,118,0.15) 0%, transparent 100%),
          radial-gradient(1px 1px at 25% 35%, rgba(0,230,118,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 75% 15%, rgba(0,230,118,0.25) 0%, transparent 100%),
          radial-gradient(1px 1px at 5% 55%, rgba(0,230,118,0.15) 0%, transparent 100%),
          radial-gradient(1px 1px at 95% 60%, rgba(0,230,118,0.2) 0%, transparent 100%),
          radial-gradient(1px 1px at 45% 25%, rgba(0,230,118,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 55% 75%, rgba(0,230,118,0.15) 0%, transparent 100%)`
      }} />
      {/* Subtle green glow behind center */}
      <div className="absolute pointer-events-none" style={{
        width: "300px", height: "300px", top: "50%", left: "50%",
        transform: "translate(-50%, -60%)",
        background: "radial-gradient(circle, rgba(0,80,40,0.08) 0%, transparent 70%)"
      }} />
      <div
        className={`w-full max-w-[400px] transition-all duration-300 ${animating ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0"}`}
      >
        {step < 3 ? <QuizScreen step={step} onAnswer={advance} /> : <ResultsScreen />}
      </div>
    </div>
  );
};

export default Index;
