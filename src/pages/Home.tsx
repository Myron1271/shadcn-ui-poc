import {Pricing} from "@/components/custom/Pricing.tsx";
import {Hero} from "@/components/custom/Hero.tsx";

export function Home() {
    return (
        <>
            <div className={"heroSection flex justify-center bg-gray-100"}>
                <Hero />
            </div>
            <div className={"pricingSection flex justify-center"}>
                <Pricing/>
            </div>
        </>
    );
}