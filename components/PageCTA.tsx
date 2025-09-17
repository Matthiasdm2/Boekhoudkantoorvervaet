import Container from "./Container";

export default function PageCTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-12 bg-gradient-to-r from-primary to-primary-light text-white shadow-elevate">
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold">Klaar om te starten?</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Plan een vrijblijvende kennismaking en ontdek hoe we uw cijfers helder en onder controle houden.</p>
            <a href="/afspraak" className="mt-6 inline-flex bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-slate-100 transition">Plan een gesprek</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
