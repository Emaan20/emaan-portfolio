import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { testimonials } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients and collaborators can expect from working with me."
          description="I focus on clear communication, clean execution, responsive design, reliable delivery, and practical solutions that make products easier to use and maintain."
        />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <motion.figure key={item.quote} variants={fadeUp} className="glass-card rounded-[2rem] p-8">
              <blockquote className="text-xl leading-9 text-white">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
