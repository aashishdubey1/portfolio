import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full text-slate-300 mx-auto">
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <ProjectList />
      <Skills />
      <ContactMe />
    </div>
  ) 
}
