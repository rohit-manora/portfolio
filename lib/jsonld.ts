import { employers } from "@/data/experience";
import { profile } from "@/data/profile";
import { techs } from "@/data/skills";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./seo";

/**
 * Person + WebSite + ProfilePage structured data.
 * Every value is drawn from the content layer — nothing is asserted here that
 * the page itself does not state.
 */
export function buildJsonLd(): string {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.contact.email}`,
    telephone: profile.contact.phoneHref,
    url: SITE_URL,
    sameAs: [profile.contact.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shri Govindram Seksaria Institute of Technology and Science",
    },
    knowsAbout: techs
      .filter((t) => t.status === "current")
      .map((t) => t.label),
    hasOccupation: employers.map((employer) => ({
      "@type": "Role",
      roleName: employer.title,
      startDate: employer.start,
      ...(employer.end === null ? {} : { endDate: employer.end }),
      worksFor: { "@type": "Organization", name: employer.name },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE_NAME,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage],
  });
}
