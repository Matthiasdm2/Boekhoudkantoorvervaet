"use client";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-28 bg-slate-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-primary">Contact</h2>
            <p className="mt-3 text-slate-600">Neem gerust contact op voor een vrijblijvend gesprek.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p>📍 Lepelstraat 76, 9270 Laarne</p>
              <p>📞 09 366 63 60</p>
              <p>✉️ contact@wvervaet.be</p>
            </div>
          </div>
          <form className="bg-white p-6 rounded-2xl shadow-soft space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Naam</label>
              <input type="text" className="w-full rounded-md border-slate-300 focus:border-primary focus:ring-primary" placeholder="Uw naam" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input type="email" className="w-full rounded-md border-slate-300 focus:border-primary focus:ring-primary" placeholder="naam@bedrijf.be" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bericht</label>
              <textarea rows={5} className="w-full rounded-md border-slate-300 focus:border-primary focus:ring-primary" placeholder="Waarmee kunnen we helpen?"></textarea>
            </div>
            <button className="btn-primary w-full">Verstuur</button>
          </form>
        </div>
      </Container>
    </AnimatedSection>
  );
}