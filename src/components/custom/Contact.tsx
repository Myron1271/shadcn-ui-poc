import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <section className="py-10 flex justify-center">
            <div className="container">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-5xl">
                                Stuur ons een berichtje!
                            </h1>
                            <p className="mt-5 text-muted-foreground">
                                Heb je vragen of wil je simpel weg iets kwijt? <br/>
                                Stuur ons dan een berichtje via het form hiernaast!
                            </p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center font-semibold lg:text-left">
                                Liever meteen iemand spreken? <br/> Bel ons!
                            </h3>
                            <p className="text-center lg:text-left list-disc">
                                <span className="font-bold rounded-3xl hover:bg-stone-300 transition duration-200 ease-in-out p-2">+123 4567890</span>

                            </p>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
                        <div className="flex gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="firstname">Voornaam</Label>
                                <Input type="text" id="firstname" placeholder="Voornaam" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="lastname">Achternaam</Label>
                                <Input type="text" id="lastname" placeholder="Achternaam" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Jouw Email</Label>
                            <Input type="email" id="email" placeholder="Jouw Email" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="subject">Onderwerp</Label>
                            <Input type="text" id="subject" placeholder="Onderwerp" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Je bericht</Label>
                            <Textarea placeholder="Schrijf je bericht hier." id="message" />
                        </div>
                        <Button className="w-full">Versturen</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
