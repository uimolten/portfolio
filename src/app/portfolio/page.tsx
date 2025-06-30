"use client";

import { useState } from "react";
import type { Project } from "@/types";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectModal from "@/components/project-modal";
import PortfolioSection from "@/components/sections/portfolio";
import AnimatedContent from "@/components/animated-content";


export default function PortfolioPage() {
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
        <section id="portfolio" className="py-20 sm:py-24">
          <div className="container mx-auto">
            <AnimatedContent>
              <h1 className="text-4xl font-bold font-headline text-center sm:text-5xl lg:text-6xl">My Portfolio</h1>
              <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                A selection of my best work. Click on any project to see more details.
              </p>
            </AnimatedContent>
            <PortfolioSection onProjectClick={handleProjectClick} />
          </div>
        </section>
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}
