import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const assignments = [
    {
        title: "Geometry Dash Game",

        description:
            "Built a Geometry Dash style game in Scratch with timing-based obstacles and smooth movement.",

        media: [
            {
                type: "video",
                src: "/Assignments/GeometryDash.mp4",
                caption: "Gameplay Demo",
            },
        ],

        files: [
            {
                name: "Scratch.pdf",
                src: "/Scratch.pdf",
            },
        ],
    },

    {
        title: "Location Tracker App",
        platform: "MIT App Inventor",

        description:
            "A location tracker app that fetches and displays the current location when the button is clicked.",

        media: [
            {
                type: "image",
                src: "/Assignments/LocationTracker..jpeg",
                caption: "Application Screenshot",
            },
        ],

        files: [
            {
                name: "Location Tracker PDF",
                src: "/location%20tracker.pdf",
            },
        ],
    },

    {
        title: "Water Bottle (3D Design)",
        platform: "Fusion 360",

        description:
            "Designed a realistic 1 litre water bottle model in Fusion 360 with smooth surfaces and realistic proportions.",

        media: [
            {
                type: "video",
                src: "/Assignments/fusion360.mp4",
                caption: "Fusion 360 Design Video",
            },

            {
                type: "image",
                src: "/Assignments/Waterbottle.jpeg",
                caption: "Final Render",
            },
        ],

        files: [
            {
                name: "Water Bottle PDF",
                src: "/Water%20bottle.pdf",
            },
        ],
    },

    {
        title: "Password Door Lock System",
        platform: "TinkerCad (Arduino)",

        description:
            "Password protected door lock system using Arduino simulation in TinkerCad.",

        media: [
            {
                type: "image",
                src: "/Assignments/TinkerCad.png",
                caption: "Circuit Design",
            },

            {
                type: "image",
                src: "/Assignments/enterpassword.png",
                caption: "Enter Password Screen",
            },

            {
                type: "image",
                src: "/Assignments/WrongPassword.png",
                caption: "Wrong Password Output",
            },

            {
                type: "image",
                src: "/Assignments/Dooropen.png",
                caption: "Door Open Output",
            },

            {
                type: "video",
                src: "/Assignments/Tinkercad.webm",
                caption: "Working Demo",
            },
        ],

        files: [
            {
                name: "Tinkercad Project PDF",
                src: "/Assignments/Tinkercad%20project.pdf",
            },
        ],
    },

    {
        title: "IoT",
        platform: "Internet of Things",

        description:
            "IoT assignment documentation including concepts, workflow, implementation details, and system architecture.",

        media: [],

        files: [
            {
                name: "IoT Document",
                src: "/Team%209%20-%20IOT.docx",
            },
        ],
    },

    {
        title: "Laser Cutting",
        platform: "Fusion 360 + DXF",

        description:
            "Laser cutting assignment containing Fusion 360 FSD design files and DXF cutting files.",

        media: [],

        files: [
            {
                name: "Fusion 360 FSD",
                src: "https://drive.google.com/file/d/1K-TYm_Sv9syKUeH31IXmo-1ItCj1QX_f/view",
            },

            {
                name: "DXF Files",
                src: "https://drive.google.com/drive/folders/1-5kkpvtzEOgDzNIEP7XtMPjjm3WMVFoD",
            },
        ],
    },

    {
        title: "3D Printing",
        platform: "3D Design & STL",

        description:
            "3D printing assignment including printable models, STL files, and project resources.",

        media: [],

        files: [
            {
                name: "3D Printing Files",
                src: "https://drive.google.com/drive/folders/1GupX8Y8zjKoxuhM8_kl4acD5tr6x4pZB",
            },

            {
                name: "STL Files",
                src: "https://drive.google.com/drive/folders/1E8fBsSBd08PpRa39XaDKppDtOI6iYsWV",
            },
        ],
    },

    {
        title: "Android Studio App",
        platform: "Android Studio",

        description:
            "Android application developed using Android Studio with user interface design and functionality implementation.",

        media: [],

        files: [
            {
                name: "Android Studio Project",
                src: "/Durgadevi_23BTT014.zip",
            },
        ],
    },

    {
        title: "Django App",
        platform: "Django Framework",

        description:
            "Web application developed using Django framework with backend integration and application workflow.",

        media: [],

        files: [
            {
                name: "Django Chat App",
                src: "/chat-app.zip",
            },
        ],
    },

    {
        title: "System Thinking",
        platform: "Canva Presentation",

        description:
            "System thinking assignment presentation including concepts, workflow analysis, and interconnected system understanding.",

        media: [],

        files: [
            {
                name: "Canva Presentation",
                src: "https://www.canva.com/design/DAHA6Yxb8zE/HW5KxupEzO3gXcs0pAKwQA/edit",
            },
        ],
    },

    {
        title: "Computational Hardware (Embedded System)",
        platform: "Embedded Systems",

        description:
            "Embedded systems assignment covering computational hardware concepts, architecture, and implementation details.",

        media: [],

        files: [
            {
                name: "Embedded System Assignment",
                src: "/embedded_assignment2.pdf",
            },
        ],
    },

    // ✅ NEW KICAD ASSIGNMENT
    {
        title: "KiCad Schematic Design - Bulb Glow",
        platform: "KiCad",

        description:
            "Schematic circuit design created in KiCad demonstrating bulb glow simulation and electrical connectivity.",

        media: [
            {
                type: "image",
                src: "/Assignments/kicad.jpeg",
                caption: "KiCad Schematic Design",
            },
        ],

        files: [],
    },
];

const MediaCard = ({ item }) => {
    if (item.type === "image") {
        return (
            <div
                className="
                    relative rounded-2xl overflow-hidden
                    border border-white/10
                    bg-white/[0.03]
                    aspect-[16/10]
                ">
                <img
                    src={item.src}
                    alt={item.caption || "assignment media"}
                    className="
                        w-full h-full object-cover
                        opacity-95 hover:opacity-100
                        transition-opacity duration-300
                    "
                    draggable={false}
                />
            </div>
        );
    }

    return (
        <div
            className="
                relative rounded-2xl overflow-hidden
                border border-white/10
                bg-white/[0.03]
            ">
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
            <div
                className="
                    container mx-auto
                    max-w-7xl
                    px-4 sm:px-6 lg:px-8
                    relative z-10
                ">
                {/* HEADER */}
                <motion.div
                    variants={fadeIn("down", 0.15)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-center xl:text-left mb-10">
                    <h2 className="h2">
                        My <span className="text-accent">Assignments</span>
                    </h2>

                    <p className="text-white/70 max-w-3xl mx-auto xl:mx-0">
                        Scratch • MIT App Inventor • Fusion 360 • Arduino • IoT
                        • Laser Cutting • 3D Printing • Android Studio • Django
                        • Embedded Systems • KiCad
                    </p>
                </motion.div>

                {/* ASSIGNMENTS */}
                <div className="flex flex-col gap-10">
                    {assignments.map((a, idx) => (
                        <motion.section
                            key={a.title}
                            variants={fadeIn("up", 0.15 + idx * 0.08)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="
                                relative rounded-3xl
                                border border-cyan-300/15
                                bg-black/35
                                backdrop-blur-xl
                                shadow-[0_0_28px_rgba(0,255,255,0.08)]
                                overflow-hidden
                            ">
                            {/* GLOW */}
                            <div
                                aria-hidden
                                className="
                                    absolute -top-24 -left-24
                                    w-72 h-72 rounded-full blur-3xl opacity-35
                                    bg-[radial-gradient(circle,rgba(0,255,255,0.35),transparent_60%)]
                                "
                            />

                            <div className="p-6 sm:p-8 relative">
                                {/* TITLE */}
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

                                {/* MEDIA */}
                                {a.media.length > 0 && (
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
                                )}

                                {/* FILES */}
                                {a.files.length > 0 && (
                                    <div className="mt-6 flex flex-col gap-4">
                                        {a.files.map((file) => (
                                            <div
                                                key={file.src}
                                                className="
                                                    flex flex-wrap items-center gap-3
                                                    rounded-2xl
                                                    border border-white/10
                                                    bg-white/[0.03]
                                                    px-4 py-3
                                                ">
                                                <span className="text-white/75 text-sm">
                                                    {file.name}
                                                </span>

                                                {/* VIEW */}
                                                <a
                                                    href={file.src}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="
                                                        px-4 py-2 rounded-full
                                                        border border-cyan-300/25
                                                        bg-black/30
                                                        text-cyan-200
                                                        hover:border-cyan-300/45
                                                        hover:shadow-[0_0_18px_rgba(0,255,255,0.16)]
                                                        transition
                                                    ">
                                                    View
                                                </a>

                                                {/* DOWNLOAD */}
                                                <a
                                                    href={file.src}
                                                    download
                                                    className="
                                                        px-4 py-2 rounded-full
                                                        border border-white/15
                                                        bg-white/[0.03]
                                                        text-white/80
                                                        hover:border-cyan-300/25
                                                        hover:text-cyan-200
                                                        transition
                                                    ">
                                                    Download
                                                </a>
                                            </div>
                                        ))}
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
