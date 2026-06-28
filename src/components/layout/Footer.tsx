import { FiArrowUpRight } from "react-icons/fi";
import { navItems, profile } from "../../data/portfolio";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/25 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="mb-4 inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-ink">EF</span>
            <span className="text-lg font-semibold text-white">{profile.name}</span>
          </a>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            MERN Stack Developer building premium web and mobile applications with responsive UI, APIs, and AI-aware product workflows.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navItems.slice(0, 6).map((item) => (
            <a key={item.href} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-electric/40 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-electric">
          Back to top <FiArrowUpRight />
        </a>
      </Container>
      <Container className="mt-10 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, Framer Motion, GSAP, and Lenis.
      </Container>
    </footer>
  );
}
