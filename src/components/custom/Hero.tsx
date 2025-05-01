import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import shadcnuiLogo from "../../assets/shadcnuiLogo.svg";

interface HeroProps {
    badge?: {
        text: string;
        url: string;
    };
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    image: {
        src: string;
        alt: string;
    };
}

const Hero = ({
                   badge = {
                       text: "Bezoek ShadCN/UI",
                       url: "https://ui.shadcn.com",
                   },
                   heading = "Componenten gemaakt met ShadCN/UI",
                   description = "In deze POC gebruik ik ShadCN/UI. Deze component library is gebaseerd op Tailwind, wat betekent dat je veel vrijheid hebt in de vormgeving.",
                   buttons = {
                       primary: {
                           text: "Bekijk alle componenten",
                           url: "https://ui.shadcn.com/docs/components/accordion",
                       },
                       secondary: {
                           text: "ShadCN/UI is opensource, bekijk het hier op github",
                           url: "https://github.com/shadcn-ui/ui",
                       },
                   },
                   image = {
                       src: shadcnuiLogo,
                       alt: "ShadCN/UI Logo",
                   },
               }: HeroProps) => {
    return (
        <section className="py-10 flex justify-center">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <a href={badge.url} target={"_blank"}>
                                <Badge variant="outline">
                                    {badge.text}
                                    <ArrowUpRight className="ml-2 size-4" />
                                </Badge>
                            </a>
                        )}
                        <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            {description}
                        </p>
                        <div className="flex w-95 flex-col justify-center gap-2 xl:flex-row lg:flex-col sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className={"w-full flex justify-center"}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-75 w-95 sm:w-100 bg-red-200 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
