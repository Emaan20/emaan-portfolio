import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ProjectMockup from "../components/projects/ProjectMockup";
import ProjectModal from "../components/projects/ProjectModal";
import { Project, projects } from "../data/portfolio";
import { cn } from "../utils/cn";
import { fadeUp, staggerContainer } from "../utils/animations";

const projectFilters = [
  { label: "All", keywords: [] },
  {
    label: "React",
    keywords: ["react", "react router", "responsive ui", "seo", "lazy loading", "caching"],
  },
  { label: "React Native", keywords: ["react native", "expo", "mobile"] },
  { label: "Redux", keywords: ["redux"] },
  { label: "APIs", keywords: ["rest", "api", "jwt", "websocket", "crud"] },
  { label: "AI / LLM", keywords: ["ai", "llm", "langchain", "gemini", "rag", "qdrant"] },
  { label: "Database", keywords: ["postgresql", "qdrant", "sql", "sqlalchemy"] },
  { label: "Dashboards", keywords: ["dashboard", "forms", "status", "tract", "deal"] },
  { label: "Service Websites", keywords: ["service", "lead", "ctas", "navigation", "simcorp", "valet"] },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function matchesFilter(project: Project, filter: (typeof projectFilters)[number]) {
  if (filter.label === "All") return true;

  const searchable = normalize(
    [
      project.name,
      project.subtitle,
      project.type,
      project.summary,
      project.role,
      project.stack.join(" "),
      project.features.join(" "),
      project.challenges.join(" "),
    ].join(" ")
  );

  return filter.keywords.some((keyword) =>
    searchable.includes(normalize(keyword))
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects[0];

  const currentFilter =
    projectFilters.find((filter) => filter.label === activeFilter) ??
    projectFilters[0];

  const visible = useMemo(
    () => projects.filter((project) => matchesFilter(project, currentFilter)),
    [currentFilter]
  );

  return (
    <section id="projects" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Projects that show how I solve real product problems."
          description="These projects highlight my work in mobile apps, web platforms, dashboards, service websites, AI-powered workflows, API integrations, and production-style UI development."
        />

        <div
          data-scroll-reveal
          className="gradient-border glass-card mb-14 grid items-center gap-8 overflow-hidden rounded-[3rem] p-5 lg:grid-cols-[1.05fr_0.95fr] lg:p-8"
        >
          <ProjectMockup project={featured} large />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-electric">
              Featured Project
            </p>

            <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              {featured.name}
            </h3>

            <p className="mt-2 text-xl text-slate-300">{featured.subtitle}</p>

            <p className="mt-5 leading-8 text-slate-300">
              {featured.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {featured.stack.slice(0, 8).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelected(featured)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-electric"
            >
              View case study <FiArrowUpRight />
            </button>
          </div>
        </div>

        <div
          data-scroll-reveal
          className="no-scrollbar mb-10 flex gap-3 overflow-x-auto pb-2"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.label)}
              aria-pressed={activeFilter === filter.label}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter.label
                  ? "border-electric bg-electric text-ink"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-electric/50 hover:text-white"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid min-h-[22rem] gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="project-card group gradient-border glass-card overflow-hidden rounded-[2rem] p-4"
            >
              <ProjectMockup project={project} />

              <div className="p-3 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {project.period}
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-1 text-slate-300">{project.subtitle}</p>

                <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-white"
                >
                  Open details <FiArrowUpRight />
                </button>
              </div>
            </motion.article>
          ))}

          {!visible.length && (
            <div className="col-span-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-slate-300">
              No projects found for this filter yet.
            </div>
          )}
        </motion.div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}