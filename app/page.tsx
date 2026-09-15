import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main id="main-content">
      <div className="page-container">
        <Hero />
        <FeaturedWork />
        <About />
        <Skills />
      </div>
      <Contact />
    </main>
  );
}
