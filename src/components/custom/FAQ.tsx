import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

interface FAQProps {
    heading?: string;
    items?: FaqItem[];
}

const FAQ = ({
                  heading = "Meest gestelde vragen:",
                  items = [
                      {
                          question: "Hoe werkt de responsiveness van ShadCN/UI?",
                          answer:
                              "ShadCN/UI maakt gebruik Tailwind, hierin zit een responsive design die te vergeljken is met bootstrap.",
                      },
                      {
                          question: "Is er een Frontend Framework nodig?",
                          answer:
                              "Ja, voor ShadCN/UI is ReactJS nodig.",
                      },
                      {
                          question: "Biedt ShadCN/UI maatwerkmogelijkheden?",
                          answer:
                              "Samen met Tailwind is het mogelijk om aanpassingen in stijl te maken van componenten, daarnaast stelt ShadCN/UI je in staat om de basis van componenten aan te passen.",
                      },
                  ],
              }: FAQProps) => {
    return (
        <section className="py-10 px-10 w-full flex justify-center">
            <div className="container max-w-3xl text-center lg:text-left">
                <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
                    {heading}
                </h1>
                <Accordion type="single" collapsible>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export { FAQ };
