import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { services } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Services I offer for modern web and mobile development."
          description="I help clients build responsive websites, React applications, React Native mobile apps, dashboards, API-connected interfaces, bug fixes, UI improvements, and performance-focused frontend solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="service-card group glass-card relative min-h-[17rem] overflow-hidden rounded-[2rem] p-6"
            >
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-violet/20" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-electric">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowUpRight className="text-2xl text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-electric" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}