"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function Vconnect() {
  return (
    <AnimatedSection id="vconnect" className="py-28 bg-slate-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">Vconnect</h2>
          <p className="mt-4 text-slate-600">
            Ons klantenportaal geeft 24/7 toegang tot documenten, rapporten en realtime KPI’s.
            Upload, keur goed en volg uw cijfers vanop afstand.
          </p>
          <a href="/vconnect/wat-is-vconnect" className="mt-8 inline-block btn-primary">Meer info</a>
        </div>
      </Container>
    </AnimatedSection>
  );
}