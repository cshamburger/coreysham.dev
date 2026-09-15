"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden bg-background border-b border-border transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setLoaded(true)}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}