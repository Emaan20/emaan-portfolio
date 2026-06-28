import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/portfolio";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something premium."
          description="Have a project, dashboard, mobile app, or API-connected product in mind? Send a message and I will get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8"
          >
            <h3 className="text-3xl font-semibold text-white">
              Contact details
            </h3>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition hover:border-electric/40 hover:text-white"
              >
                <FiMail className="shrink-0 text-electric" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 transition hover:border-electric/40 hover:text-white"
              >
                <FiPhone className="shrink-0 text-electric" />
                <span>{profile.phone}</span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                <FiMapPin className="shrink-0 text-electric" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="mt-8 h-[280px] w-full overflow-hidden rounded-[2rem] border border-electric/20 bg-slate-950 shadow-[0_0_40px_rgba(var(--accent-rgb),0.14)]">
              <iframe
                title="Lahore, Pakistan Map"
                src="https://www.google.com/maps?q=Lahore,%20Pakistan&output=embed"
                className="block h-full w-full border-0 grayscale invert-[0.92] contrast-[1.15] opacity-80 transition duration-500 hover:grayscale-0 hover:invert-0 hover:opacity-100"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="gradient-border glass-card rounded-[2.5rem] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-electric/70 focus:bg-white/[0.08]"
                />
              </label>

              <label className="block text-sm font-medium text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-electric/70 focus:bg-white/[0.08]"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-300">
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-electric/70 focus:bg-white/[0.08]"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-slate-300">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-electric/70 focus:bg-white/[0.08]"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:bg-electric disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <FiSend />
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-emerald-300">
                  Message sent successfully. I will get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-300">
                  Something went wrong. Please check Formspree setup or email
                  directly.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}