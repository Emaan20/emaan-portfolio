import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
        );
        observer.observe(section!);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return active;
}
