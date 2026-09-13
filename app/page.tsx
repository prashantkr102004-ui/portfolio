import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Archive } from "@/components/sections/archive";
import { Contact } from "@/components/sections/contact";
export default function Home() { return <main id="main-content"><div className="page-container"><Hero /><FeaturedWork /><About /><Skills /><Archive /></div><Contact /></main>; }
