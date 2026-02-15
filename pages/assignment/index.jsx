import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const assignments = [
    {
        title: "Geometry Dash Game",
        description:
            "Built a Geometry Dash style game in Scratch with timing-based obstacles, smooth movement",
        media: [
            {
                type: "video",
                src: "/Assignments/GeometryDash.mp4",
                caption: "Gameplay demo (Scratch)",
            },
        ],
        pdf: {
            // Portfolio-Durgadevi/public/Scratch.pdf
            src: "/Scratch.pdf",
            name: "Scratch.pdf",
        },
    },
    {
        title: "Location Tracker App",
        platform: "MIT App Inventor",
        description:
            "A location tracker app: when the button is clicked, it fetches and shows the current location.",
        media: [
            {
                type: "image",
                // NOTE: your filename has two dots. Keep it exactly.
                src: "/Assignments/LocationTracker..jpeg",
                caption: "App screenshot",
            },
        ],
        pdf: {
            // Portfolio-Durgadevi/public/location tracker.pdf
            // safest to encode space
            src: "/location%20tracker.pdf",
            name: "location tracker.pdf",
        },
    },
    {
        title: "Water Bottle (3D Design)",
        platform: "Fusion 360",
        description:
            "Designed a 1 Litre water bottle model in Fusion 360 with clean surfaces and realistic proportions.",
        media: [
            {
                type: "video",
                src: "/Assignments/fusion360.mp4",
                caption: "Fusion 360 design video",
            },
            {
                type: "image",
                src: "/Assignments/Waterbottle.jpeg",
                caption: "Final render / model image",
            },
        ],
        pdf: {
            // Portfolio-Durgadevi/public/Water bottle.pdf
            src: "/Water%20bottle.pdf",
            name: "Water bottle.pdf",
        },
    },
    {
        title: "Password Door Lock System",
        platform: "TinkerCad (Arduino)",
        description:
            "Password-protected door lock system. Correct password unlocks, wrong password denies access.",
        // ✅ Your requested assembly order:
        // 1) TinkerCad.png
        // 2) enterpassword.png
        // 3) WrongPassword.png
        // 4) Dooropen.png
        // 5) Tinkercad.webm
        media: [
            {
                type: "image",
                src: "/Assignments/TinkerCad.png",
                caption: "1) Circuit / Assembly",
            },
            {
                type: "image",
                src: "/Assignments/enterpassword.png",
                caption: "2) Enter Password screen",
            },
            {
                type: "image",
                src: "/Assignments/WrongPassword.png",
                caption: "3) Wrong Password output",
            },
            {
                type: "image",
                src: "/Assignments/Dooropen.png",
                caption: "4) Door Open output",
            },
            {
                type: "video",
                src: "/Assignments/Tinkercad.webm",
                caption: "5) Working demo (video)",
            },
        ],
        pdf: {
            // Portfolio-Durgadevi/public/Assignments/Tinkercad project.pdf
            src: "/Assignments/Tinkercad%20project.pdf",
            name: "Tinkercad project.pdf",
        },
    },
];

const MediaCard = ({ item }) => {
    if (item.type === "image") {
        return (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-[16/10]">
                <img
                    src={item.src}
                    alt={item.caption || "assignment media"}
                    className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
                    draggable={false}
                />
            </div>
        );
    }

    // video
    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <video
                className="w-full h-auto block"
                src={item.src}
                controls
                playsInline
                preload="metadata"
            />
        </div>
    );
};

export default function AssignmentPage() {
    return (
        <div className="h-full py-32 relative min-h-screen">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <motion.div
                    variants={fadeIn("down", 0.15)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center xl:text-left mb-10">
                    <h2 className="h2">
                        My <span className="text-accent">Assignments</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto xl:mx-0">
                        Scratch • MIT App Inventor • Fusion 360 • Arduino
                        (TinkerCad)
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="flex flex-col gap-10">
                    {assignments.map((a, idx) => (
                        <motion.section
                            key={a.title}
                            variants={fadeIn("up", 0.15 + idx * 0.08)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="relative rounded-3xl border border-cyan-300/15 bg-black/35 backdrop-blur-xl
                         shadow-[0_0_28px_rgba(0,255,255,0.08)] overflow-hidden">
                            {/* glow blob */}
                            <div
                                aria-hidden
                                className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-35
                           bg-[radial-gradient(circle,rgba(0,255,255,0.35),transparent_60%)]"
                            />

                            <div className="p-6 sm:p-8 relative">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-200">
                                        {a.title}
                                    </h3>

                                    {a.platform && (
                                        <div className="text-white/70">
                                            <span className="text-white/85 font-medium">
                                                {a.platform}
                                            </span>
                                        </div>
                                    )}

                                    <p className="mt-3 text-white/80 leading-relaxed">
                                        {a.description}
                                    </p>
                                </div>

                                {/* Media grid */}
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {a.media.map((m) => (
                                        <div
                                            key={m.src}
                                            className="flex flex-col gap-2">
                                            <MediaCard item={m} />
                                            {m.caption && (
                                                <p className="text-xs text-white/55">
                                                    {m.caption}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* ✅ PDF block (now for ALL assignments that have a.pdf) */}
                                {a.pdf && (
                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        <span className="text-white/70 text-sm">
                                            PDF:{" "}
                                            <span className="text-white/85">
                                                {a.pdf.name}
                                            </span>
                                        </span>

                                        <a
                                            href={a.pdf.src}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="px-4 py-2 rounded-full border border-cyan-300/25 bg-black/30 text-cyan-200
                                 hover:border-cyan-300/45 hover:shadow-[0_0_18px_rgba(0,255,255,0.16)] transition">
                                            View PDF
                                        </a>

                                        <a
                                            href={a.pdf.src}
                                            download={a.pdf.name}
                                            className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-white/80
                                 hover:border-cyan-300/25 hover:text-cyan-200 transition">
                                            Download PDF
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>
        </div>
    );
}
