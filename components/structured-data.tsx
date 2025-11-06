export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    alternateName: "smartcraze",
    url: "https://surajv.me",
    image: "https://surajv.me/opengraph-image.png",
    sameAs: [
      "https://github.com/smartcraze",
      "https://twitter.com/surajv354",
      "https://linkedin.com/in/surajv354",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Full Stack Development",
      "GenAI",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Web Development",
      "DevOps",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
