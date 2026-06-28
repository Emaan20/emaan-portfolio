import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { SkillCategory, skills } from "../data/portfolio";
import { cn } from "../utils/cn";
import { fadeUp, staggerContainer } from "../utils/animations";

const categories: Array<SkillCategory | "All"> = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Mobile",
  "Languages",
  "Tools",
  "Others",
];

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");

  const visibleSkills = useMemo(
    () =>
      active === "All"
        ? skills
        : skills.filter((skill) => skill.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills I use to build real-world products."
          description="My skill set covers frontend development, mobile apps, backend integrations, databases, API workflows, AI tools, and modern development practices."
        />

        <div
          data-scroll-reveal
          className="no-scrollbar mb-10 flex gap-3 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                "shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition",
                active === category
                  ? "border-electric bg-electric text-ink"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-electric/50 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid min-h-[12rem] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                layout
                variants={fadeUp}
                key={`${active}-${skill.name}`}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                className="skill-card group gradient-border glass-card relative overflow-hidden rounded-[1.75rem] p-5"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-violet/20" />

                <div className="relative flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl text-electric transition group-hover:scale-110 group-hover:text-white">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}