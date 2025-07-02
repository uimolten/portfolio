"use client";

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import AnimatedContent from '@/components/animated-content';
import { cn } from '@/lib/utils';

const pricingTiers = [
    {
        name: "Basic",
        price: "$35",
        description: "Perfect for simple UI needs and small projects.",
        features: [
            "Up to 5 unique UI frames",
            "Up to 10 miscellaneous items",
            "Imported Into Roblox Studio",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Standard",
        price: "$100",
        description: "The most popular choice for most game projects.",
        features: [
            "Up to 15 Unique UI Frames",
            "Full UI design system",
            "Includes basic animations"
        ],
        cta: "Choose Standard",
        highlighted: false,
    },
    {
        name: "Premium",
        price: "Custom Quote",
        description: "Complete UI/UX overhaul for large-scale games.",
        features: [
            "Unlimited UI frames",
            "UI Animations & SFX",
            "Priority support",
            "Unlimited revisions",
        ],
        cta: "Book a Consultation",
        highlighted: false,
    }
];

const PricingSection = () => {
    const scrollTo = (id: string) => {
        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start">
            {pricingTiers.map((tier, index) => (
                <AnimatedContent key={tier.name} className="h-full" style={{transitionDelay: `${index * 100}ms`}}>
                    <Card className={cn(
                        "flex flex-col h-full",
                        tier.highlighted && "border-2 border-primary shadow-glow-primary"
                    )}>
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                            <p className="text-4xl font-bold text-primary pt-4">{tier.price}</p>
                            <CardDescription className="pt-2">{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                size="lg"
                                className={cn("w-full transition-all duration-300 hover:scale-105", tier.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-primary" : "bg-primary/10 text-primary hover:bg-primary/20")}
                                onClick={() => scrollTo('contact')}
                            >
                                {tier.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                </AnimatedContent>
            ))}
        </div>
    );
};

export default PricingSection;
