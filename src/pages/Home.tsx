import {Pricing} from "@/components/custom/Pricing.tsx";
import {Hero} from "@/components/custom/Hero.tsx";
import {FAQ} from "@/components/custom/FAQ.tsx";
import {Contact} from "@/components/custom/Contact.tsx";
import {Footer} from "@/components/custom/Footer.tsx";

export function Home() {
    return (
        <>
            <div className={"heroSection bg-gray-100"}>
                <Hero />
            </div>
            <div className={"pricingSection"}>
                <Pricing/>
            </div>
            <div className={"FAQSection bg-gray-100"}>
                <FAQ />
            </div>
            <div className={"ContactForm"}>
                <Contact />
            </div>
            <div className={"bg-neutral-800 text-white"}>
                <Footer />
            </div>
        </>
    );
}