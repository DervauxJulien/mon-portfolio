// components/Hero.tsx
"use client";

import { Badge } from "@/app/components/ui/badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative">

      {/* Portrait */}
      <Image
        src="/Images/julien_pp_3d.png"
        alt="Portrait"
        width={320}
        height={320}
        className="rounded-full mb-5"
      />

      {/* Titres */}
      <h1 className="text-5xl md:text-6xl font-bold mb-3 text-foreground dark:text-foreground">
        Dervaux Julien
      </h1>
      <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300">
        Concepteur Développeur d&apos;Applications
      </h2>

      {/* Liens */}
      <div className="flex items-center justify-center mt-5 gap-3">
        <Badge className="px-4 py-2 text-lg">En recherche d&apos;alternance</Badge>
        <a href="https://www.linkedin.com/in/julien-dervaux-378b7b1b8/" target="_blank" rel="noopener noreferrer">
          <Image 
          src="/Images/logo/linkedin.png" 
          alt="LinkedIn link" 
          width={32} 
          height={32} />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Images/logo/github.png"
            alt="Github link"
            width={32}
            height={32}
          />
        </a>
      </div>
    </section>
  );
}
