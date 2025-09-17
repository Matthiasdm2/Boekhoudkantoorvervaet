"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
const MOCK = process.env.NEXT_PUBLIC_CONTACT_MOCK === '1';

export default function ContactForm() {
  const [form, setForm] = useState({
  name: MOCK ? "Test Gebruiker" : "",
  email: MOCK ? "test@example.com" : "",
  message: MOCK ? "Dit is een voorbeeldbericht om de layout te testen." : ""
  });
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [status, setStatus] = useState<null | { type: "idle" | "loading" | "success" | "error"; msg?: string }>({ type: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      setStatus({ type: "error", msg: "Bevestig dat je geen robot bent." });
      return;
    }
    setStatus({ type: "loading", msg: "Verzenden..." });
    try {
      if (MOCK) {
        await new Promise(r => setTimeout(r, 600));
        setStatus({ type: "success", msg: "(Mock) Bericht gesimuleerd verzonden." });
        return;
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captcha })
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", msg: "Bedankt! Je bericht is verzonden." });
        setForm({ name: "", email: "", message: "" });
        setCaptcha(null);
      } else {
        setStatus({ type: "error", msg: "Er is iets misgegaan. Probeer opnieuw." });
      }
    } catch {
      setStatus({ type: "error", msg: "Er is iets misgegaan. Probeer opnieuw." });
    }
  };

  const disabled = status.type === "loading";

  return (
  <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">Naam</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          disabled={disabled}
          className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition"
          placeholder="Uw naam"
          autoComplete="name"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">E‑mail</label>
        <input
          id="email"
          name="email"
            type="email"
          required
          value={form.email}
          onChange={handleChange}
          disabled={disabled}
          className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition"
          placeholder="naam@bedrijf.be"
          autoComplete="email"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Bericht</label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          disabled={disabled}
          rows={6}
          className="w-full resize-y rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition"
          placeholder="Waarmee kunnen we helpen?"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <button
            type="submit"
            disabled={disabled}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white text-sm font-medium shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {status.type === "loading" && <span className="animate-spin h-4 w-4 border-2 border-white/40 border-t-white rounded-full" />}
            {status.type === "loading" ? "Verzenden..." : "Verstuur bericht"}
          </button>
          <div className="flex flex-col items-center">
            {/* Only render reCAPTCHA if not in mock mode */}
            {!MOCK ? (
              <>
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={token => setCaptcha(token)}
                  theme="light"
                  className="mt-2"
                />
                {!RECAPTCHA_SITE_KEY && (
                  <p className="text-xs text-red-600 mt-2">Geen reCAPTCHA site key gevonden. Voeg <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> toe aan je .env.local bestand.</p>
                )}
              </>
            ) : (
              <span className="text-xs text-gray-500 mt-2">[Mock mode actief: captcha niet vereist]</span>
            )}
          </div>
        </div>
        {status.msg && (() => {
          let color = "text-slate-500";
          if (status.type === "error") color = "text-red-600";
          else if (status.type === "success") color = "text-green-600";
          return (
            <p className={`text-sm ${color}`} role={status.type === "error" ? "alert" : undefined}>
              {status.msg}
            </p>
          );
        })()}
      </div>
    </form>
  );
}
