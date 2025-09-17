import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Vconnect from "../components/Vconnect";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Accreditation from "../components/Accreditation";

export default function Page() {
  return (
    <>
  <Hero />
      <About />
      <Services />
      <Vconnect />
  {/* eslint-disable-next-line react/jsx-pascal-case */}
  <FAQ />
  {/* eslint-disable-next-line react/jsx-pascal-case */}
  <CTA />
  {/* Extra afspraak sectie verwijderd op verzoek */}
      <Accreditation />
    </>
  );
}


