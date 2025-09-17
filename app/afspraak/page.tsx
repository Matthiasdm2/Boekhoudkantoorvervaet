import ServiceHero from "../../components/ServiceHero";
import Container from "../../components/Container";
import AnimatedSection from "../../components/AnimatedSection";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Afspraak maken | Boekhoudkantoor Vervaet",
  description: "Plan een kennismakingsgesprek of stel uw vraag via het formulier."
};

export default function Page() {
  return (
    <>
      <ServiceHero
        title="Plan een afspraak"
        subtitle="Klaar voor duidelijkere cijfers, betere opvolging en proactief advies? Boek een vrijblijvend gesprek of stuur ons uw vraag."
  variant="fade"
        align="center"
      />

      <AnimatedSection className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-3 gap-14 items-start">
            <div className="space-y-10 lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-elevate ring-1 ring-slate-200/70 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Stel uw vraag</h2>
                <p className="mt-2 text-slate-600 max-w-xl">Vul het formulier in en we antwoorden meestal binnen 1 werkdag. Liever telefonisch? Bel ons gerust tijdens kantooruren.</p>
                <div className="mt-8"><ContactForm /></div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white rounded-3xl shadow-elevate ring-1 ring-slate-200/70 p-6 md:p-7">
                <h3 className="text-lg font-semibold text-slate-900">Kantoorinfo</h3>
                <dl className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <dt className="font-medium text-slate-900">Adres</dt>
                    <dd>Lepelstraat 76<br/>9270 Laarne</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Telefoon</dt>
                    <dd>09 366 63 60</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">E-mail</dt>
                    <dd>contact@wvervaet.be</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Openingsuren</dt>
                    <dd>
                      <div className="mt-2 overflow-hidden rounded-xl ring-1 ring-slate-200 divide-y divide-slate-100 bg-slate-50">
                        {[
                          { d:'Maandag', h:'09:00 – 12:00 & 13:30 – 17:00' },
                          { d:'Dinsdag', h:'09:00 – 12:00 & 13:30 – 17:00' },
                          { d:'Woensdag', h:'09:00 – 12:00 & 13:30 – 17:00' },
                          { d:'Donderdag', h:'09:00 – 12:00 & 13:30 – 17:00' },
                          { d:'Vrijdag', h:'09:00 – 12:00 & 13:30 – 16:00' }
                        ].map(row => (
                          <div key={row.d} className="flex items-center gap-4 px-4 py-2 text-sm">
                            <span className="w-28 shrink-0 font-medium text-slate-700">{row.d}</span>
                            <span className="inline-flex items-center rounded-md bg-white px-3 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">{row.h}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-slate-500">Buiten kantooruren <span className="font-medium text-slate-600">op afspraak</span>.</p>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Map verplaatst naar full width onderaan */}
            </div>
          </div>
          <div className="mt-14 overflow-hidden rounded-3xl h-96 bg-slate-200 ring-1 ring-slate-200/70 shadow-elevate relative">
            <iframe
              title="Route"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Lepelstraat%2076,%209270%20Laarne&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </AnimatedSection>

  {/* Verwijderd: PageCTA ("Klaar om te starten" blok) op verzoek */}
    </>
  );
}
