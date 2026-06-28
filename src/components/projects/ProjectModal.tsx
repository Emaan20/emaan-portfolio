import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiX,
} from "react-icons/fi";
import { Project } from "../../data/portfolio";
import PhoneFrame from "./PhoneFrame";
import BrowserFrame from "./BrowserFrame";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeScreen, setActiveScreen] = useState(0);
  const scrollPositionRef = useRef(0);

  const screenshots = useMemo(() => {
    if (!project) return [];
    if (project.screenshots && project.screenshots.length > 0) {
      return project.screenshots;
    }
    if (project.coverImage) return [project.coverImage];
    return [];
  }, [project]);

  useEffect(() => {
    setActiveScreen(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    scrollPositionRef.current = window.scrollY;

    document.body.classList.add("modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollPositionRef.current);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const selectedScreen = screenshots[activeScreen];

  const goNext = () => {
    setActiveScreen((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setActiveScreen((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const projectLinks = project as Project & {
    githubUrl?: string;
    liveUrl?: string;
    appStoreUrl?: string;
    github?: string;
    live?: string;
  };

  const githubLink = projectLinks.githubUrl || projectLinks.github;
  const liveLink = projectLinks.liveUrl || projectLinks.live;
  const appStoreLink = projectLinks.appStoreUrl;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-xl sm:p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} project details`}
        onMouseDown={onClose}
        onWheel={(event) => event.preventDefault()}
        onTouchMove={(event) => event.preventDefault()}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onMouseDown={(event) => event.stopPropagation()}
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
          className="gradient-border glass-card relative flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
        >
          <div className="shrink-0 border-b border-white/10 bg-[#100817]/95 px-5 py-5 backdrop-blur-xl sm:px-8">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-electric">
                  {project.period}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                  {project.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-electric/50 hover:bg-white/10"
              >
                <FiX className="text-xl" />
              </button>
            </div>
          </div>

          <div
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
            className="glass-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric">
                      App Screens
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {screenshots.length > 0
                        ? `${activeScreen + 1} of ${screenshots.length}`
                        : "Preview"}
                    </p>
                  </div>

                  {screenshots.length > 1 && (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={goPrevious}
                        aria-label="Previous screenshot"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-electric/50 hover:bg-electric hover:text-ink"
                      >
                        <FiArrowLeft />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next screenshot"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-electric/50 hover:bg-electric hover:text-ink"
                      >
                        <FiArrowRight />
                      </button>
                    </div>
                  )}
                </div>

  <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-sky-400/15 via-cyan-300/10 to-violet/20 px-4 py-8">
                  <div className="absolute inset-0 grid-overlay opacity-25" />
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-3xl" />

                  {selectedScreen ? (
                    project.mockupType === "mobile" ? (
                      <PhoneFrame
                        src={selectedScreen}
                        alt={`${project.name} app screen ${activeScreen + 1}`}
                        className="relative z-10 h-[500px] w-[250px]"
                        imageClassName="object-cover object-top"
                      />
                    ) : (
             <BrowserFrame
  src={selectedScreen}
  alt={`${project.name} screen ${activeScreen + 1}`}
  className="relative z-10 aspect-[1.9/1] w-full max-w-[900px]"
  imageClassName="object-contain object-top"
/>
                    )
                  ) : (
                    <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
                      No screenshots added yet.
                    </div>
                  )}
                </div>

                {screenshots.length > 1 && (
                  <div
                    data-lenis-prevent
                    className="glass-scroll mt-5 flex gap-3 overflow-x-auto overscroll-contain pb-2"
                  >
                    {screenshots.map((screen, index) => (
                      <button
                        key={`${project.id}-thumb-${index}`}
                        type="button"
                        onClick={() => setActiveScreen(index)}
                        aria-label={`Open screenshot ${index + 1}`}
                        className={`shrink-0 overflow-hidden rounded-2xl border p-1 transition ${activeScreen === index
                            ? "border-electric bg-electric/10"
                            : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
                          }`}
                      >
                        <img
                          src={screen}
                          alt={`${project.name} thumbnail ${index + 1}`}
                         className={
  project.mockupType === "mobile"
    ? "h-24 w-12 rounded-xl object-cover object-top"
    : "h-20 w-32 rounded-xl bg-white object-contain object-top"
}
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-sm uppercase tracking-[0.35em] text-electric">
                  {project.type} Project
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                  {project.subtitle}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">My role:</span>{" "}
                    {project.role}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Key features
                    </h4>

                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Challenges solved
                    </h4>

                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {project.impact && (
                  <div className="mt-8 rounded-[1.5rem] border border-electric/20 bg-electric/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-electric">
                      Impact
                    </p>
                    <p className="mt-3 leading-7 text-slate-200">
                      {project.impact}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-electric/50 hover:bg-white/10"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}

                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-electric"
                    >
                      <FiExternalLink /> Live / Google Play
                    </a>
                  )}

                  {appStoreLink && (
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-5 py-3 text-sm font-semibold text-electric transition hover:bg-electric hover:text-ink"
                    >
                      <FiExternalLink /> App Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}