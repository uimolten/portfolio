import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BlurText from '../blur-text';

const PricingCta = () => {
    return (
        <section id="pricing-cta" className="py-20 sm:py-24">
            <div className="container mx-auto text-center">
                <BlurText
                    text="Find the Right Plan"
                    className="text-3xl font-bold font-headline sm:text-4xl"
                />
                <BlurText
                    text="I offer a range of flexible packages designed to fit your project's scope and budget. Let's find the perfect fit for your game."
                    className="mt-4 text-muted-foreground max-w-2xl mx-auto"
                    delay={25}
                />
                <div className="mt-8">
                    <Button asChild size="lg" variant="outline" className="transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105">
                        <Link href="/pricing">
                            See Pricing Tiers <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingCta;
