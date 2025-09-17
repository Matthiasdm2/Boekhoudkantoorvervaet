"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

type ServiceHeroVariant = "subtle" | "solid" | "split" | "fade";
type Align = "center" | "left";

export default function ServiceHero({
  title,
  subtitle,
  variant = "subtle",
  align = "center"
}: {
  readonly title: string;
  readonly subtitle?: string;
  readonly variant?: ServiceHeroVariant;
  readonly align?: Align;
}) {
  const isCenter = align === "center";

  if (variant === "split") {
    return (
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-tr from-primary-dark via-primary to-primary-light text-white">
        <Container>
          <div className="relative grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
            <div className={isCenter ? "text-center md:text-left" : "text-left"}>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-5 text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">{subtitle}</p>}
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl ring-1 ring-white/15" />
              <div className="relative h-64 grid place-items-center text-white/70 text-sm px-6">
                <span>Ruimte voor illustratie / grafiek</span>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    );
  }

  if (variant === "solid") {
    return (
      <AnimatedSection className="relative overflow-hidden bg-primary text-white">
        <Container>
          <div className={`relative py-16 md:py-24 ${isCenter ? "text-center" : "text-left"}`}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
            {subtitle && <p className={`mt-5 text-white/90 text-lg md:text-xl leading-relaxed ${isCenter ? "mx-auto" : ""} max-w-3xl`}>{subtitle}</p>}
          </div>
        </Container>
      </AnimatedSection>
    );
  }

  if (variant === "fade") {
    return (
      <AnimatedSection className="relative overflow-hidden bg-hero-radial">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-300 opacity-30 blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-200 opacity-40 blur-3xl animate-float" style={{animationDelay:"1s"}} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
        </div>
        <Container>
          <div className={`relative py-16 md:py-24 ${isCenter ? "text-center" : "text-left"}`}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">{title}</h1>
            {subtitle && <p className={`mt-6 text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl ${isCenter ? "mx-auto" : ""}`}>{subtitle}</p>}
          </div>
        </Container>
      </AnimatedSection>
    );
  }

  // subtle (default)
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Subtle blauwe fade / halo vergelijkbaar met homepage Hero */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-brand-300/25 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-brand-200/30 blur-3xl animate-float" style={{animationDelay:"1s"}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
      </div>
      <Container>
        <div className={`py-12 md:py-20 relative ${isCenter ? "text-center" : "text-left"}`}>
          <div className={`max-w-4xl ${isCenter ? "mx-auto" : ""} bg-white shadow-elevate ring-1 ring-slate-200/70 dark:ring-white/10 px-8 md:px-12 py-12 rounded-3xl relative overflow-hidden`}> 
            <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark" />
            <div className="relative">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">{title}</h1>
              {subtitle && <p className={`mt-6 text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl ${isCenter ? "mx-auto" : ""}`}>{subtitle}</p>}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
