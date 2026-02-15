import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import Header from "../components/Header";

const FULL_NAME = "Durga Devi K";

const Home = () => {
    const [typedName, setTypedName] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            setTypedName(FULL_NAME.slice(0, i + 1));
            i++;
            if (i >= FULL_NAME.length) clearInterval(t);
        }, 110);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const c = setInterval(() => setShowCursor((p) => !p), 500);
        return () => clearInterval(c);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* ✅ STAR FIELD */}
            <div className="star-field" />

            {/* Header only on Home */}
            <Header />

            {/* cinematic overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/28 via-black/35 to-black/85" />
            <div className="pointer-events-none absolute -top-52 -left-52 w-[760px] h-[760px] bg-accent/14 blur-3xl rounded-full opacity-70" />
            <div className="pointer-events-none absolute -bottom-60 -right-60 w-[820px] h-[820px] bg-white/10 blur-3xl rounded-full opacity-45" />

            {/* subtle grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]
                [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)]
                [background-size:110px_110px]"
            />

            {/* CONTENT */}
            <div className="relative z-10 container mx-auto px-6 xl:px-0">
                <div className="min-h-screen pt-28 xl:pt-0 flex items-center">
                    {/* ✅ tighter max width and tighter columns */}
                    <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-y-12 xl:gap-y-0 xl:gap-x-10 items-center">
                        {/* LEFT TEXT */}
                        <div className="text-center xl:text-left">
                            <motion.h1
                                variants={fadeIn("down", 0.2)}
                                initial="hidden"
                                animate="show"
                                className="
                                leading-tight
                                font-bold
                                text-[40px]
                                sm:text-[52px]
                                md:text-[64px]
                                lg:text-[72px]
                                xl:text-[84px]
                                2xl:text[96px]">
                                Hi, I&apos;m
                                <br />
                                <span className="text-accent font-extrabold tracking-wide drop-shadow-[0_0_18px_rgba(0,255,255,0.45)]">
                                    {typedName}
                                    <span className="ml-1">
                                        {showCursor ? "|" : "\u00A0"}
                                    </span>
                                </span>
                            </motion.h1>

                            {/* accent line */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "160px", opacity: 1 }}
                                transition={{
                                    delay: 0.25,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="mx-auto xl:mx-0 mt-6 h-[2px] rounded-full bg-accent/70 shadow-neon"
                            />

                            {/* ✅ wider paragraph so it doesn't look "floating" */}
                            <motion.p
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                animate="show"
                                className="
                                    mt-8
                                    max-w-[620px]
                                    mx-auto xl:mx-0
                                    text-[16px]
                                    md:text-[18px]
                                    lg:text-[19px]
                                    text-white/80
                                    leading-[1.8]
                                ">
                                B.Tech Textile Technology student at Kumaraguru
                                College of Technology (CGPA 8.48). Passionate
                                full-stack developer & AI enthusiast skilled in
                                Next.js, React, Python, OpenCV, web scraping,
                                MongoDB, and 3D modeling. Building innovative
                                solutions at the intersection of textiles,
                                technology, and computer vision.
                            </motion.p>

                            <motion.div
                                variants={fadeIn("down", 0.45)}
                                initial="hidden"
                                animate="show"
                                className="mt-10 flex justify-center xl:justify-start">
                                <ProjectsBtn />
                            </motion.div>
                        </div>

                        {/* RIGHT PHOTO (NO IMAGE ANIMATION) */}
                        <div className="relative flex items-center justify-center xl:justify-end">
                            <motion.div
                                variants={fadeIn("up", 0.25)}
                                initial="hidden"
                                animate="show"
                                className="relative w-[300px] sm:w-[360px] md:w-[420px] xl:w-[440px] aspect-[3/4]">
                                {/* background particles etc (outside photo box is ok) */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-explosion bg-cover bg-center bg-no-repeat mix-blend-color-dodge opacity-25"
                                />
                                <ParticlesContainer />

                                {/* ✅ static neon glow only (no animation) */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-6 rounded-[42px]
                                    bg-[radial-gradient(circle_at_30%_25%,rgba(0,255,255,0.20),transparent_60%),radial-gradient(circle_at_70%_75%,rgba(0,255,255,0.12),transparent_55%)]
                                    blur-2xl opacity-70"
                                />

                                {/* frame */}
                                <div className="relative w-full h-full rounded-[34px] overflow-hidden">
                                    {/* outer neon border */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 rounded-[34px] border border-cyan-200/25
                                        shadow-[0_0_0_1px_rgba(0,255,255,0.14),0_0_40px_rgba(0,255,255,0.10)]"
                                    />

                                    {/* inner glass */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-white/[0.02] "
                                    />

                                    {/* ✅ high-quality image, NO animation */}
                                    <img
                                        src="/Profile.png"
                                        alt="Durga Devi K"
                                        fill
                                        Priority
                                        quality={100}
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 420px, 460px"
                                        className="object-cover object-center"
                                        style={{imageRendering:"auto"}}
                                    />

                                    {/* vignette */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0
                                        bg-[radial-gradient(circle_at_50%_22%,transparent_30%,rgba(0,0,0,0.62)_78%)]"
                                    />

                                    {/* corner highlight */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72
                                        bg-cyan-200/10 blur-3xl rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* scanlines (subtle) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.045]
                [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]
                [background-size:100%_7px]"
            />
        </div>
    );
};

export default Home;
