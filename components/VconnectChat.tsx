"use client";
import { useState, useRef, useEffect } from "react";
import Container from "./Container";

interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  pending?: boolean;
}

export default function VconnectChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
  { id: "welcome", role: "assistant", content: "Welkom! De Vconnect chat is momenteel in ontwikkeling. Voorlopig verwijzen wij u graag door naar onze helppagina" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Placeholder response – later vervangen door echte API call
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            `Momenteel werken wij aan een chatbot om al uw vragen met betrekking tot Vconnect te kunnen beantwoorden. We verwachten deze snel live te hebben. Momenteel verwijzen wij u graag door naar onze helpdesk. <br /><a href="https://misterhelp.tawk.help/" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;padding:8px 20px;border-radius:9999px;background:#2563eb;color:#fff;font-weight:500;text-decoration:none;box-shadow:0 2px 8px rgba(37,99,235,0.12);">Klik hier</a>`
        }
      ]);
      setLoading(false);
    }, 900);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pt-36 pb-20 min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/5">
      <Container>
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Vconnect Chat</h1>
            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Deze chat helpt u bij het gebruik van Vconnect. Vraag hoe u iets terugvindt, uploadt of navigeert. Technische of fiscale inhoud is niet voorzien.
            </p>
          </header>

          <div className="rounded-3xl bg-white shadow-elevate border border-slate-100 flex flex-col h-[650px] overflow-hidden">
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-4 bg-gradient-to-b from-white to-slate-50">
              {messages.map(m => (
                <div
                  key={m.id}
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft ${
                    m.role === "user" ? "ml-auto bg-primary text-white" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <span dangerouslySetInnerHTML={{ __html: m.content }} />
                </div>
              ))}
              {loading && (
                <div className="max-w-[60%] bg-slate-100 text-slate-600 rounded-2xl px-4 py-3 text-sm shadow-soft animate-pulse">
                  Even kijken...
                </div>
              )}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="border-t border-slate-200 bg-white p-5 flex flex-col gap-3"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Typ uw bericht... (Enter om te verzenden, Shift+Enter voor nieuwe lijn)"
                className="w-full resize-none rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/30 px-4 py-3 text-sm leading-relaxed min-h-[90px]"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Momenteel werken wij aan een chatbot rond het gebruik van Vconnect</span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-full shadow hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Versturen..." : "Verstuur"}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 text-xs text-slate-500 leading-relaxed">
            {/* Integratie instructies: */}
            {/* 1. API route bouwen: /app/api/chat/route.ts (POST). */}
            {/* 2. Berichten array (laatste N) doorgeven voor context. */}
            {/* 3. Backend koppelt LLM + bedrijfsdata (RAG). */}
            {/* 4. Streaming implementeren voor sneller antwoordgevoel. */}
            {/* 5. Authenticatie toevoegen indien nodig. */}
          </div>
        </div>
      </Container>
    </div>
  );
}
