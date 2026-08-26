import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SkipLink } from "@/components/primitives/SkipLink";
import { GridBackdrop } from "@/components/primitives/GridBackdrop";
import { site, resumeSkillIds, getSkill, currentRole, getBrand } from "@/data";

const sans = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jb" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ehlops.com"),
  title: {
    default: site.seo.title,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.seo.keywords],
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "profile",
    firstName: "Sam",
    lastName: "Ehlers",
    username: "EhlOps",
    url: site.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function PersonJsonLd() {
  const whoop = getBrand("whoop");
  const northeastern = getBrand("northeastern");
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: currentRole?.role ?? site.role,
    address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA" },
    alumniOf: { "@type": "CollegeOrUniversity", name: northeastern.name, url: northeastern.href },
    worksFor: { "@type": "Organization", name: whoop.name, url: whoop.href },
    knowsAbout: resumeSkillIds.map((id) => getSkill(id)?.name).filter(Boolean),
    sameAs: site.socials.map((s) => s.href),
  };
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        {/* Sets `.js` before first paint so [data-reveal] can safely default
            to hidden — see the no-JS guard in globals.css. Without this, a
            visitor with JS disabled would see a permanently invisible page. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <PersonJsonLd />
      </head>
      <body className="bg-base font-sans text-ink antialiased">
        <SkipLink />
        <GridBackdrop variant="page" />
        {children}
      </body>
    </html>
  );
}
