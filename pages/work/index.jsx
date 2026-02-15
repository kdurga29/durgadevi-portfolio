import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
    const projects = [
        {
            title: "TagSnag – Price Tracking Platform",
            description:
                "Developed a web-based platform to track product prices on Myntra and notify users when prices drop. Implemented automated price monitoring using web scraping to remove repeated manual price checking. Built a complete full-stack workflow connecting the frontend, backend APIs, database, and email alert system.",
            technologies: "Next.js, Node.js, Puppeteer, MongoDB, Email Alerts",
            link: "https://github.com/kdurga29/tagsnag",
        },
        {
            title: "Face Biometric System",
            description:
                "Developed a face-based biometric authentication system using Python and OpenCV. Implemented face detection and recognition to enable secure user identification. Automated face registration and verification using real-time camera input.",
            technologies: "Python, OpenCV, Face Recognition",
            link: "https://github.com/kdurga29/face-biometric-system",
        },
        {
            title: "Collision Avoidance System for Autonomous Vehicles",
            description:
                "Team project: Developed an obstacle detection and avoidance system to enhance safety in autonomous vehicle navigation. Applied Ackermann steering geometry to model realistic vehicle turning behavior. Improved turning accuracy and navigation safety through simulation-based testing.",
            technologies: "Simulation Tools, Ackermann Geometry",
        },
        {
            title: "ThermaCocoon – Thermal Insulation Jacket",
            description:
                "Team project: Designed a multi-layer nonwoven jacket to provide effective thermal insulation in cold environments. Combined passive insulation materials with an active heating mechanism for improved thermal comfort. Integrated a solid polymer electrolyte battery to support controlled heating functionality.",
            technologies: "Textile Design",
        },
    ];

    return (
        <div className="h-full py-28 md:py-32 flex items-center overflow-hidden relative">
            {/* Cinematic floating backdrop (no content changes) */}
            <div className="pointer-events-none absolute inset-0 -z-0">
                {/* soft hologram blobs */}
                <motion.div
                    className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-accent/10 blur-3xl"
                    animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-48 -right-44 w-[620px] h-[620px] rounded-full bg-accent/10 blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -25, 0] }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />

                {/* subtle grid */}
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col xl:flex-row gap-x-10 gap-y-12">
                    {/* Intro */}
                    <div className="text-center xl:text-left xl:w-[30vw] flex flex-col">
                        <motion.h2
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-12">
                            My <span className="text-accent">Projects</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-6 max-w-[520px] mx-auto xl:mx-0 text-lg">
                            A selection of my work combining textile technology,
                            full-stack development, AI, and computer vision.
                        </motion.p>

                        {/* small animated “signal” element */}
                        <motion.div
                            variants={fadeIn("up", 0.55)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="hidden xl:flex items-center gap-3 mt-6 text-white/70">
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent shadow-neon" />
                            <span className="text-sm tracking-wide">
                                Signal: projects streaming…
                            </span>
                        </motion.div>
                    </div>

                    {/* Project “timeline grid” */}
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[70%]">
                        {/* timeline rail */}
                        <div className="relative">
                            <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-white/10" />
                            <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-accent/20 blur-sm" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
                                {projects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeIn(
                                            "up",
                                            0.25 + idx * 0.12
                                        )}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="group relative">
                                        {/* node on rail */}
                                        <div className="hidden md:block absolute -left-[2px] top-8">
                                            <div className="w-3.5 h-3.5 rounded-full bg-accent shadow-neon" />
                                        </div>

                                        {/* “holo panel” (not just a box) */}
                                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
                                            {/* animated scan line */}
                                            <motion.div
                                                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                animate={{
                                                    y: ["-40%", "140%"],
                                                }}
                                                transition={{
                                                    duration: 2.2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}>
                                                <div className="h-20 w-full bg-gradient-to-b from-transparent via-accent/15 to-transparent blur-[1px]" />
                                            </motion.div>

                                            {/* top accent strip */}
                                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-70" />

                                            <div className="p-6 md:p-7">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="text-xl md:text-[22px] font-bold text-accent leading-snug">
                                                        {project.title}
                                                    </h3>

                                                    {/* floating index badge */}
                                                    <div className="shrink-0">
                                                        <motion.div
                                                            className="w-10 h-10 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 font-semibold"
                                                            whileHover={{
                                                                scale: 1.06,
                                                                rotate: 2,
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 260,
                                                                damping: 16,
                                                            }}>
                                                            {String(
                                                                idx + 1
                                                            ).padStart(2, "0")}
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                <p className="text-white/80 mt-4 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                {/* tech “chips” */}
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {project.technologies
                                                        .split(",")
                                                        .map((t, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-black/30 text-white/70">
                                                                {t.trim()}
                                                            </span>
                                                        ))}
                                                </div>

                                                <div className="mt-6 flex items-center justify-between">
                                                    {project.link ? (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-sm md:text-base text-white/85 hover:text-white transition-colors">
                                                            <span className="px-4 py-2 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent/15 transition-colors">
                                                                View on GitHub →
                                                            </span>
                                                        </a>
                                                    ) : (
                                                        <span className="text-sm text-white/50 italic">
                                                            No Repository
                                                        </span>
                                                    )}

                                                    {/* subtle hover hint */}
                                                    <span className="hidden md:inline text-xs text-white/35 group-hover:text-white/55 transition-colors">
                                                        
                                                    </span>
                                                </div>
                                            </div>

                                            {/* corner glow */}
                                            <div className="pointer-events-none absolute -bottom-16 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Work;
