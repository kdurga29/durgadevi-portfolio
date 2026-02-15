import Link from "next/link";
import { useRouter } from "next/router";
// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiEnvelope,
    HiClipboardDocumentList,
} from "react-icons/hi2";

// Updated nav data
export const navData = [
    { name: "home", path: "/", Icon: HiHome },
    { name: "about", path: "/about", Icon: HiUser },
    { name: "work", path: "/work", Icon: HiViewColumns },
    { name: "assignment", path: "/assignment", Icon: HiClipboardDocumentList },
    { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
    // IMPORTANT: your project uses pages/ so useRouter is safest
    const { pathname } = useRouter();

    return (
        <>
            {/* ===== Desktop (xl+) floating right pill ===== */}
            <nav className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-[60]">
                <div className="relative">
                    {/* outer glow */}
                    <div
                        aria-hidden
                        className="absolute -inset-2 rounded-[28px] blur-xl opacity-50
                        bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.22),transparent_55%)]"
                    />

                    {/* main pill */}
                    <div className="relative flex flex-col items-center gap-y-6 px-3 py-5 rounded-[26px] border border-cyan-300/20 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.10)]">
                        {navData.map((link, i) => {
                            const active = link.path === pathname;

                            return (
                                <Link
                                    href={link.path}
                                    key={i}
                                    className={`relative group w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300
                                    ${
                                        active
                                            ? "text-cyan-200"
                                            : "text-white/70 hover:text-cyan-200"
                                    }`}
                                    aria-label={link.name}>
                                    {/* active glow ring */}
                                    <span
                                        aria-hidden
                                        className={`absolute inset-0 rounded-2xl transition-all duration-300
                                        ${
                                            active
                                                ? "opacity-100 border border-cyan-300/40 shadow-[0_0_25px_rgba(0,255,255,0.25)]"
                                                : "opacity-0"
                                        }`}
                                    />

                                    {/* hover shimmer */}
                                    <span
                                        aria-hidden
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.18),transparent_55%)]"
                                    />

                                    {/* tooltip (desktop only) */}
                                    <div className="absolute right-[62px] hidden group-hover:flex items-center">
                                        <div
                                            className="relative px-3 py-1 rounded-md text-[12px] font-semibold capitalize
                                            bg-black/70 border border-cyan-300/25 text-cyan-100 backdrop-blur-md
                                            shadow-[0_0_18px_rgba(0,255,255,0.18)]">
                                            {link.name}
                                            <div
                                                aria-hidden
                                                className="absolute -right-2 top-1/2 -translate-y-1/2
                                                border-y-[6px] border-y-transparent border-l-[8px] border-l-cyan-200/60"
                                            />
                                        </div>
                                    </div>

                                    {/* icon */}
                                    <link.Icon
                                        className="text-[22px]"
                                        aria-hidden
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* ===== Mobile bottom dock ===== */}
            <nav className="xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-[560px]">
                <div className="relative">
                    {/* glow */}
                    <div
                        aria-hidden
                        className="absolute -inset-2 rounded-3xl blur-xl opacity-50
                        bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.30),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.20),transparent_55%)]"
                    />
                    {/* dock */}
                    <div
                        className="relative flex items-center justify-between px-5 sm:px-6 py-3 rounded-3xl
                        bg-black/45 backdrop-blur-xl border border-cyan-300/20
                        shadow-[0_0_30px_rgba(0,255,255,0.10)]">
                        {navData.map((link, i) => {
                            const active = link.path === pathname;

                            return (
                                <Link
                                    href={link.path}
                                    key={i}
                                    className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
                                    ${
                                        active
                                            ? "text-cyan-200"
                                            : "text-white/75 hover:text-cyan-200"
                                    }`}
                                    aria-label={link.name}>
                                    <span
                                        aria-hidden
                                        className={`absolute inset-0 rounded-2xl transition-all duration-300
                                        ${
                                            active
                                                ? "opacity-100 border border-cyan-300/40 shadow-[0_0_22px_rgba(0,255,255,0.22)]"
                                                : "opacity-0"
                                        }`}
                                    />
                                    <link.Icon
                                        className="text-[24px]"
                                        aria-hidden
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
