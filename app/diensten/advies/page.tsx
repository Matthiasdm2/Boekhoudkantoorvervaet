import ServiceHero from "../../../components/ServiceHero";
import TrustBar from "../../../components/TrustBar";
import FeatureGrid from "../../../components/FeatureGrid";
import Steps from "../../../components/Steps";
import PageCTA from "../../../components/PageCTA";
import Container from "../../../components/Container";
import AnimatedSection from "../../../components/AnimatedSection";

export const metadata = {
  title: "Advies & Starters | Boekhoudkantoor Vervaet",
  description: "Van oprichting tot groei: concreet advies met focus op resultaat."
};

export default function Page() {
  return (
    <>
  <ServiceHero variant="fade" title="Advies & Starters" subtitle="Van oprichting tot groei: concreet advies met focus op resultaat." />
      <AnimatedSection className="py-8">
        <TrustBar />
      </AnimatedSection>
      <AnimatedSection className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <Container>
          <FeatureGrid items={[
            {icon: '🚀', title: 'Startersbegeleiding', desc: 'Van keuze rechtsvorm tot financieel plan, inclusief inschrijvingen, administratieve verplichtingen en eerste KPI-inzichten om gezond te starten.'},
            {icon: '🤝', title: 'Sparring & strategie', desc: 'Kritische spiegel op prijszetting, marge, kosten en groei – met actiegerichte verbeterpunten en opvolging.'},
            {icon: '🔗', title: 'Digitale tools', desc: 'Selectie, implementatie en koppelingen van boekhoud- en operationele software voor een geïntegreerde workflow.'}
          ]} />
        </Container>
      </AnimatedSection>
      <AnimatedSection className="py-24">
        <Container>
          <Steps items={[{title: 'Doelen scherpstellen', desc: 'We bepalen samen de prioriteiten.'}, {title: 'Roadmap', desc: 'Heldere milestones en verantwoordelijkheden.'}, {title: 'Begeleiding', desc: 'Regelmatige check-ins en bijsturing.'}]} />
        </Container>
      </AnimatedSection>
      <PageCTA />
    </>
  );
}
