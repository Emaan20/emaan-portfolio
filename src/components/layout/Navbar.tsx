import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, profile } from "../../data/portfolio";
import useActiveSection from "../../hooks/useActiveSection";
import { cn } from "../../utils/cn";
import Container from "../common/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <nav
          aria-label="Main navigation"
          className={cn(
            "mx-auto flex items-center justify-between rounded-full border border-white/10 bg-ink/55 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-2xl transition-all duration-300",
            scrolled ? "max-w-5xl py-2" : "max-w-7xl"
          )}
        >
          <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name} home`}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-ink shadow-[0_0_30px_rgba(255,78,205,0.24)] transition group-hover:bg-electric">
              EF
            </span>
            <span className="hidden text-sm font-semibold text-white sm:block">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-medium transition",
                    active === id ? "bg-white text-ink" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-electric/40 bg-electric/10 px-4 py-2 text-sm font-semibold text-electric transition hover:bg-electric hover:text-ink sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] bg-ink/95 px-5 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="glass-card mx-auto max-w-md rounded-[2rem] p-4"
            >
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.035 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-white hover:bg-white/10"
                >
                  {item.label}
                  <span className="text-sm text-electric">0{index + 1}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
