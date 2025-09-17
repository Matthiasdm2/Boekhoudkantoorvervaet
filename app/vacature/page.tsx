import AnimatedSection from "../../components/AnimatedSection";
import ServiceHero from "../../components/ServiceHero";
import Container from "../../components/Container";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vacature dossierbeheerder | Boekhoudkantoor Vervaet",
  description: "Wij zoeken een (junior/medior) dossierbeheerder / boekhouder. Groei mee in een modern, digitaal en menselijk kantoor in Laarne.",
  openGraph: {
    title: "Vacature dossierbeheerder | Boekhoudkantoor Vervaet",
    description: "Wij zoeken een (junior/medior) dossierbeheerder / boekhouder. Groei mee in een modern, digitaal en menselijk kantoor in Laarne.",
    type: "website"
  }
};

const job = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Dossierbeheerder / Boekhouder',
  description: 'Je bent verantwoordelijk voor het zelfstandig opvolgen van klantendossiers: verwerken van boekhoudstukken, btw-, personen- en vennootschapsaangiften, voorbereiding jaarrekeningen en proactief klantencontact.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Boekhoudkantoor Vervaet',
    sameAs: 'https://www.boekhoudkantoorvervaet.be',
    logo: 'https://www.boekhoudkantoorvervaet.be/logo.png'
  },
  employmentType: 'FULL_TIME',
  workHours: 'Dagwerk',
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lepelstraat 76',
      addressLocality: 'Laarne',
      postalCode: '9270',
      addressCountry: 'BE'
    }
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'Belgium'
  },
  industry: 'Accounting',
  datePosted: new Date().toISOString().split('T')[0]
};

export default function Page() {
  return (
    <>
      <Script id="job-posting-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }} />
      <ServiceHero
        title="Vacature: Dossierbeheerder / Boekhouder"
        subtitle="Klaar voor een volgende stap in een menselijk én vooruitstrevend kantoor? Sluit je aan bij ons team in Laarne."
        variant="fade"
        align="center"
      />
      <AnimatedSection className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">
              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">Waarom deze job?</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p>Pas afgestudeerd of al wat ervaring en klaar om écht impact te maken voor klanten? Bij Boekhoudkantoor Vervaet combineren we persoonlijke begeleiding met moderne digitale tools. Geen logge structuren, wel korte lijnen, veel vertrouwen en de kans om mee te groeien.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { t:'Menselijk & familiaal', d:'Warm team met respect voor balans en groei.' },
                    { t:'Digitale flow', d:'We werken efficiënt met moderne cloudsoftware.' },
                    { t:'Persoonlijke groei', d:'Opleiding & begeleiding om door te groeien.' },
                    { t:'Impact', d:'Je kent je dossiers door en door en adviseert proactief.' }
                  ].map(card => (
                    <div key={card.t} className="rounded-2xl bg-white shadow-elevate ring-1 ring-slate-200/70 p-5">
                      <h3 className="text-sm font-semibold text-slate-900">{card.t}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{card.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Wat ga je doen?</h2>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {[
                    'Inboeken en controleren van aan- en verkoopfacturen',
                    'Verwerken van bankverrichtingen en loonadministraties',
                    'Voorbereiden en indienen van btw-, personen- en vennootschapsaangiften',
                    'Voorbereiden van jaarrekeningen, balansen en tussentijdse cijfers',
                    'Signaleren van optimalisaties en proactief klantencontact',
                    'Meedenken over interne verbeteringen en digitalisering'
                  ].map(item => (
                    <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary/70" /> <span>{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Jouw profiel</h2>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {[
                    'Graduaat of bachelor accountancy/fiscaliteit (of gelijkwaardig door ervaring)',
                    'Nauwkeurig, kritisch en leergierig',
                    'Sterke basis Nederlands; extra talen zijn een plus',
                    'Vlot met MS Office en open voor nieuwe software',
                    'Klantgericht, discreet en verantwoordelijkheid nemen',
                    'Zelfstandig werken maar ook teamplayer'
                  ].map(item => (
                    <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500/70" /> <span>{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Wat wij bieden</h2>
                <ul className="space-y-3 text-slate-700 text-sm">
                  {[
                    'Marktconform loon met maaltijdcheques',
                    'Vast contract in dagwerk',
                    'Gedeeltelijk thuiswerk mogelijk na inloopperiode',
                    'Begeleid groeipad en blijvende bijscholing',
                    'Aangename werkplek in Laarne met vlot bereik',
                    'Respect voor work-life balans'
                  ].map(item => (
                    <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500/70" /> <span>{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-slate-900">Hoe solliciteren?</h2>
                <p className="text-slate-600 text-sm leading-relaxed">Stuur je CV + korte motivatie naar <a href="mailto:contact@wvervaet.be" className="text-primary font-medium">contact@wvervaet.be</a>. Vermeld eventueel je beschikbaarheid. We nemen snel contact op voor een eerste kennismaking.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:contact@wvervaet.be?subject=Sollicitatie dossierbeheerder" className="btn-primary">Solliciteer nu</a>
                  <Link href="/over-ons" className="btn-secondary">Leer ons kennen</Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white rounded-3xl shadow-elevate ring-1 ring-slate-200/70 p-6 space-y-5">
                <h3 className="text-sm font-semibold tracking-wide text-slate-900">Snelle feiten</h3>
                <dl className="divide-y divide-slate-100 text-sm">
                  {[
                    ['Locatie', 'Laarne (hybride mogelijk)'],
                    ['Contract', 'Onbepaalde duur'],
                    ['Regime', 'Fulltime of 4/5'],
                    ['Team', '6-10 collega\'s'],
                    ['Start', 'In overleg'],
                  ].map(([k,v]) => (
                    <div key={k} className="flex items-start gap-3 py-2 first:pt-0 last:pb-0">
                      <dt className="w-24 shrink-0 font-medium text-slate-600">{k}</dt>
                      <dd className="text-slate-800">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-gradient-to-br from-primary/90 to-primary text-white rounded-3xl p-6 shadow-elevate relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
                <h3 className="text-lg font-semibold">Vragen?</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">Nog twijfels of eerst even aftoetsen? Neem gerust contact op voor een vrijblijvend gesprek.</p>
                <a href="mailto:contact@wvervaet.be?subject=Vraag vacature" className="mt-5 inline-flex items-center justify-center rounded-lg bg-white/95 hover:bg-white text-primary font-medium px-4 py-2 text-sm shadow">Stel een vraag</a>
              </div>
              <div className="bg-white rounded-3xl shadow-elevate ring-1 ring-slate-200/70 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-slate-900">Sollicitatieproces</h3>
                <ol className="mt-4 space-y-4 text-sm text-slate-700">
                  {[
                    ['1', 'Je stuurt CV + motivatie'],
                    ['2', 'Snelle screening (mail/telefoon)'],
                    ['3', 'Kennismakingsgesprek op kantoor'],
                    ['4', 'Verdiepingsgesprek / Meet the Team (optioneel)'],
                    ['5', 'Voorstel & startdatum']
                  ].map(([n, t]) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold ring-1 ring-primary/20">{n}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
