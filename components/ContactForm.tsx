
// ...verwijderd: oude server-side implementatie...
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/myzdqaog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, message: form.message, _gotcha: form._gotcha })
      });
      if (res.ok) {
        setStatus("success");
  setForm({ name: "", email: "", phone: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary transition"
          placeholder="Uw naam"
          autoComplete="name"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefoonnummer</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary transition"
          placeholder="bv. 0470 12 34 56"
          autoComplete="tel"
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
          className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary transition"
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
          rows={6}
          className="w-full resize-y rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-primary transition"
          placeholder="Waarmee kunnen we helpen?"
        />
      </div>
      {/* Honeypot veld voor spamfilter (optioneel) */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={handleChange} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white text-sm font-medium shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
      >
        {status === "loading" ? "Verzenden..." : "Verstuur bericht"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-4">Bedankt voor uw bericht, wij nemen spoedig contact met u op.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-4">Er is iets misgegaan. Probeer opnieuw.</p>
      )}
    </form>
  );
}
