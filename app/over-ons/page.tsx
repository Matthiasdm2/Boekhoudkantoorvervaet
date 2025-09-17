import Container from "../../components/Container";
import Steps from "../../components/Steps";
import Accreditation from "../../components/Accreditation";
import PageCTA from "../../components/PageCTA";

export const metadata = {
  title: "Over ons | Boekhoudkantoor Vervaet",
  description: "Maak kennis met ons kantoor, missie, waarden en team." 
};

const waarden = [
  {
    title: "Persoonlijk",
    desc: "U krijgt een vast aanspreekpunt dat uw sector, ritme en voorkeuren kent. Geen doorschuiven: korte lijnen en menselijk contact."
  },
  {
    title: "Proactief",
    desc: "We wachten niet op de jaarafsluiting. Signalen over cashflow, marges of fiscale opportuniteiten worden tijdig besproken zodat u kunt bijsturen."
  },
  {
    title: "Digitaal",
    desc: "We omarmen digitale factuurstromen, Vconnect, PEPPOL-voorbereiding en dashboards om werk te versnellen en fouten te beperken."
  },
  {
    title: "Correct",
    desc: "Nauwkeurige verwerking, up-to-date regelgeving en interne controles zorgen voor betrouwbare cijfers en naleving van verplichtingen."
  },
  {
    title: "Transparant",
    desc: "Heldere rapportering, duidelijke tarieven en uitleg bij afwijkingen. U weet altijd waar u staat en wat u mag verwachten."
  },
  {
    title: "Betrokken",
    desc: "We denken strategisch mee: groei, structuur, investeringen en continuïteit. Relatie op lange termijn boven snelle winst."
  }
];

// 1 bestuurder + 7 medewerkers (vul echte gegevens/foto's later in)
const team = [
  { name: "Wim Vervaet", functie: "Bestuurder / Fiscaal Accountant (ITAA 11.456.609)", bio: "Oprichter en bezieler van boekhoudkantoor Vervaet.", image: "/wim.jpeg" },
  { name: "Matthias De Mey", functie: "Partner / Fiscaal Accountant (ITAA 10.310.894)", bio: "Fiscaal Accountant met een focus op fiscale optimalisaties en digitalisering.", image: "/matthias.jpeg" },
  { name: "Els Walraed", functie: "Dossierbeheerder", bio: "Dagelijkse verwerking met voornamelijk een focus op vennootschapsdossiers. Inmiddels meer dan 15 jaar actief binnen boekhoudkantoor Vervaet.", image: "/els.jpeg" },
  { name: "Stefanie Van de Walle", functie: "Dossierbeheerder", bio: "Algemene dossierbeheerder en specialist inzake btw regelingen. Ook Stefanie maakt al meer dan 10 jaar deel uit van het team.", image: "/stefanie.jpeg" },
  { name: "Steffi Naessens", functie: "Dossierbeheerder", bio: "Staat in voor de dagelijkse verwerking van hoofdzakelijk eenmanszaken. Sinds 5 jaar actief binnen boekhoudkantoor Vervaet.", image: "/steffi.jpeg" },
  { name: "Margot Van De Gehuchte", functie: "Dossierbeheerder", bio: "Staat in voor de dagelijkse verwerking van zowel eenmanszaken als vennootschappen.", image: "/margot.jpg" },
  { name: "Monica Vervaet", functie: "Onthaalmedewerker", bio: "Verzorgt het algemene onthaal en administratieve opvolging.", image: "/monica.jpg" }
];
import TeamPhoto from "../../components/TeamPhoto";

export default function Page() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary">Over ons</h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Boekhoudkantoor Vervaet is een familiebedrijf met meer dan 30 jaar ervaring. Wij combineren persoonlijke opvolging met digitale processen zodat u altijd grip houdt op uw cijfers.
            </p>
            <p className="mt-5 text-slate-700 leading-relaxed text-base">
              Dankzij onze oorsprong in bank- en verzekeringswezen begrijpen we de volledige financiële context van ondernemers. Vandaag focussen we op betrouwbare cijfers, proactieve adviesmomenten en digitale efficiëntie.
            </p>
          </div>
        </Container>
      </section>

      {/* Missie & Visie */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary">Missie</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Ondernemers vooruit helpen met heldere cijfers, tijdige inzichten en fiscale rust. We bouwen duurzame relaties gebaseerd op vertrouwen, vakkennis en beschikbaarheid.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">Visie</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                De boekhouding evolueert naar realtime samenwerking. Door digitalisatie (o.a. Vconnect & PEPPOL) en data-analyse maken we processen lichter en beslissingen sterker.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Waarden */}
      {/* Historiek & Netwerk */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/60 border-t border-slate-100/60">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary">30 jaar groei</h2>
              <p className="mt-5 text-slate-700 leading-relaxed">Ons kantoor is ruim 30 jaar geleden gegroeid uit het <span className="font-medium text-primary/80">bank- en verzekeringswezen</span>. Die oorsprong maakte dat we ondernemers niet alleen met cijfers, maar ook met hun bredere financiële context leerden begeleiden: kredietstructuren, risico-afdekking en vermogen opbouwen.</p>
              <p className="mt-4 text-slate-700 leading-relaxed">Doorheen de jaren evolueerden we naar een gespecialiseerd boekhoud- en advieskantoor met blijvend oog voor nuchterheid, lange termijn en <span className="font-medium">praktische toepasbaarheid</span>. Elke optimalisatie moet uw onderneming echt vooruithelpen.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">Sterk netwerk</h2>
              <p className="mt-5 text-slate-700 leading-relaxed">We bouwden intussen een solide netwerk uit van betrouwbare partners:</p>
              <ul className="mt-4 space-y-3 text-slate-700 text-sm">
                {[
                  'Gespecialiseerde advocaten (vennootschapsrecht, overnames, arbeidsrecht)',
                  'Notarissen voor structuur, vastgoed en familiale planning',
                  'Banken voor financiering en groeitrajecten',
                  'Verzekeringsmakelaars voor aangepaste risico-afdekking'
                ].map(item => (
                  <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary/70" /> <span>{item}</span></li>
                ))}
              </ul>
              <p className="mt-5 text-slate-700 leading-relaxed">Daardoor kunnen we – ook buiten ons directe expertisedomein – snel het juiste advies laten aansluiten. U behoudt één aanspreekpunt terwijl wij de nodige specialisten inschakelen waar relevant.</p>
              <div className="mt-6 inline-flex flex-wrap gap-2">
                {['Advocaten','Notarissen','Banken','Verzekering'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary/80 text-xs font-medium ring-1 ring-primary/20">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Waarden */}
      <section className="py-16 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Onze waarden</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {waarden.map(w => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-primary">{w.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Ons team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(lid => {
              return (
                <div key={lid.name} className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100">
                  <div className="mb-4">
                    <TeamPhoto name={lid.name} image={lid.image} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{lid.name}</h3>
                  <p className="text-sm text-primary/70 mt-1">{lid.functie}</p>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{lid.bio}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Werkwijze */}
      <Steps
        title="Onze werkwijze"
        items={[
          { title: "Kennismaking", desc: "Analyse noden & doelen." },
          { title: "Onboarding", desc: "Digitalisatie & datastromen activeren." },
          { title: "Opvolging", desc: "Periodieke rapportering & advies." }
        ]}
      />

      {/* Erkenningen */}
      <Accreditation />

      {/* CTA */}
      <PageCTA />
    </div>
  );
}
