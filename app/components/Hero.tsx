"use client";
import { Badge } from "@/app/components/ui/badge";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative">




      {/* Portrait */}
      <img
        src="../../Images/julien_pp_3d.png"
        alt="Portrait"
        className="w-60 md:w-80 rounded-full mb-5"
      />

      {/* Titres */}
      <h1 className="text-5xl md:text-6xl font-bold mb-3 text-foreground dark:text-foreground">
        Dervaux Julien
      </h1>
      <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300">
        Concepteur Développer d'Applications
      </h2>

      {/* Link */}
      <div className="flex items-center justify-center mt-5 gap-3">
        <Badge className="px-4 py-2 text-lg">En recherche d'alternance</Badge>
        <a href="https://www.linkedin.com/in/julien-dervaux-378b7b1b8/" target="_blank" rel="noopener noreferrer">
          <img src="Images/logo/linkedin.png" alt="LinkedIn link" className="w-8 h-8" />
        </a>
        <a href="https://github.com/DervauxJulien" target="_blank" rel="noopener noreferrer">
          <img src="Images/logo/github.png" alt="Github link" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
