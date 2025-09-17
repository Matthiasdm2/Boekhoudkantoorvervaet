import Container from "./Container";

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-slate-100">
      <Container className="py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-1">
          <div className="text-2xl">🔒</div>
          <p className="text-sm text-slate-600">Veilig klantenportaal</p>
        </div>
        <div className="space-y-1">
          <div className="text-2xl">🤝</div>
          <p className="text-sm text-slate-600">Vaste contactpersoon</p>
        </div>
        <div className="space-y-1">
          <div className="text-2xl">⚡️</div>
          <p className="text-sm text-slate-600">Digitale workflows</p>
        </div>
        <div className="space-y-1">
          <div className="text-2xl">📊</div>
          <p className="text-sm text-slate-600">Heldere rapportering</p>
        </div>
      </Container>
    </div>
  );
}
