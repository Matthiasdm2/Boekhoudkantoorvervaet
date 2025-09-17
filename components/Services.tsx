"use client";
import AnimatedSection from "./AnimatedSection"; 
import Container from "./Container"; 
import Link from "next/link";

export default function Services(){
  return (
    <AnimatedSection id="diensten" className="py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Onze diensten</h2>
          <p className="mt-3 text-slate-600">Wat we elke dag voor ondernemers betekenen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/diensten/boekhouding" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition h-full">
            <h3 className="text-xl font-semibold text-primary">Boekhouding</h3>
            <p className="mt-2 text-slate-600">Van dagelijkse verwerking tot jaarafsluiting.</p>
          </Link>
          <Link href="/diensten/fiscaliteit" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition h-full">
            <h3 className="text-xl font-semibold text-primary">Fiscaliteit</h3>
            <p className="mt-2 text-slate-600">BTW, personen- en vennootschapsbelasting, optimalisatie.</p>
          </Link>
          <Link href="/diensten/starters" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition h-full">
            <h3 className="text-xl font-semibold text-primary">Advies</h3>
            <p className="mt-2 text-slate-600">Strategisch en financieel advies op maat.</p>
          </Link>
          <Link href="/diensten/starters" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition h-full">
            <h3 className="text-xl font-semibold text-primary">Starters</h3>
            <p className="mt-2 text-slate-600">Begeleiding bij oprichting en groei.</p>
          </Link>
        </div>
      </Container>
    </AnimatedSection>
  );
}
