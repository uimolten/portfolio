"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedContent from "@/components/animated-content";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 13,
    title: "Fantasy RPG - Complete HUD",
    category: "RPG HUD",
    description: "A complete HUD with health/mana bars, inventory, leaderboard, and hotbar.",
    longDescription: "This comprehensive UI provides players with all essential information at a glance. It features a prominent health and mana bar, a detailed inventory grid, a competitive leaderboard, and a quick-access hotbar. The design uses sharp, metallic frames and a dark, immersive theme to fit within a classic fantasy RPG setting.",
    imageUrl: "/fantasy-rpg-hud.png",
    tags: ["Roblox", "UI/UX", "RPG", "HUD", "Fantasy"],
  },
  {
    id: 12,
    title: "Fantasy RPG - Character Creator",
    category: "RPG character creation",
    description: "A detailed character creation screen with multiple customization options.",
    longDescription: "This UI provides a deep and immersive character creation experience for a fantasy RPG. Players can navigate through Attributes, Character, and Abilities tabs to define their hero. The design features ornate, thematic frames for each customization category, such as abilities, hair, and body type, ensuring the interface feels cohesive with the game's fantasy world.",
    imageUrl: "/fantasy-rpg-character-creator.png",
    tags: ["Roblox", "UI/UX", "RPG", "Character Creator", "Fantasy"],
  },
  {
    id: 11,
    title: "Fantasy RPG - Options Menu",
    category: "RPG fantasy",
    description: "A dark fantasy-themed options menu with detailed, descriptive panels.",
    longDescription: "This is a comprehensive options interface designed for a fantasy RPG. It features distinct categories like Game, Graphics, and Keyboard settings, each with its own panel that provides detailed descriptions for the selected option. The sharp, angular design and fiery orange highlights create an immersive, thematic experience for the player.",
    imageUrl: "/fantasy-rpg-settings.png",
    tags: ["Roblox", "UI/UX", "RPG", "Settings", "Fantasy"],
  },
  {
    id: 10,
    title: "Fantasy RPG - Inventory & Crafting",
    category: "RPG inventory",
    description: "A detailed inventory and crafting screen for a fantasy RPG, showing item details and required materials.",
    longDescription: "This interface provides a comprehensive view of the player's inventory, separated into categories like 'Consumables' and 'Other Items'. When an item is selected, its details, description, and crafting requirements are displayed clearly on the right. The dark, thematic design with orange highlights maintains a consistent fantasy aesthetic.",
    imageUrl: "/fantasy-rpg-inventory.png",
    tags: ["Roblox", "UI/UX", "RPG", "Inventory", "Crafting"],
  },
  {
    id: 9,
    title: "Fantasy RPG - Skill Tree",
    category: "RPG fantasy",
    description: "An immersive skill tree interface for a fantasy RPG, featuring glowing, dynamic paths.",
    longDescription: "This UI allows players to visualize and unlock new abilities through an interactive skill tree. The design uses vibrant, glowing lines and fantasy-themed icons to create an engaging progression system. It includes detailed descriptions for each node, costs, and a clear path for character development.",
    imageUrl: "/magic-origins-skill-tree.png",
    tags: ["Roblox", "UI/UX", "RPG", "Skill Tree", "Fantasy"],
  },
  {
    id: 8,
    title: "Cartoony Drinks Menu",
    category: "cartoony menu",
    description: "A vibrant and playful drinks menu UI for a restaraunt-style game.",
    longDescription: "This UI features a fun, bubbly design with color and a clean layout, perfect for engaging players in a cafe game. It includes categories for different drink types and detailed item descriptions with prices.",
    imageUrl: "/drinks-menu-ui.png",
    tags: ["Roblox", "UI/UX", "Cartoony", "Menu"],
  },
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
    tags: ["Roblox", "UI/UX", "Modern", "Clean"],
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
              <div className="relative aspect-video w-full overflow-hidden">
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
