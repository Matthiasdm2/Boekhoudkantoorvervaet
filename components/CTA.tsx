"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function CTA() {
  return (
    <AnimatedSection className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-12 bg-gradient-to-r from-brand-500 to-primary text-white shadow-elevate">
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(110deg,rgba(255,255,255,.15)_25%,transparent_25%),linear-gradient(110deg,transparent_55%,rgba(255,255,255,.12)_55%)] bg-[length:200%_100%] animate-shimmer"></div>
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold">Klaar voor financiële rust?</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Plan vandaag nog een kennismaking en ontdek samen met ons hoe we uw boekhouding efficiënter kunnen maken.</p>
            <a href="/afspraak" className="mt-6 inline-flex btn-primary">Plan een gesprek</a>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}