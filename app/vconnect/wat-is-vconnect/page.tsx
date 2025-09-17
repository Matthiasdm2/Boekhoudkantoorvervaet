import Container from "../../../components/Container";
import FeatureGrid from "../../../components/FeatureGrid";
import Steps from "../../../components/Steps";
import PageCTA from "../../../components/PageCTA";
import AnimatedSection from "../../../components/AnimatedSection";
import ServiceHero from "../../../components/ServiceHero";

export const metadata = {
  title: "Wat is Vconnect | Boekhoudkantoor Vervaet",
  description: "Vconnect: digitaal klantenportaal voor realtime inzicht, efficiënte samenwerking en veilige documentuitwisseling."
};

export default function WatIsVconnect() {
  return (
    <div className="pb-20">
      <ServiceHero
        title="Vconnect"
        subtitle="Eén digitaal portaal dat u en ons kantoor dichter bij elkaar brengt: documenten delen, cijfers opvolgen en sneller schakelen – waar u ook bent."
        variant="fade"
        align="left"
      />
      <div className="-mt-8 mb-12">
        <Container>
          <div className="flex gap-4 flex-wrap">
            <a href="/#contact" className="btn-primary">Vraag een demo</a>
            <a href="/vconnect/login" className="inline-flex items-center font-medium text-primary hover:underline">Login →</a>
          </div>
        </Container>
      </div>

      {/* USP grid */}
      <FeatureGrid
        title="Waarom Vconnect?"
        items={[
          { icon: "⚡", title: "Snellere samenwerking", desc: "Realtime uitwisseling zonder e-mail gedoe." },
          { icon: "📊", title: "Inzicht & KPI's", desc: "Actuele cijfers en rapporten binnen handbereik." },
          { icon: "🔐", title: "Veilig & betrouwbaar", desc: "Beschermde omgeving voor gevoelige documenten." },
          { icon: "🧾", title: "Altijd up-to-date", desc: "Uw documenten netjes gecentraliseerd." },
          { icon: "📤", title: "Makkelijk uploaden", desc: "Sleep bestanden of scan mobiel en klaar." },
          { icon: "🌐", title: "PEPPOL e-facturatie", desc: "Voorbereid op verplicht e-invoicing: gestandaardiseerde, foutloze uitwisseling." }
        ]}
      />

      {/* Workflow */}
      <Steps
        title="Hoe werkt het?"
        items={[
          { title: "Activatie", desc: "We bezorgen u een veilige uitnodiging voor toegang." },
          { title: "Gebruik", desc: "Upload documenten, bekijk rapporten en volg taken op." },
            { title: "Inzicht", desc: "Periodieke rapportering en KPI's geven grip op groei." }
        ]}
      />

      {/* PEPPOL sectie */}
      <AnimatedSection className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">PEPPOL & e-facturatie</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              De komende jaren wordt elektronische facturatie via gestandaardiseerde netwerken zoals PEPPOL de norm in België en de EU. Dit versnelt verwerking, vermindert fouten en zorgt voor betere compliance met fiscale rapporteringskaders.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { t: "Interoperabiliteit", d: "Facturen uitwisselen met overheden én andere bedrijven zonder extra mapping." },
                { t: "Snellere verwerking", d: "Automatische verwerking vermindert manueel werk en vertraging." },
                { t: "Compliance", d: "Voorbereid op toekomstige verplichtingen rond e-invoicing & rapportering." }
              ].map(card => (
                <div key={card.t} className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="text-lg font-semibold text-primary">{card.t}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              Vconnect ondersteunt de voorbereiding op PEPPOL e-facturatie door structuur en digitalisering in uw documentstromen te brengen. Zo schakelt u straks moeiteloos over wanneer e-facturatie wettelijk verplicht wordt.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* Functionaliteiten & Security */}
      <AnimatedSection className="py-16 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary">Belangrijkste functies</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Documenten uploaden & archief",
                  "Digitale goedkeuringen",
                  "Realtime dashboards",
                  "Mobiele toegang",
                 
                ].map(f => (
                  <li key={f} className="flex gap-3"><span className="text-primary">✓</span><span>{f}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">Veiligheid & support</h2>
              <p className="mt-6 text-slate-700 leading-relaxed">
                Vconnect werkt binnen een beveiligde omgeving met moderne versleuteling. Toegangen zijn persoonlijk en worden beheerd volgens het need-to-know principe. We voorzien begeleiding bij onboarding en blijven beschikbaar voor vragen.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 shadow-soft">
                  <div className="text-primary font-semibold">Encryptie</div>
                  <p className="mt-1 text-slate-600">Beschermde data in transit & at rest.</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft">
                  <div className="text-primary font-semibold">Back-ups</div>
                  <p className="mt-1 text-slate-600">Redundante opslag & herstelmogelijkheden.</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft">
                  <div className="text-primary font-semibold">Rolgebaseerd</div>
                  <p className="mt-1 text-slate-600">Alleen relevante toegang per gebruiker.</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft">
                  <div className="text-primary font-semibold">Support</div>
                  <p className="mt-1 text-slate-600">Snelle hulp bij vragen en onboardings.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* CTA */}
      <PageCTA />
    </div>
  );
}
