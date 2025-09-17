import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <Container className="py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-lg mb-3">Boekhoudkantoor Vervaet</h4>
          <p className="text-white/80 text-sm">Uw cijfers, onze zorg. Persoonlijk, digitaal en toekomstgericht.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Navigatie</h5>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#overons">Over ons</a></li>
            <li><a href="#diensten">Onze diensten</a></li>
            <li><a href="#vconnect">Vconnect</a></li>
            <li><a href="/afspraak">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Juridisch</h5>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/privacy-policy">Privacybeleid</Link></li>
            <li><Link href="/cookie-policy">Cookiebeleid</Link></li>
            <li><Link href="/terms">Algemene voorwaarden</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <p className="text-white/80 text-sm">
            Lepelstraat 76, 9270 Laarne<br/>
            09 366 63 60<br/>
            contact@wvervaet.be<br/>
            <span className="block mt-2 text-white/60 whitespace-nowrap">Ondernemingsnummer:&nbsp;0896&nbsp;594&nbsp;556</span>
            <span className="block text-white/60">Aansluitingsnummer ITAA: 50.174.561</span>
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/70">© {new Date().getFullYear()} Boekhoudkantoor Vervaet. Alle rechten voorbehouden.</Container>
      </div>
    </footer>
  );
}