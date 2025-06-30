import { Twitter, Dribbble, Github } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} UIMolten. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Dribbble" className="text-muted-foreground hover:text-primary transition-colors">
            <Dribbble className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
