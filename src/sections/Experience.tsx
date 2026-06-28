import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Practical experience across web, mobile, and AI-driven applications."
          description="I have worked on freelance and product-based projects involving React, React Native, REST APIs, dashboards, authentication, real-time features, and responsive user interfaces."
        />

        <div data-scroll-reveal className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric via-violet to-transparent sm:left-1/2" />

          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative mb-8 grid gap-6 sm:grid-cols-2 ${
                index % 2 === 0 ? "" : "sm:[&>div]:col-start-2"
              }`}
            >
              <div className="absolute left-2 top-6 h-5 w-5 rounded-full border-4 border-ink bg-electric shadow-[0_0_24px_rgba(255,78,205,0.72)] sm:left-[calc(50%-10px)]" />

              <div className="experience-card glass-card rounded-[2rem] p-6 sm:mx-8">
                <p className="text-sm font-semibold text-electric">
                  {item.period}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.role}
                </h3>

                <p className="mt-1 text-slate-300">{item.company}</p>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}