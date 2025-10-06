"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl">
        <div
          className={`flex flex-col items-center gap-12 md:flex-row md:gap-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary blur-2xl opacity-30 animate-pulse" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/50 shadow-2xl shadow-accent/20 flex items-center justify-center">
              <Image
                src="/picture2.jpg"
                alt="Profile"
                width={512}
                height={512}
                className="object-cover object-center rounded-full"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Merhaba, Ben <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Selim Bugün
              </span>
            </h1>
            <p className="mb-4 text-2xl text-muted-foreground md:text-3xl">
              Front End Developer
            </p>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Modern JavaScript teknolojileri kullanarak, ölçeklenebilir ve
              kullanıcı dostu web uygulamaları geliştiriyorum. Sürekli
              öğrenmeye, kendimi geliştirmeye devam ediyorum.
            </p>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              Projelerimi Gör
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-accent/30">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-accent animate-glow" />
        </div>
      </div>
    </section>
  );
}
