"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-12 text-5xl font-bold text-foreground">Hakkımda</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Merhaba! Ben bir{" "}
              <span className="font-semibold text-primary">
                front end developer
              </span>{" "}
              olarak modern web teknolojileriyle kullanıcı deneyimini ön planda
              tutan, dinamik ve ölçeklenebilir uygulamalar geliştiriyorum. Kod
              yazmayı bir sanat olarak görüyor, her projede estetik ve
              performans dengesini yakalamayı hedefliyorum.
            </p>
            <p>
              <span className="italic text-accent">
                React, Next.js, TypeScript{" "}
              </span>
              gibi teknolojilerle çalışırken, temiz kod prensiplerini ve en iyi
              pratikleri uygulamaya özen gösteriyorum.
            </p>
            <p>
              Yeni fikirler üretmeyi, açık kaynak dünyasını keşfetmeyi ve
              öğrendiklerimi paylaşmayı seviyorum. Boş zamanlarımda kahve
              eşliğinde müzik dinler, yeni oyunlar dener ve kendimi geliştirecek
              küçük projeler üzerinde çalışırım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
