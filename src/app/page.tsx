import { SiteHeader } from "@/components/nav/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
