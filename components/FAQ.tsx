"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";
import { useState } from "react";

const faqs = [
  { q: "Werken jullie volledig digitaal?", a: "Ja. Aanlevering van documenten kan 100% digitaal via upload, e‑mail of rechtstreekse factuurstromen (o.a. Vconnect & UBL). Wij voorzien vanuit ons kantoor een eigen portaal dat digitale aanlevering volledig ondersteunt en hierdoor ook PEPPOL-proof is. Persoonlijk overleg plannen we wanneer dat voor u het meeste waarde heeft." },
  { q: "Begeleiden jullie starters?", a: "Zeker. We helpen bij keuze rechtsvorm, financieel plan, inschrijvingen (KBO, btw), opzet tools en eerste rapportering zodat u vlot kunt starten." },
  { q: "Welke tools gebruiken jullie?", a: "We werken met betrouwbare pakketten voor boeking, scan & herken, rapportering en digitale handtekeningen. We adviseren de stack die schaalbaar is voor uw activiteit." },
  { q: "Kan ik tussentijds cijfers krijgen?", a: "Ja. We voorzien periodieke (maand/kwartaal) rapporten en signaleren proactief afwijkingen in marge, cashflow of btw‑positie." },
  { q: "Wat kost jullie dienstverlening?", a: "We werken transparant en bekijken steeds de noden van uw dossier. Afhankelijk van de aanpak en complexiteit kunnen we een gepersonaliseerde offerte opstellen." },
  { q: "Helpen jullie bij fiscale optimalisatie?", a: "Ja. We bekijken structuur, vergoedingen, investeringen, aftrekposten en timing zodat uw fiscale druk correct en geoptimaliseerd blijft binnen de regelgeving." },
  { q: "Hoe snel reageren jullie op vragen?", a: "We maken er een erezaak van om seeds binnen 24 uur te antwoorden. Voor dringende zaken zijn wij uiteraard ook steeds telefonisch bereikbaar." },
  { q: "Kan ik groei en planning bespreken?", a: "Absoluut. Strategische gesprekken rond groei, investeringen, personeel of herstructurering plannen we in aparte sessies met voorbereid cijfermateriaal." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <AnimatedSection className="py-24">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Veelgestelde vragen</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-slate-200 bg-white shadow-soft rounded-2xl">
          {faqs.map((f, idx) => (
            <div key={f.q} className="p-6">
              <button className="w-full text-left flex justify-between items-center" onClick={() => setOpen(open === idx ? null : idx)}>
                <span className="font-semibold">{f.q}</span>
                <span>{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && <p className="mt-3 text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}