import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedContent from '@/components/animated-content';
import { ArrowRight } from 'lucide-react';

const PricingCta = () => {
    return (
        <section id="pricing-cta" className="py-20 sm:py-24">
            <AnimatedContent>
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold font-headline sm:text-4xl">
                        Find the Right Plan
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        I offer a range of flexible packages designed to fit your project's scope and budget. Let's find the perfect fit for your game.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" variant="outline" className="transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105">
                            <Link href="/pricing">
                                See Pricing Tiers <ArrowRight className="h-5 w-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};

export default PricingCta;
