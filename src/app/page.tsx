"use client";

import { useState } from "react";
import type { Project } from "@/types";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import PricingSection from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import ProjectModal from "@/components/project-modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection onProjectClick={handleProjectClick} />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}
