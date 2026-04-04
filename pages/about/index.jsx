import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";

// About Data
const aboutData = [
    {
        title: "Education",
        info: [
            {
                title: "B.Tech – Textile Technology",
                stage: "Kumaraguru College of Technology, Coimbatore, Tamil Nadu",
                details:
                    "2023 – 2027 (Expected) | CGPA: 8.48 (up to Semester 5)",
            },
        ],
    },
    {
        title: "Skills",
        info: [
            {
                title: "Programming & Web",
                icons: [
                    "Python",
                    "JavaScript",
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "Express.js",
                ],
            },
            {
                title: "Databases & Tools",
                icons: [
                    "MongoDB",
                    "Mongoose",
                    "REST APIs",
                    "Git",
                    "GitHub",
                    "Puppeteer",
                ],
            },
            {
                title: "AI & Computer Vision",
                icons: ["Machine Learning fundamentals", "OpenCV"],
            },
            {
                title: "Design & Others",
                icons: ["Fusion 360", "3D Modeling", "DSA", "OOPS"],
            },
        ],
    },
    {
        title: "Internship",
        info: [
            {
                title: "AI / ML Virtual Internship",
                stage: "EduSkills (AICTE)",
                details: "April 2024 – June 2024 | 10 Weeks",
            },
        ],
    },
    {
        title: "Achievements",
        info: [
            {
                title: "Winner – Code2Duo Programming Competition",
                stage: "KCT Yugam",
            },
            {
                title: "HackerRank Certification",
                stage: "Python",
            },
            {
                title: "Project-Based Learning Certificate",
                stage: "KCT",
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="relative min-h-screen py-20 md:py-28 bg-black overflow-x-hidden">
            {/* ⭐ Moving dots background (same as Home) */}
            <div className="star-field" />

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                {/* Heading Section */}
                <div className="flex flex-col items-center xl:items-start mb-12 xl:mb-16">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 mb-6 xl:mb-8">
                        About <span className="text-accent">Me</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("right", 0.35)}
                        initial="hidden"
                        animate="show"
                        className="max-w-3xl text-base md:text-xl leading-relaxed text-white/90 text-center xl:text-left">
                        B.Tech Textile Technology student passionate about
                        blending textiles with modern technology. Skilled in
                        full-stack development, AI, computer vision, and 3D
                        modeling. Always eager to build innovative projects and
                        solve real-world problems.
                    </motion.p>

                    {/* Resume Button */}
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        animate="show"
                        className="mt-8 md:mt-10">
                        <a
                            href="/My_Resume (1).pdf"
                            download="Durga_Devi_Resume.pdf"
                            className="btn btn-lg border border-accent rounded-full px-10 md:px-12 py-4 md:py-5 hover:bg-accent hover:text-black transition-all duration-300 inline-flex items-center gap-x-4 text-lg md:text-xl font-medium shadow-neon">
                            Download Resume (PDF)
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 md:h-7 md:w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Tabs Section */}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-x-6 xl:gap-x-12 gap-y-4 justify-center xl:justify-start mb-8 md:mb-10">
                        {aboutData.map((item, itemI) => (
                            <div
                                key={itemI}
                                onClick={() => setIndex(itemI)}
                                className={`cursor-pointer capitalize text-base sm:text-lg xl:text-2xl relative whitespace-nowrap transition-all
                                ${
                                    index === itemI
                                        ? "text-accent after:w-full after:bg-accent"
                                        : "text-white"
                                }
                                after:w-10 sm:after:w-16 after:h-[3px] after:bg-white/30 after:absolute after:-bottom-2 after:left-0`}>
                                {item.title}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-y-8 md:gap-y-10 items-center xl:items-start">
                        {aboutData[index].info.map((item, itemI) => (
                            <div
                                key={itemI}
                                className="w-full max-w-5xl flex flex-col md:flex-row gap-x-10 gap-y-5 items-start text-left text-white/90">
                                <div className="font-semibold text-xl md:text-2xl min-w-[220px] text-center md:text-left w-full md:w-auto">
                                    {item.title}
                                </div>

                                <div className="flex flex-col flex-1">
                                    {item.stage && (
                                        <div className="text-accent font-medium text-xl md:text-2xl">
                                            {item.stage}
                                        </div>
                                    )}

                                    {item.details && (
                                        <div className="text-base md:text-lg mt-2 md:mt-3 opacity-90">
                                            {item.details}
                                        </div>
                                    )}
                                </div>

                                {item.icons && (
                                    <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                                        {item.icons.map((icon, iconI) => (
                                            <div
                                                key={iconI}
                                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/85 text-sm md:text-base">
                                                {icon}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
