import ServiceHero from "../../../components/ServiceHero";
import TrustBar from "../../../components/TrustBar";
import FeatureGrid from "../../../components/FeatureGrid";
import Steps from "../../../components/Steps";
import PageCTA from "../../../components/PageCTA";
import Container from "../../../components/Container";
import AnimatedSection from "../../../components/AnimatedSection";

export const metadata = {
  title: "Boekhouding | Boekhoudkantoor Vervaet",
  description: "Efficiënte verwerking, heldere rapportering en jaarafsluiting."
};

export default function Page() {
  return (
    <>
  <ServiceHero variant="fade" title="Boekhouding" subtitle="Efficiënte verwerking, heldere rapportering en jaarafsluiting." />
      <AnimatedSection className="py-8">
        <TrustBar />
      </AnimatedSection>
      <AnimatedSection className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <Container>
          <FeatureGrid items={[
            {icon: '📘', title: 'Volledige boekhouding', desc: 'Dagelijkse verwerking tot en met jaarafsluiting, inclusief inkoop- en verkoopfacturen, bank, lonen en afschrijvingen – zorgvuldig gecontroleerd en klaar voor een vlotte afsluiting.'},
            {icon: '📑', title: 'BTW & aangiften', desc: 'Tijdig en correct ingediend met proactieve reminders, controle op anomalieën en optimalisatie binnen de wettelijke spelregels.'},
            {icon: '📈', title: 'Tussentijdse rapportering', desc: 'Heldere dashboards per maand of kwartaal met focus op marge, kostenstructuur en cashflow zodat u sneller kunt bijsturen.'}
          ]} />
        </Container>
      </AnimatedSection>
      <AnimatedSection className="py-24">
        <Container>
          <Steps items={[{title: 'Kennismaking', desc: 'We brengen noden en verwachtingen in kaart.'}, {title: 'Overstap & setup', desc: 'Digitale aanlevering, portaal en processen instellen.'}, {title: 'Doorlopende opvolging', desc: 'Proactieve feedback en periodieke rapportering.'}]} />
        </Container>
      </AnimatedSection>
      <PageCTA />
    </>
  );
}
