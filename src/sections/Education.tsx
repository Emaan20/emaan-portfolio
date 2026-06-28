import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in Computer Science."
          description="My Computer Science degree has helped me build a strong foundation in programming, software engineering, databases, problem-solving, and modern application development."
        />

        <div className="mx-auto max-w-3xl">
          {education.map((item) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="gradient-border glass-card rounded-[2.5rem] p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-electric">{item.period}</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-3 text-lg text-slate-300">{item.institution}</p>
              <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">{item.meta}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
