"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";
import dynamic from "next/dynamic";
const StatsCounts = dynamic(() => import("./StatsCounts"), { ssr: false });

export default function About() {
  return (
    <AnimatedSection id="overons" className="py-28">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary">Over ons</h2>
            <p className="mt-4 text-slate-600">
              Boekhoudkantoor Vervaet is een familiebedrijf met meer dan 30 jaar ervaring. Wij koppelen
              persoonlijke begeleiding aan digitale workflows zodat u altijd up-to-date bent.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Persoonlijk aanspreekpunt</li>
              <li>• Digitale factuurverwerking en dashboards</li>
              <li>• Proactief fiscaal advies</li>
            </ul>
            <div className="mt-8">
              <a
                href="/over-ons"
                className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
              >
                Lees meer over ons
              </a>
            </div>
          </div>
          <div className="relative md:pl-4">
            <div className="rounded-2xl bg-gradient-to-br from-white via-brand-50 to-primary/5 p-6 shadow-soft ring-1 ring-slate-200/60">
              <StatsCounts />
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}