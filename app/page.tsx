import ContactSection from "./sections/contact";
import EducationSection from "./sections/education";
import LandingSection from "./sections/landing";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div className="scroll-smooth container mx-auto px-5">
      {/* landing Section */}
      <LandingSection />

      {/* Horizontal Line */}
      <span className="block w-full h-px bg-sky-500 mx-auto" />

      {/* Education Section */}
      <EducationSection />

      {/* Horizontal Line */}
      <span className="block w-full h-px bg-sky-500 mx-auto" />

      {/* Skills Section */}
      <SkillsSection />

      {/* Horizontal Line */}
      <span className="block w-full h-px bg-sky-500 mx-auto" />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Horizontal Line */}
      <span className="block w-full h-px bg-sky-500 mx-auto" />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
