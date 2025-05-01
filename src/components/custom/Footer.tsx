import Logo from "../../assets/shadcnuiLogo.svg"

const sections = [
    {
        title: "POC",
        links: [
            { name: "Home", href: "/" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help", href: "/" },
        ],
    },
];

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
}
const Footer = ({
                     logo = {
                         url: "https://ui.shadcn.com/docs/components/accordion",
                         src: Logo,
                         alt: "logo",
                         title: "ShadCN/UI",
                     },
                 }: FooterProps) => {
    return (
        <section className="py-20 flex justify-center">
            <div className="container">
                <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href="https://ui.shadcn.com/docs/components/accordion">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="h-8"
                                />
                            </a>
                            <h2 className="text-xl font-semibold">{logo.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Bezoek ShadCN/UI voor de componenten gebruikt in deze POC.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-6 font-bold">{section.title}</h3>
                                <ul className="space-y-4 text-sm text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-white"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                    <p>© ShadCN/UI.</p>
                    <ul className="flex justify-center gap-4 lg:justify-start">
                        <li className="hover:text-stone-400">
                            <a href="#"> Terms and Conditions</a>
                        </li>
                        <li className="hover:text-stone-400">
                            <a href="#"> Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer };
