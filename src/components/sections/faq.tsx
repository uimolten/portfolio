import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedContent from "@/components/animated-content";

const faqs = [
    {
        question: "What is your design process like?",
        answer: "My process starts with understanding your vision and requirements. We'll then move to wireframing and concept design, followed by high-fidelity mockups. I ensure you're involved at every stage for feedback and revisions."
    },
    {
        question: "How long does a typical commission take?",
        answer: "The timeline depends on the complexity of the project. A basic package might take 1-2 weeks, while a premium, full-game UI overhaul could take 4-6 weeks. I'll provide a more accurate estimate after our initial discussion."
    },
    {
        question: "What tools do you use for UI design?",
        answer: "I primarily use Figma for designing and prototyping. For in-game implementation, I am proficient with Roblox Studio and can provide you with fully scaled and scripted UI elements if required."
    },
    {
        question: "Can you also script the UI in Roblox?",
        answer: "Yes, I offer UI scripting as part of my premium packages or as an add-on service. This includes making the UI fully functional, responsive, and animated within Roblox Studio."
    },
    {
        question: "What are your payment terms?",
        answer: "I typically require a 50% upfront payment to begin work, with the remaining 50% due upon completion and your final approval. I accept payment through various methods, which we can discuss."
    }
]

const FaqSection = () => {
    return (
        <section id="faq" className="py-20 sm:py-24 bg-card/20">
            <div className="container mx-auto">
                <AnimatedContent>
                    <h2 className="text-3xl font-bold font-headline text-center sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                        Have questions? Here are some of the most common ones I receive.
                    </p>
                </AnimatedContent>
                <AnimatedContent className="mt-12 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedContent>
            </div>
        </section>
    );
}
export default FaqSection;
