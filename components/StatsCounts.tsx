"use client";
import CountUp from "./CountUp";

export default function StatsCounts() {
  const stats = [
    { end: 30, suffix: "+", label: "Jaar ervaring" },
    { end: 500, suffix: "+", label: "Dossiers begeleid" },
    { end: 100, suffix: "%", label: "Digitale factuurflow" },
    { end: 1, suffix: "", label: "Vast aanspreekpunt" }
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 md:gap-6">
      {stats.map(s => (
        <div key={s.label} className="rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-200 shadow-sm px-5 py-6 flex flex-col">
          <div className="text-3xl font-bold text-primary tracking-tight"><CountUp end={s.end} suffix={s.suffix} /></div>
          <div className="mt-1 text-[11px] uppercase tracking-wide font-medium text-primary/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
