"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Layers,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Docker", icon: Server },
  { name: "Jenkins Pipeline", icon: Workflow },
  { name: "Supabase", icon: Database },
  { name: "Basicly Python & Django", icon: Code2 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-12 text-5xl font-bold text-foreground">
            Yetenekler
          </h2>

          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:scale-105 hover:border-accent"
                >
                  <Icon className="h-12 w-12 text-foreground" />
                  <div className="mt-4 flex flex-col">
                    <span className="text-xl font-bold text-foreground">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
