import Container from "./Container";

export default function FeatureGrid({
  items, title = "Wat krijgt u?"
}: {
  items: { icon?: string; title: string; desc: string }[];
  title?: string;
}) {
  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-2xl shadow-soft p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-3">
                <span>{it.icon ?? "✓"}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
