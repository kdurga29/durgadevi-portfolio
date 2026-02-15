import Link from "next/link";
import { RiGithubLine, RiLinkedinLine, RiInstagramLine } from "react-icons/ri";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/kdurga29",
        Icon: RiGithubLine,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/durga-devi-4825a9326",
        Icon: RiLinkedinLine,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/durga_.2903?igsh=MW9ucWk5ZGxva3Jteg==",
        Icon: RiInstagramLine,
    },
];

const Socials = () => {
    return (
        <div className="flex items-center gap-x-6">
            {socials.map(({ name, href, Icon }) => (
                <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={name}
                    className="group relative w-12 h-12 flex items-center justify-center">
                    {/* outer neon aura */}
                    <span
                        aria-hidden
                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300
                        bg-[radial-gradient(circle,rgba(0,255,255,0.45),transparent_60%)]"
                    />

                    {/* animated ring */}
                    <span
                        aria-hidden
                        className="absolute inset-0 rounded-full border border-cyan-300/30
                        scale-90 group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* hover ripple */}
                    <span
                        aria-hidden
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                        animate-pulse bg-cyan-400/10"
                    />

                    {/* icon */}
                    <Icon
                        className="relative text-xl text-white/70
                        group-hover:text-cyan-200 transition-colors duration-300"
                        aria-hidden
                    />
                </Link>
            ))}
        </div>
    );
};

export default Socials;
