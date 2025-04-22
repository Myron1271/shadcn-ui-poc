"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface PricingFeature {
    text: string;
}

interface PricingPlan {
    id: string;
    name: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: PricingFeature[];
    button: {
        text: string;
        url: string;
    };
}

interface PricingProps {
    heading?: string;
    description?: string;
    plans?: PricingPlan[];
}

const Pricing = ({
                      heading = "Onze Prijzen",
                      description = "Maak een keuze uit maandelijks of jaarlijks",
                      plans = [
                          {
                              id: "standard",
                              name: "Standaard",
                              description: "Voor persoonlijk gebruik",
                              monthlyPrice: "€10",
                              yearlyPrice: "€110",
                              features: [
                                  { text: "1 Project" },
                                  { text: "Toegang tot de standaard componenten" },
                                  { text: "1 week wachttijd op nieuwe updates" },
                              ],
                              button: {
                                  text: "Aanschaffen",
                                  url: "#",
                              },
                          },
                          {
                              id: "pro",
                              name: "Pro",
                              description: "For ondernemers",
                              monthlyPrice: "€25",
                              yearlyPrice: "€280",
                              features: [
                                  { text: "Oneindig projecten" },
                                  { text: "Toegang tot zowel standaard als pro componenten" },
                                  { text: "Meteen toegang tot nieuwe updates" },
                              ],
                              button: {
                                  text: "Aanschaffen",
                                  url: "#",
                              },
                          },
                      ],
                  }: PricingProps) => {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <section className="py-10">
            <div className="container">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
                    <h2 className="text-4xl font-bold text-pretty lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground lg:text-xl">{description}</p>
                    <div className="flex items-center gap-3 text-lg">
                        Maandelijks
                        <Switch
                            checked={isYearly}
                            onCheckedChange={() => setIsYearly(!isYearly)}
                        />
                        Jaarlijks
                    </div>
                    <div className="flex flex-col items-stretch gap-6 md:flex-row">
                        {plans.map((plan) => (
                            <Card
                                key={plan.id}
                                className="flex w-80 flex-col justify-between text-left"
                            >
                                <CardHeader>
                                    <CardTitle>
                                        <p>{plan.name}</p>
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {plan.description}
                                    </p>
                                    <span className="text-4xl font-bold">
                                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <Separator className="mb-6" />
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <a href={plan.button.url} target="_blank">
                                            {plan.button.text}
                                            <ArrowRight className="ml-2 size-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Pricing };
