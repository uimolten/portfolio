"use client";

import AnimatedContent from "@/components/animated-content";
import { Card } from "@/components/ui/card";
import { Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    href: null,
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Discord",
    handle: "moltennn."
  },
  {
    href: "https://x.com/moltennn_",
    icon: <Twitter className="h-10 w-10 text-primary" />,
    title: "Twitter",
    handle: "@moltennn_"
  }
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 sm:py-24">
            <div className="container mx-auto">
                <AnimatedContent>
                    <h2 className="text-3xl font-bold font-headline text-center sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new projects. The best way to reach me is through one of the platforms below.
                    </p>
                </AnimatedContent>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    {contactLinks.map((link, index) => (
                        <AnimatedContent key={index} className="h-full" style={{transitionDelay: `${index * 100}ms`}}>
                             {link.href ? (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <Card className="p-8 h-full flex flex-col items-center justify-center text-center group transition-all duration-300 bg-card border-border hover:border-primary/50 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                                        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                                            {link.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold font-headline">{link.title}</h3>
                                        <p className="mt-2 text-muted-foreground flex items-center gap-2">
                                            {link.handle}
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </p>
                                    </Card>
                                </a>
                            ) : (
                                <Card className="p-8 h-full flex flex-col items-center justify-center text-center bg-card border-border">
                                    <div className="mb-4">
                                        {link.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold font-headline">{link.title}</h3>
                                    <p className="mt-2 text-muted-foreground flex items-center gap-2">
                                        {link.handle}
                                    </p>
                                </Card>
                            )}
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
