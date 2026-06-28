import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { achievements, profile } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";
import profileImage from "../assets/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="I build clean, responsive products with a strong focus on user experience."
          description="I am a MERN Stack Developer passionate about building modern web apps, mobile apps, dashboards, and AI-powered product experiences that are fast, accessible, and easy to use."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gradient-border glass-card relative overflow-hidden rounded-[3rem] p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-violet/10" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-950">
              <div className="absolute inset-0 grid-overlay opacity-40" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-electric/30 to-violet/30 blur-3xl" />

              <img
                src={profileImage}
                alt={`${profile.name} profile`}
                className="relative z-10 h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-x-5 bottom-5 z-20 rounded-[2rem] border border-white/10 bg-black/55 p-5 text-center backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white">
                  {profile.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {profile.title}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xl leading-9 text-slate-200"
            >
              {profile.about}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-8 text-slate-400"
            >
              {profile.journey}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 leading-8 text-slate-400"
            >
              {profile.goal}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                    {item.suffix}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-electric"
              >
                <FiDownload /> Download resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}