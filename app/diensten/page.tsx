import ServiceHero from "../../components/ServiceHero";
import Container from "../../components/Container";
import Link from "next/link";

export const metadata = {
  title: "Onze diensten | Boekhoudkantoor Vervaet",
  description: "Ontdek hoe we ondernemers ondersteunen met boekhouding, fiscaliteit en advies."
};

export default function DienstenIndex() {
  return (
    <div>
      <ServiceHero title="Onze diensten" subtitle="Wat we elke dag voor ondernemers betekenen." />
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/diensten/boekhouding" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-primary">Boekhouding</h3>
            <p className="mt-2 text-slate-600">Van dagelijkse verwerking tot jaarafsluiting.</p>
          </Link>
          <Link href="/diensten/fiscaliteit" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-primary">Fiscaliteit</h3>
            <p className="mt-2 text-slate-600">BTW, personen- en vennootschapsbelasting, optimalisatie.</p>
          </Link>
          <Link href="/diensten/advies" className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-primary">Advies & Starters</h3>
            <p className="mt-2 text-slate-600">Strategisch advies en begeleiding bij elke stap.</p>
          </Link>
        </div>
      </Container>
    </div>
  );
}
