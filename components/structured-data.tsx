export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    alternateName: ["smartcraze", "surajv354", "surajv.dev"],
    url: "https://surajv.dev",
    image: "https://surajv.dev/opengraph-image.png",
    sameAs: [
      "https://github.com/smartcraze",
      "https://twitter.com/surajv354",
      "https://x.com/surajv354",
      "https://linkedin.com/in/surajv354",
      "https://instagram.com/surajv354",
    ],
    jobTitle: "Full Stack Developer",
    description: "Full Stack & GenAI Developer specializing in React, Next.js, Node.js, TypeScript, and AI/ML. Building innovative solutions and modern web applications.",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
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
      "JavaScript",
      "Web Development",
      "DevOps",
      "Cloud Computing",
      "Python",
      "Rust",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
    ],
    knowsLanguage: ["en-US", "hi-IN"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
    },
    award: [
      "Smart India Hackathon 2024 Finalist",
      "Warpspeed Hackathon Participant",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "smartcraze | surajv.dev",
    alternateName: ["surajv.dev", "smartcraze", "smartcraze portfolio", "Suraj Vishwakarma Portfolio"],
    url: "https://surajv.dev",
    description: "Portfolio website of smartcraze (Suraj Vishwakarma), showcasing full stack development projects, GenAI experiments, and software engineering work.",
    author: {
      "@type": "Person",
      name: "Suraj Vishwakarma",
      alternateName: "smartcraze",
      url: "https://surajv.dev",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://surajv.dev/projects?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://surajv.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://surajv.dev/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Docs",
        item: "https://surajv.dev/docs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
