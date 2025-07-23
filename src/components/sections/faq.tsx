import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlurText from "../blur-text";

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
        question: "How do I contact you?",
        answer: 'The best way is to reach out on Discord. Alternatively, you can use the links provided on the <a href="/#contact" class="text-primary hover:underline font-semibold">contact section</a> below.'
    }
]

const FaqSection = () => {
    return (
        <section id="faq" className="py-20 sm:py-24 bg-card/20">
            <div className="container mx-auto">
                <div className="text-center">
                    <BlurText
                        text="Frequently Asked Questions"
                        className="text-3xl font-bold font-headline sm:text-4xl"
                    />
                    <BlurText
                        text="Have questions? Here are some of the most common ones I receive."
                        className="mt-4 text-muted-foreground max-w-2xl mx-auto"
                        delay={25}
                    />
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
export default FaqSection;
