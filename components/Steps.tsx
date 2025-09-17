import Container from "./Container";

export default function Steps({
  items, title = "Onze aanpak"
}: {
  items: { title: string; desc: string }[];
  title?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="bg-white rounded-2xl shadow-soft p-6">
              <div className="w-10 h-10 rounded-full bg-primary-light text-white flex items-center justify-center font-semibold mb-4">
                {i+1}
              </div>
              <h3 className="text-xl font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
