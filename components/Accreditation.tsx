import Container from "./Container";
import Image from "next/image";

export default function Accreditation() {
  return (
    <section aria-label="Erkenningen" className="py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          {/* gradient background in brand colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-95 z-0" />
          {/* subtle ring */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 md:p-10 text-white">
            <div className="shrink-0 bg-white/10 rounded-2xl p-3">
              <Image
                src="/itaa-logo-cmyk.jpg"
                alt="ITAA - Institute for Tax Advisors & Accountants"
                width={280}
                height={100}
                className="h-16 md:h-20 w-auto object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <p className="uppercase tracking-wide text-white/80 text-xs mb-1">Erkenning</p>
              <h3 className="text-2xl md:text-3xl font-bold">Aangesloten bij ITAA</h3>
              <p className="mt-2 text-white/90 max-w-2xl">
                Boekhoudkantoor Vervaet is aangesloten bij het <span className="font-semibold">Institute for Tax Advisors & Accountants</span> en erkend als <span className="font-semibold">Accountant Fiscalist</span>.
                Dit staat garant voor kwaliteit, deontologie en permanente vorming.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
