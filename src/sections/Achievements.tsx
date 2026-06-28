import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { achievements } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones that reflect my growth."
          description="A snapshot of my projects, technologies, and recognition as I continue growing as a software engineer."
        />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <motion.div key={item.label} variants={fadeUp} whileHover={{ scale: 1.04 }} className="gradient-border glass-card rounded-[2rem] p-8 text-center">
              <p className="text-5xl font-semibold text-white">{item.value}{item.suffix}</p>
              <p className="mt-3 text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
