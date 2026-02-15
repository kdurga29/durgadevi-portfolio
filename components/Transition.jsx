import { motion } from "framer-motion";

const Transition = () => {
    const slide = {
        initial: { x: "120%", skewX: -12, scaleX: 1.08 },
        animate: { x: "-120%", skewX: 0, scaleX: 1 },
        exit: { x: ["-120%", "0%", "120%"], skewX: [0, -8, -12] },
    };

    const sweep = {
        initial: { x: "140%", opacity: 0 },
        animate: { x: "-140%", opacity: 0.55 },
        exit: { x: ["-140%", "0%", "140%"], opacity: [0, 0.7, 0] },
    };

    const glowPulse = {
        initial: { opacity: 0 },
        animate: { opacity: [0.0, 0.22, 0.0] },
        exit: { opacity: [0.0, 0.28, 0.0] },
    };

    const ease = [0.76, 0, 0.24, 1];

    return (
        <>
            {/* Deep space base */}
            <motion.div
                aria-hidden
                className="fixed inset-0 z-10 bg-black"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.82, ease }}
            />

            {/* Neon cyan sheet */}
            <motion.div
                aria-hidden
                className="fixed inset-0 z-20 bg-gradient-to-r from-cyan-500/28 via-transparent to-cyan-500/16"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.06, duration: 0.78, ease }}
            />

            {/* Electric green sheet (subtle, futuristic) */}
            <motion.div
                aria-hidden
                className="fixed inset-0 z-30 bg-gradient-to-r from-emerald-400/18 via-transparent to-emerald-400/10 backdrop-blur-[2px]"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.12, duration: 0.74, ease }}
            />

            {/* Laser sweep (pure cyan/white) */}
            <motion.div
                aria-hidden
                className="fixed inset-0 z-40 pointer-events-none"
                variants={sweep}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.15, duration: 0.7, ease: "easeInOut" }}>
                <div className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-3xl" />
                <div className="absolute inset-y-0 w-[18%] left-[25%] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-2xl" />
            </motion.div>

            {/* Glow pulse (like energy discharge) */}
            <motion.div
                aria-hidden
                className="fixed inset-0 z-45 pointer-events-none"
                variants={glowPulse}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.12, duration: 0.6, ease: "easeInOut" }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.20),rgba(0,0,0,0)_55%)]" />
            </motion.div>

            {/* Scanlines (neon cyber) */}
            <div
                aria-hidden
                className="fixed inset-0 z-50 pointer-events-none mix-blend-screen opacity-[0.09]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            rgba(0,255,255,0.12) 0px,
                            rgba(0,255,255,0.12) 1px,
                            rgba(0,0,0,0) 2px,
                            rgba(0,0,0,0) 5px
                        )
                    `,
                }}
            />

            {/* Tiny noise grain (no svg, no errors) */}
            <div
                aria-hidden
                className="fixed inset-0 z-[55] pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 7px)",
                    mixBlendMode: "overlay",
                }}
            />
        </>
    );
};

export default Transition;
