"use client";
import Image from "next/image";
import { useState, useMemo } from "react";

interface TeamPhotoProps {
  name: string;
  image?: string;
  size?: number; // logical size in px for sizing calculations
}

// Simple hash to pick a gradient variant deterministically per name
function hashToIndex(str: string, max: number) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % max;
}

const gradients = [
  "from-primary/40 via-primary/25 to-primary/10",
  "from-sky-400/40 via-sky-300/25 to-sky-200/10",
  "from-indigo-400/40 via-indigo-300/25 to-indigo-200/10",
  "from-emerald-400/40 via-emerald-300/25 to-emerald-200/10",
  "from-rose-400/40 via-rose-300/25 to-rose-200/10",
];

export function TeamPhoto({ name, image, size = 320 }: Readonly<TeamPhotoProps>) {
  const [failed, setFailed] = useState(false);
  const initials = useMemo(
    () => name.split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase(),
    [name]
  );
  const gradient = gradients[hashToIndex(name, gradients.length)];
  const showFallback = failed || !image;

  return (
    <div
      className={
        "group relative aspect-square rounded-full overflow-hidden ring-1 ring-primary/20 shadow-md hover:shadow-lg transition" +
        " bg-gradient-to-br " + gradient
      }
      style={{ maxWidth: size, maxHeight: size }}
      aria-label={image && !failed ? name : `${name} (geen foto beschikbaar)`}
    >
    {!showFallback && (
        <Image
          src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, 300px"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
            priority={false}
        />
      )}
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 dark:text-white font-semibold select-none">
          <span className="text-xl tracking-wide drop-shadow-sm">
            {initials}
          </span>
          <svg
            className="w-5 h-5 mt-1 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
            <path d="M4 20c0-2.7 3.6-4 8-4s8 1.3 8 4" />
          </svg>
          <span className="sr-only">Geen foto beschikbaar</span>
        </div>
      )}
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 bg-[radial-gradient(circle_at_30%_30%,white_0%,transparent_60%)]" />
    </div>
  );
}

export default TeamPhoto;
