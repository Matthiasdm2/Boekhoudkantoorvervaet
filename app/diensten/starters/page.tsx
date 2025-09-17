import ServiceHero from "../../../components/ServiceHero";
import FeatureGrid from "../../../components/FeatureGrid";
import Steps from "../../../components/Steps";
import PageCTA from "../../../components/PageCTA";
import Container from "../../../components/Container";
import AnimatedSection from "../../../components/AnimatedSection";

export const metadata = {
  title: "Starters | Boekhoudkantoor Vervaet",
  description: "Van idee tot onderneming: begeleiding bij oprichting, financieel plan en administratieve opstart."
};

export default function Page(){
  return (<>
  <ServiceHero variant="fade" title="Starters" subtitle="Begeleiding van A tot Z: oprichting, financieel plan en vlotte administratieve opstart." />
    <AnimatedSection className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <Container>
        <FeatureGrid items={[
          { icon: "🗂️", title: "Keuze rechtsvorm", desc: "Analyse van risico’s, fiscaliteit en toekomstplannen om de meest geschikte juridische vorm te kiezen met oog op flexibiliteit." },
          { icon: "📄", title: "Financieel plan", desc: "Realistische omzet-, kosten- en cashflowprojecties met scenario’s zodat bank of investeerders vertrouwen krijgen." },
          { icon: "⚙️", title: "Administratieve opstart", desc: "Volledige begeleiding bij BTW‑aanvraag, ondernemingsloket, UBO‑register, bank en formalisaties." },
          { icon: "🔧", title: "Digitale tools", desc: "Selectie en inrichting van boekhoud-, facturatie- en workflowsoftware met efficiënte aanlevering en koppelingen." }
        ]} />
      </Container>
    </AnimatedSection>
    <AnimatedSection className="py-24">
      <Container>
        <Steps items={[
          { title: "Intake & doelen", desc: "We brengen uw plannen en timing helder in kaart." },
          { title: "Plan & structuur", desc: "Concreet stappenplan met mijlpalen en verantwoordelijkheden." },
          { title: "Opstart & opvolging", desc: "We zetten alles op en blijven beschikbaar voor vragen." }
        ]} />
      </Container>
    </AnimatedSection>
    <PageCTA />
  </>);
}
