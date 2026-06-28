import SEO from "../components/common/SEO";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useGsapReveal from "../hooks/useGsapReveal";
import About from "../sections/About";
import Achievements from "../sections/Achievements";
// import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
// import Testimonials from "../sections/Testimonials";

export default function Home() {
  useGsapReveal();

  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Achievements />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
