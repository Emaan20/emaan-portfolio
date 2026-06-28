import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { certifications } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Proof points and practical certification-ready areas."
          description="The CV does not list formal certificates, so this section avoids inventing credentials and presents project-backed skill proof that can be replaced with certificates later."
        />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article key={cert.title} variants={fadeUp} whileHover={{ y: -8 }} className="group glass-card rounded-[2rem] p-6">
              <p className="text-sm font-semibold text-electric">{cert.status}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{cert.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{cert.issuer}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-electric/70 to-transparent" />
              <p className="mt-4 text-sm text-slate-500 opacity-0 transition group-hover:opacity-100">Hover reveal: replace this card with formal certificate details when available.</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
