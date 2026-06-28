import { motion } from "framer-motion";
import { useMemo } from "react";
import { FiArrowRight, FiDownload, FiMail, FiPhone } from "react-icons/fi";
import Container from "../components/common/Container";
import MagneticButton from "../components/common/MagneticButton";
import { profile, skills } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";
import { fadeUp, staggerContainer } from "../utils/animations";

const heroSkillNames = ["React.js", "TypeScript", "JavaScript ES6+", "REST APIs", "React Native", "Next.js", "Node.js", "Tailwind CSS"];

const badgePositions = [
  "left-[50%] top-[8%]",
  "left-[76%] top-[21%]",
  "left-[90%] top-[50%]",
  "left-[75%] top-[79%]",
  "left-[50%] top-[92%]",
  "left-[24%] top-[79%]",
  "left-[10%] top-[50%]",
  "left-[24%] top-[21%]",
];

function HeroVisual() {
  const heroBadges = useMemo(
    () => heroSkillNames.map((name) => skills.find((skill) => skill.name === name)).filter(Boolean).slice(0, 8),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[35rem] lg:justify-self-end"
    >
      <div className="hero-showcase-card relative min-h-[520px] overflow-visible rounded-[2.5rem] p-0 sm:min-h-[620px]">
        <div aria-hidden className="absolute inset-8 rounded-full bg-electric/5 blur-3xl" />

        <div className="hero-globe-stage" aria-hidden="true">
          <div className="hero-globe-halo" />
          <div className="hero-orbit-ring hero-orbit-ring-one" />
          <div className="hero-orbit-ring hero-orbit-ring-two" />
          <svg className="hero-wire-globe" viewBox="0 0 420 420" role="img" aria-label="Decorative futuristic developer globe">
            <defs>
              <linearGradient id="heroGlobeStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff4ecd" />
                <stop offset="45%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <radialGradient id="heroGlobeFill" cx="45%" cy="35%" r="70%">
                <stop offset="0%" stopColor="rgba(255,78,205,0.42)" />
                <stop offset="48%" stopColor="rgba(139,92,246,0.22)" />
                <stop offset="100%" stopColor="rgba(8,3,15,0.1)" />
              </radialGradient>
            </defs>

            <circle cx="210" cy="210" r="152" fill="url(#heroGlobeFill)" stroke="url(#heroGlobeStroke)" strokeWidth="2" />
            <circle cx="210" cy="210" r="120" fill="none" stroke="url(#heroGlobeStroke)" strokeWidth="1" opacity="0.34" />
            <circle cx="210" cy="210" r="82" fill="none" stroke="url(#heroGlobeStroke)" strokeWidth="1" opacity="0.22" />

            {[60, 104, 148, 192, 236, 280, 324, 368].map((x) => (
              <path key={x} d={`M ${x} 88 C ${210 + (210 - x) * 0.22} 150, ${210 + (x - 210) * 0.22} 270, ${420 - x} 332`} fill="none" stroke="url(#heroGlobeStroke)" strokeWidth="1" opacity="0.38" />
            ))}
            {[96, 135, 175, 215, 255, 295, 334].map((y) => (
              <ellipse key={y} cx="210" cy="210" rx="150" ry={Math.abs(210 - y) * 0.42 + 12} fill="none" stroke="url(#heroGlobeStroke)" strokeWidth="1" opacity="0.28" transform={`rotate(${y % 2 ? 0 : 180} 210 210)`} />
            ))}

            <path d="M84 146 C148 108 266 112 336 176" fill="none" stroke="#fff" strokeWidth="1" opacity="0.16" />
            <path d="M94 268 C166 320 274 314 336 246" fill="none" stroke="#fff" strokeWidth="1" opacity="0.12" />
            <circle cx="162" cy="125" r="4" fill="#ff4ecd" opacity="0.9" />
            <circle cx="286" cy="165" r="4" fill="#c084fc" opacity="0.9" />
            <circle cx="230" cy="306" r="4" fill="#ff4ecd" opacity="0.75" />
          </svg>
        </div>

        {heroBadges.map((skill, index) => {
          if (!skill) return null;
          const Icon = skill.icon;
          return (
            <div key={skill.name} className={`hero-tech-chip ${badgePositions[index]}`} aria-hidden="true">
              <Icon className="text-lg" />
              <span className="sr-only">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(["React.js", "React Native", "Next.js", "Node.js", "TypeScript", "REST APIs"], 70, 1200);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div aria-hidden className="absolute inset-0 grid-overlay opacity-45" />
      <motion.div
        aria-hidden
        data-parallax="0.35"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-48 top-28 h-[30rem] w-[30rem] rounded-full bg-electric/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        data-parallax="0.25"
        animate={{ scale: [1.06, 1, 1.06], x: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-16 h-[34rem] w-[34rem] rounded-full bg-violet/25 blur-3xl"
      />

      <Container className="relative z-10 grid items-center gap-14 pb-24 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
            <span className="text-sm text-slate-300">{profile.availability}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block">Hi,</span>
            <span className="block whitespace-nowrap text-[clamp(3rem,12vw,8rem)] sm:text-6xl lg:text-7xl xl:text-8xl">
              I&apos;m {profile.name}.
            </span>
            <span className="block">
              I build{" "}
              <span className="text-gradient">
                web and mobile apps.
              </span>
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 min-h-10 text-xl font-medium text-slate-300 sm:text-2xl">
            MERN Stack Developer specializing in <span className="text-electric">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-electric" />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I design modern React dashboards, Expo mobile apps, REST API workflows, and AI-assisted product experiences with clean UI, reusable components, smooth interactions, and performance-focused execution.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#projects">
              View Projects <FiArrowRight />
            </MagneticButton>
            <MagneticButton href={profile.cv} download variant="secondary">
              Download CV <FiDownload />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me <FiMail />
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-electric/50 hover:text-white">
              <FiMail /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-electric/50 hover:text-white">
              <FiPhone /> {profile.phone}
            </a>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </Container>
    </section>
  );
}
