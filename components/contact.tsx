"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
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

  const socials = [
    { icon: Github, href: "https://github.com/selimbugun", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/selimbugun",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-6 text-5xl font-bold text-foreground">
            İletişime Geçin
          </h2>
          <p className="mb-12 text-xl leading-relaxed text-muted-foreground">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için benimle
            iletişime geçebilirsiniz. Kahve içerken sohbet edelim!
          </p>

          <a
            href="mailto:selimbugun7@gmail.com"
            className="mb-16 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            <Mail className="h-5 w-5" />
            Mesaj Gönder
          </a>

          <div className="mt-16 flex justify-center gap-6">
            {socials.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="rounded-full border border-border bg-card p-4 transition-all group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
            <a
              href="https://medium.com/@selimbugun"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card p-4 transition-all hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/30"
            >
              Medium
            </a>
          </div>

          <div className="mt-16 text-sm text-muted-foreground">
            <p>© 2025 Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
