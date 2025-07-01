"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedContent from "@/components/animated-content";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 7,
    title: "SWAT Game Settings",
    category: "game settings",
    description: "A sleek settings interface with brightness, shadows, and audio controls.",
    longDescription: "This project involved designing a clear and stylish settings menu for an SWAT roleplay game. The focus was on readability and ease of use, with toggle switches for various in-game options like brightness, global shadows, mute ambience, and riot/heist music. The clean lines and teal accents provide a modern, tech-focused feel.",
    imageUrl: "/heist-game-settings.png",
    tags: ["Roblox", "UI/UX", "Modern", "Settings"],
  },
  {
    id: 5,
    title: "SWAT Invite Friend UI",
    category: "Invite Friend",
    description: "A sleek, modern UI for an invite friend feature in a SWAT roleplay game.",
    longDescription: "A sleek, modern UI for an invite friend feature in a SWAT roleplay game, featuring ScrollingFrames when imported",
    imageUrl: "/zombie-apocalypse.png",
    tags: ["Roblox", "UI/UX", "Modern", "Clearn"],
  },
  {
    id: 1,
    title: "Simulator Index UI",
    category: "Cartoony",
    description: "Cartoony Index UI for a simulator game.",
    longDescription: "A colorful cartoony Index UI for a block destroying simulator game.",
    imageUrl: "/project-phantom.png",
    tags: ["Roblox", "UI/UX", "Cartoony", "Simulator"],
  },
  {
    id: 6,
    title: "Simulator Inventory UI",
    category: "simulator",
    description: "Cartoony Inventory UI for a simulator game.",
    longDescription: "A colorful cartoony Inventory UI for a block destroying simulator game.",
    imageUrl: "/fashion-stars.png",
    tags: ["Roblox", "UI", "Simulator", "Cartoony"],
  },
  {
    id: 2,
    title: "Cut in Line HUD",
    category: "Modern",
    description: "A modern and sleek HUD for a cut in line game.",
    longDescription: "A clean and modern HUD UI for a cut in line game, with side buttons.",
    imageUrl: "/candy-kingdom.png",
    tags: ["Roblox", "UI", "Modern", "HUD"],
  },
  {
    id: 3,
    title: "Simple Combat UI",
    category: "Combat",
    description: "A simple HUD for a combat game inspired by KAT and MM2.",
    longDescription: "A simple HUD for a combat game inspired by KAT and MM2. Main focus on clear typography and simple elements that convey speed and competition, ensuring crucial information is available at a glance during combat.",
    imageUrl: "/velocity-racing.png",
    tags: ["Roblox", "UI/UX", "Combat", "Simple"],
  },
  {
    id: 4,
    title: "Wood Settings UI",
    category: "Abstract",
    description: "A sleek and abstract settings UI for a wood crafting game.",
    longDescription: "A simple settings UI for a wood crafting game, with wood patterns, vines, and buttons to create an earthy feel.",
    imageUrl: "/petopia.png",
    tags: ["Roblox", "UI", "Abstract", "Settings"],
  }
];

interface PortfolioSectionProps {
  onProjectClick: (project: Project) => void;
}

const PortfolioSection = ({ onProjectClick }: PortfolioSectionProps) => {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <AnimatedContent key={project.id} className="transition-all" style={{transitionDelay: `${index * 100}ms`}}>
          <Card
            onClick={() => onProjectClick(project)}
            className="overflow-hidden cursor-pointer group transition-all duration-300 bg-card border-border hover:border-primary/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
          >
            <CardContent className="p-0">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.category}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                <p className="mt-2 text-muted-foreground h-10">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedContent>
      ))}
    </div>
  );
};
export default PortfolioSection;
