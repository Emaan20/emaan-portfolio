import { Helmet } from "react-helmet-async";
import { profile } from "../../data/portfolio";

type SEOProps = {
  title?: string;
  description?: string;
};

export default function SEO({
  title = `${profile.name} | MERN Stack Developer`,
  description = "Premium MERN Stack Developer portfolio for React, Next.js, Node.js, React Native, REST APIs, Firebase, MongoDB, and AI-first product workflows.",
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: profile.location,
    knowsAbout: ["React.js", "Next.js", "Node.js", "MongoDB", "React Native", "TypeScript", "REST APIs"],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
