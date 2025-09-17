import ServiceHero from "../../../components/ServiceHero";
import TrustBar from "../../../components/TrustBar";
import FeatureGrid from "../../../components/FeatureGrid";
import Steps from "../../../components/Steps";
import PageCTA from "../../../components/PageCTA";
import Container from "../../../components/Container";
import AnimatedSection from "../../../components/AnimatedSection";

export const metadata = {
  title: "Fiscaliteit | Boekhoudkantoor Vervaet",
  description: "Proactieve optimalisatie van btw, personen- en vennootschapsbelasting."
};

export default function Page() {
  return (
    <>
  <ServiceHero variant="fade" title="Fiscaliteit" subtitle="Proactieve optimalisatie van btw, personen- en vennootschapsbelasting." />
      <AnimatedSection className="py-8">
        <TrustBar />
      </AnimatedSection>
      <AnimatedSection className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <Container>
          <FeatureGrid items={[
            {icon: '💼', title: 'Vennootschaps- & personenbelasting', desc: 'Optimalisatie binnen het wettelijk kader met aandacht voor remuneratie, investeringen, vergoedingen en aftrekposten – altijd goed onderbouwd.'},
            {icon: '🧾', title: 'BTW-advies', desc: 'Structuur en vrijstellingen correct uitgewerkt: juiste roosters, intracommunautaire stromen, herzieningen en controles om verrassingen te vermijden.'},
            {icon: '🧭', title: 'Planning & rulings', desc: 'Scenario’s en voorafgaande beslissingen (rulings) voor voorspelbaarheid, minder risico en duidelijke juridische onderbouw.'}
          ]} />
        </Container>
      </AnimatedSection>
      <AnimatedSection className="py-24">
        <Container>
          <Steps items={[{title: 'Analyse', desc: 'We analyseren de huidige structuur en risico’s.'}, {title: 'Advies', desc: 'Concreet plan met scenario’s en impact.'}, {title: 'Implementatie', desc: 'Uitwerken, documenteren en opvolgen.'}]} />
        </Container>
      </AnimatedSection>
      <PageCTA />
    </>
  );
}
