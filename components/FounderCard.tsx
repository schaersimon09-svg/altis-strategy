"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

interface FounderCardProps {
  name: string;
  initials: string;
  role: string;
  email: string;
  emailHref: string;
  photo: string; // e.g. "/vincent.jpg"
  bio: string;
}

export default function FounderCard({
  name,
  initials,
  role,
  email,
  emailHref,
  photo,
  bio,
}: FounderCardProps) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8">
      {/* Avatar */}
      <div className="mb-5">
        {!photoError ? (
          <Image
            src={photo}
            alt={`Photo de ${name}`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-xl object-cover"
            onError={() => setPhotoError(true)}
          />
        ) : (
          <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center">
            <span className="text-ochre font-black text-2xl">{initials}</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-black text-navy mb-0.5">{name}</h3>
      <p className="text-xs text-ochre font-semibold uppercase tracking-widest mb-4">
        {role}
      </p>

      <p className="text-sm text-muted leading-relaxed mb-5">{bio}</p>

      <a
        href={emailHref}
        className="flex items-center gap-2 text-sm text-muted hover:text-navy transition-colors"
      >
        <Mail size={14} />
        {email}
      </a>
    </div>
  );
}
