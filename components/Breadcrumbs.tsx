"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 1) return null;

  const crumbs = parts.map((part, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    const label = part[0].toUpperCase() + part.slice(1);
    return { href, label };
  });

  return (
    <nav className="text-sm text-slate-500 my-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        <li><Link href="/" className="hover:text-primary">Home</Link></li>
        {crumbs.map((c, idx) => (
          <li key={c.href} className="flex items-center gap-2">
            <span>/</span>
            <Link href={c.href} className="hover:text-primary">{c.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
