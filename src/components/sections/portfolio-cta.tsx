import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlurText from '../blur-text';

const PortfolioCta = () => {
    return (
        <section id="portfolio-cta" className="py-20 sm:py-24 bg-card/20">
            <div className="container mx-auto text-center">
                 <BlurText
                    text="Explore My Work"
                    className="text-3xl font-bold font-headline sm:text-4xl"
                />
                <BlurText
                    text="Dive into a curated selection of my UI/UX design projects for various Roblox games. See how I transform ideas into immersive player experiences."
                    className="mt-4 text-muted-foreground max-w-2xl mx-auto"
                    delay={25}
                />
                <div className="mt-8">
                    <Button asChild size="lg" className="transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-glow-primary">
                        <Link href="/portfolio">
                            View Portfolio <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCta;
