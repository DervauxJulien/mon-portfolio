// components/Experience.tsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  { title: "AFPA", role: "Module de spécialisation Springboot", year: "2025", img: "/Images/experience/afpa.jpg", badge: "Java / Springboot / Angular / Git / SCRUM" },
  { title: "AFPA", role: "Module de spécialisation Jakarta EE", year: "2024", img: "/Images/experience/afpa.jpg", badge: "Java / Jakarta EE / Git / SCRUM" },
  { title: "Eternall Stories", role: "Stage développeur web & web mobile", year: "2024", img: "/Images/project/ETERNALLSTORIES/logoeternallstories.png",  badge: "Flutterflow / Flutter /  Firebase / Jira / SCRUM " },
  { title: "AFPA", role: "Formation développeur web & web mobile", year: "2023/2024", img: "/Images/experience/afpa.jpg", badge: "HTML / CSS / Bootstrap / JS / React / Symfony / MYSQL / Git / SCRUM / Figma " },
];

export default function Experience() {
  return (
    <section id="exp" className="py-20 px-5 md:px-20 text-center">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <img src="/Images/logo/experience.png" alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {experiences.map((exp) => (
          <Card key={exp.title} className="w-80">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={exp.img} 
                alt={exp.title} 
                className="w-full h-48 rounded-md mb-3 object-cover" 
              />
              <p>{exp.year}</p>
              <div className="flex justify-center mt-2">
                <Badge variant="outline">{exp.badge}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
