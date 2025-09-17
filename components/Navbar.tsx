"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dienstOpen, setDienstOpen] = useState(false);
  const [vconnectOpen, setVconnectOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const vconnectRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) setDienstOpen(false);
      if (vconnectRef.current && !vconnectRef.current.contains(target)) setVconnectOpen(false);
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDienstOpen(false);
        setVconnectOpen(false);
      }
    };
    document.addEventListener("click", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setDienstOpen(false);
    setVconnectOpen(false);
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition ${scrolled ? "backdrop-blur bg-white/70 shadow" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo bigger and without frame */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Boekhoudkantoor Vervaet - Home">
          <Image
            src="/logo.png"
            alt="Boekhoudkantoor Vervaet"
            width={240}
            height={60}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/over-ons" className="hover:text-primary">Over ons</Link>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setDienstOpen(!dienstOpen)}
              className="hover:text-primary flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={dienstOpen}
            >
              Onze diensten ▾
            </button>
            {dienstOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-2 space-y-1 border border-slate-100">
                <Link href="/diensten/boekhouding" className="block hover:bg-slate-100 rounded px-3 py-2">Boekhouding</Link>
                <Link href="/diensten/fiscaliteit" className="block hover:bg-slate-100 rounded px-3 py-2">Fiscaliteit</Link>
                <Link href="/diensten/advies" className="block hover:bg-slate-100 rounded px-3 py-2">Advies</Link>
                <Link href="/diensten/starters" className="block hover:bg-slate-100 rounded px-3 py-2">Starters</Link>
              </div>
            )}
          </div>
          <div className="relative" ref={vconnectRef}>
            <button
              onClick={() => setVconnectOpen(!vconnectOpen)}
              className="hover:text-primary flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded={vconnectOpen}
            >
              Vconnect ▾
            </button>
            {vconnectOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-2 space-y-1 border border-slate-100">
                <Link href="/vconnect/wat-is-vconnect" className="block hover:bg-slate-100 rounded px-3 py-2">Wat is Vconnect</Link>
                <Link href="/vconnect/login" className="block hover:bg-slate-100 rounded px-3 py-2">Login</Link>
                <Link href="/vconnect/chat" className="block hover:bg-slate-100 rounded px-3 py-2">Vconnect Chat</Link>
              </div>
            )}
          </div>
          <Link href="/vacature" className="hover:text-primary">Vacature</Link>
          <Link href="/afspraak" className="btn-primary">Afspraak</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-3">
          <Link href="/over-ons" onClick={() => setOpen(false)}>Over ons</Link>
          <details className="rounded border border-slate-200">
            <summary className="cursor-pointer px-3 py-2">Onze diensten</summary>
            <div className="pl-4 flex flex-col py-2">
              <Link href="/diensten/boekhouding" onClick={() => setOpen(false)} className="py-1">Boekhouding</Link>
              <Link href="/diensten/fiscaliteit" onClick={() => setOpen(false)} className="py-1">Fiscaliteit</Link>
              <Link href="/diensten/advies" onClick={() => setOpen(false)} className="py-1">Advies</Link>
              <Link href="/diensten/starters" onClick={() => setOpen(false)} className="py-1">Starters</Link>
            </div>
          </details>
          <details className="rounded border border-slate-200">
            <summary className="cursor-pointer px-3 py-2">Vconnect</summary>
            <div className="pl-4 flex flex-col py-2">
              <Link href="/vconnect/wat-is-vconnect" onClick={() => setOpen(false)} className="py-1">Wat is Vconnect</Link>
              <Link href="/vconnect/login" onClick={() => setOpen(false)} className="py-1">Login</Link>
              <Link href="/vconnect/chat" onClick={() => setOpen(false)} className="py-1">Vconnect Chat</Link>
            </div>
          </details>
          <Link href="/vacature" onClick={() => setOpen(false)}>Vacature</Link>
          <Link href="/afspraak" onClick={() => setOpen(false)} className="btn-primary block text-center">Afspraak</Link>
        </div>
      )}
    </nav>
  );
}
