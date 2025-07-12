"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl bg-background border-border p-8">
        <DialogHeader>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
             <Image src={project.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={project.category} />
          </div>
          <DialogTitle className="text-3xl font-headline">{project.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <DialogDescription asChild>
            <p className="pt-4 text-base text-foreground/80">
                {project.longDescription}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
