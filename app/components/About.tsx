// components/About.tsx

"use client";

import { Badge } from "@/app/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 md:px-20 text-center">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
      <img  src="/Images/logo/aboutme.png" alt="" />
      </div>
      <p className="mb-10 max-w-3xl mx-auto text-lg md:text-xl">
        Développeur en formation CDA depuis le 22 septembre 2025, je me spécialise dans le développement back-end avec Java et Spring Boot,
        ainsi que front-end avec React et TypeScript. Je suis à la recherche d'une alternance pour mettre en pratique mes compétences et débuter ma carrière.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge variant="outline">Java</Badge>
        <Badge variant="outline">Spring Boot</Badge>
        <Badge variant="outline">Symfony</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Tailwind CSS</Badge>
        <Badge variant="outline">GitHub</Badge>
        <Badge variant="outline">Figma</Badge>
      </div>
    </section>
  );
}
