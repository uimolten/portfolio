"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedContent from "@/components/animated-content";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 7,
    title: "Heist Game Settings",
    category: "game settings",
    description: "A sleek settings interface with brightness, shadows, and audio controls.",
    longDescription: "This project involved designing a clear and stylish settings menu for an action/heist game. The focus was on readability and ease of use, with toggle switches for various in-game options like brightness, global shadows, mute ambience, and riot/heist music. The clean lines and teal accents provide a modern, tech-focused feel.",
    imageUrl: "/heist-game-settings.png",
    tags: ["Roblox", "UI/UX", "Modern", "Settings"],
  },
  {
    id: 1,
    title: "Project Phantom",
    category: "sci-fi ui",
    description: "Futuristic, holographic UI for a sci-fi RPG.",
    longDescription: "Project Phantom was a commission for a large-scale sci-fi RPG. The goal was to create an immersive, futuristic interface that felt both advanced and intuitive. We used holographic elements and a clean, minimalist design to achieve this.",
    imageUrl: "/project-phantom.png",
    tags: ["Roblox", "UI/UX", "Sci-Fi", "Minimalist"],
  },
  {
    id: 2,
    title: "Candy Kingdom",
    category: "fantasy ui",
    description: "A vibrant and joyful UI for a fantasy-themed simulator.",
    longDescription: "For Candy Kingdom, the client wanted a UI that was as vibrant and engaging as the game world itself. We used bright colors, custom iconography, and playful animations to create a user experience that kids love.",
    imageUrl: "/candy-kingdom.png",
    tags: ["Roblox", "UI", "Fantasy", "Colorful"],
  },
  {
    id: 3,
    title: "Velocity Racing",
    category: "racing game ui",
    description: "A high-speed, modern UI for a competitive racing game.",
    longDescription: "The UI for Velocity Racing needed to be fast, readable, and stylish. We focused on clear typography and dynamic elements that convey speed and competition, ensuring crucial information is available at a glance during high-speed races.",
    imageUrl: "/velocity-racing.png",
    tags: ["Roblox", "UI/UX", "Racing", "Modern"],
  },
  {
    id: 4,
    title: "Petopia",
    category: "simulator game ui",
    description: "A friendly and intuitive interface for a pet collection game.",
    longDescription: "Petopia's UI design is all about being friendly and easy to navigate for a younger audience. We created a soft, rounded design language with clear icons and a simple layout to manage pet collections, shops, and game worlds.",
    imageUrl: "/petopia.png",
    tags: ["Roblox", "UI", "Simulator", "Cute"],
  },
  {
    id: 5,
    title: "Zombie Apocalypse",
    category: "survival game ui",
    description: "A gritty, atmospheric UI for a post-apocalyptic survival game.",
    longDescription: "This project required a dark and gritty aesthetic to match the game's atmosphere. We designed a diegetic UI that feels part of the world, using distressed textures and a minimal color palette to enhance immersion without sacrificing usability.",
    imageUrl: "/zombie-apocalypse.png",
    tags: ["Roblox", "UI/UX", "Survival", "Immersive"],
  },
  {
    id: 6,
    title: "Fashion Stars",
    category: "roleplay game ui",
    description: "An elegant and stylish UI for a fashion-forward roleplaying game.",
    longDescription: "Fashion Stars demanded a sophisticated and stylish interface. We took inspiration from modern fashion magazines and luxury brands to create a clean, elegant UI for character customization, shopping, and social interaction.",
    imageUrl: "/fashion-stars.png",
    tags: ["Roblox", "UI", "Roleplay", "Elegant"],
  },
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
