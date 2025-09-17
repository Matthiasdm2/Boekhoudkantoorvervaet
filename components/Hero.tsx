"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";
import Image from "next/image";
import dynamic from "next/dynamic";
const StatsCounts = dynamic(() => import("./StatsCounts"), { ssr: false });
interface HeroProps {
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly showStats?: boolean;
}

export default function Hero({ imageSrc, imageAlt, showStats }: HeroProps) {
  return (
    <AnimatedSection className="relative flex items-center bg-hero-radial overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-300 opacity-30 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-200 opacity-40 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <Container>
        <div className={`grid gap-14 items-center ${imageSrc || showStats ? "md:grid-cols-2" : ""}`}>
          <div className={imageSrc || showStats ? "text-left" : "text-center"}>
            <span className="badge">Boekhoudkantoor Vervaet</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-primary leading-tight">Uw cijfers, onze zorg</h1>
            <p className={`mt-6 text-lg md:text-xl text-slate-600 max-w-xl`}>
              Persoonlijk. Digitaal. Toekomstgericht. Financiële rust dankzij inzicht en efficiëntie.
            </p>
            <div className={`mt-10 flex gap-4 flex-wrap ${imageSrc || showStats ? "" : "justify-center"}`}>
              <a href="#contact" className="btn-primary">Afspraak maken</a>
              <a href="#diensten" className="inline-flex items-center rounded-full px-6 py-3 font-semibold border border-primary/30 text-primary hover:border-primary">Onze diensten</a>
            </div>
          </div>
          {imageSrc ? (
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-white to-primary/5 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition" />
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200/60 shadow-elevate bg-white">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Teamfoto"}
                  width={900}
                  height={700}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ) : showStats ? (
            <div className="md:pt-4"><StatsCounts /></div>
          ) : null}
        </div>
      </Container>
    </AnimatedSection>
  );
}