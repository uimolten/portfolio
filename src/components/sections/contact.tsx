"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedContent from "@/components/animated-content";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const ContactSection = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <section id="contact" className="py-20 sm:py-24">
            <div className="container mx-auto">
                <AnimatedContent>
                    <h2 className="text-3xl font-bold font-headline text-center sm:text-4xl">Get In Touch</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </AnimatedContent>
                <AnimatedContent className="mt-12 max-w-xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Regarding a new project" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Tell me more about your project..." className="min-h-[150px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" className="w-full transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-glow-primary">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </AnimatedContent>
            </div>
        </section>
    );
}

export default ContactSection;
