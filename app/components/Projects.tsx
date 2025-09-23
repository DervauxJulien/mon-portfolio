// components/Projects.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";


const projects = [
  { title: "Priorito", year: "2025", img: "/Images/project/priorito.png", badge: "Springboot / React / Ts", link: "https://priorito.vercel.app/" },
  { title: "Portfolio", year: "2025", img: "/Images/project/portfolio_2025.png", badge: "Next.js", link: "https://mon-portfolio-sigma-khaki.vercel.app/" },
  { title: "Eternall Stories", year: "2024", badge: "Flutterflow / Flutter", img: "/Images/project/ETERNALLSTORIES/EternallStorie.jpeg", link: '' },
  { title: "Empire Movie", year: "2023", badge: "React / js", img: "/Images/project/TMDB/portfolio.png", link: "https://projet-tmdb-react-js.vercel.app/" },

];

export default function Projects() {
  return (
    <section id="project" className="py-20 px-5 md:px-20 text-center">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <img src="/Images/logo/projet.png" alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((proj) => (
          <Card key={proj.title} className="w-80">
            <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 rounded-md mb-3 object-cover"
              />
              <p>{proj.year}</p>
              <div className="flex justify-center mt-2">
                <Badge variant="outline">{proj.badge}</Badge>
              </div>
              {proj.link ? (
                <Button asChild variant="default" className="mt-2">
                  <a href={proj.link} target="_blank">Voir projet</a>
                </Button>
              ) : (
                <Button variant="default" disabled className="mt-2">En développement</Button>
              )}
            </CardContent>

          </Card>
        ))}
      </div>
    </section>
  );
}
