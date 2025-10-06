"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "home", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "projects", label: "Projeler" },
  { id: "contact", label: "İletişim" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="group relative block" aria-label={section.label}>
              <span className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-card px-3 py-1 text-sm font-medium text-card-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {section.label}
              </span>
              <div
                className={`h-3 w-3 rounded-full border-2 transition-all ${
                  activeSection === section.id
                    ? "border-primary bg-primary shadow-lg shadow-primary/50"
                    : "border-muted-foreground bg-transparent group-hover:border-primary"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
