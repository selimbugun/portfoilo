"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "ERP Web Uygulaması (Geliştirilmeye Devam Ediyor)",
    description:
      "Bir backend developer(ASP) ile birlikte geliştirdiğimiz bu takım projesi halen geliştirilme aşamasında. Bu uygulamada amacımız küçük ve orta ölçekli işletmelere CRM, Stok, İK servisleri sunmak.",
    image: "/erpapp.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Docker", "Jenkins"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevBlog App",
    description:
      "React ve Next.js kullanarak geliştirmiş olduğum ilk uygulama. Basit bir blog uygulaması. Yazı ekleme, silme, düzenleme, authentication işlemleri, yorum ekleme, silme gibi özellikleri bulunmaktadır.",
    image: "/devblogapp.png",
    tags: ["Next.js", "React", "Material UI", "Vercel", "Supabase"],
    github: "https://github.com/selimbugun/dev-blog-app",
    demo: "https://dev-blog-app-five.vercel.app",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-12 text-5xl font-bold text-foreground">Projeler</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github === "#" ? (
                      <button
                        disabled
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        Kod
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        Kod
                      </a>
                    )}
                    {project.demo === "#" ? (
                      <button
                        disabled
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
