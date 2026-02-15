import { motion } from "framer-motion";
import {
    BsArrowRight,
    BsTelephone,
    BsEnvelope,
    BsLinkedin,
    BsGithub,
} from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const form = event.target;

            const payload = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
            };

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok) {
                setStatus({
                    type: "success",
                    message:
                        "Thank you! I'll get back to you as soon as possible.",
                });
                form.reset();
            } else {
                setStatus({
                    type: "error",
                    message:
                        data?.error ||
                        "Something went wrong. Please try again or email me directly.",
                });
            }
        } catch (err) {
            console.log(err);
            setStatus({
                type: "error",
                message:
                    "Network error. Please try again or email me at durgadevi.2006@proton.me",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contacts = [
        {
            icon: BsTelephone,
            label: "Phone",
            value: "+91 6380069729",
            href: "tel:+916380069729",
        },
        {
            icon: BsEnvelope,
            label: "Email",
            value: "durgadevi.2006@proton.me",
            href: "mailto:durgadevi.2006@proton.me",
        },
        {
            icon: BsLinkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/durga-devi-4825a9326",
            href: "https://www.linkedin.com/in/durga-devi-4825a9326",
        },
        {
            icon: BsGithub,
            label: "GitHub",
            value: "github.com/kdurga29",
            href: "https://github.com/kdurga29",
        },
    ];

    return (
        <div className="h-full py-28 xl:py-32 relative overflow-hidden">
            {/* cinematic ambient layer (overlays only) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:100%_6px]" />
                <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-accent/20 blur-3xl rounded-full opacity-60" />
                <div className="absolute -bottom-28 -right-20 w-[520px] h-[520px] bg-white/10 blur-3xl rounded-full opacity-40" />
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:84px_84px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col gap-y-10">
                    {/* headline */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-center xl:text-left">
                        <h2 className="h2 mb-3">
                            Let's <span className="text-accent">Connect</span>
                        </h2>
                        <p className="max-w-2xl mx-auto xl:mx-0 text-white/70 text-lg">
                            Drop a message or reach me directly — I’ll reply as
                            soon as possible.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
                        {/* left */}
                        <motion.div
                            variants={fadeIn("right", 0.35)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="relative">
                            <div className="absolute left-1 top-2 bottom-2 w-px bg-white/15" />
                            <div className="absolute left-1 top-2 bottom-2 w-px bg-accent/30 blur-sm" />

                            <div className="pl-10 flex flex-col gap-y-10">
                                <div className="text-white/80">
                                    <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                                        Direct Channels
                                    </div>
                                    <div className="mt-2 text-white/70">
                                        Pick any signal line below.
                                    </div>
                                </div>

                                <div className="flex flex-col gap-y-8">
                                    {contacts.map((c, idx) => {
                                        const Icon = c.icon;
                                        return (
                                            <motion.a
                                                key={idx}
                                                href={c.href}
                                                target={
                                                    c.href.startsWith("http")
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    c.href.startsWith("http")
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                whileHover={{
                                                    y: -2,
                                                    transition: {
                                                        duration: 0.2,
                                                    },
                                                }}
                                                className="group relative">
                                                <div className="absolute -left-[41px] top-2">
                                                    <div className="w-3.5 h-3.5 rounded-full bg-accent shadow-neon" />
                                                </div>

                                                <div className="flex items-start gap-x-4">
                                                    <div className="mt-1">
                                                        <Icon className="text-accent text-xl" />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                                                            {c.label}
                                                        </div>
                                                        <div className="mt-2 text-white/85 text-lg break-words group-hover:text-accent transition-colors">
                                                            {c.value}
                                                        </div>
                                                        <div className="mt-3 h-[1px] w-16 bg-white/20 group-hover:w-40 group-hover:bg-accent/70 transition-all duration-300" />
                                                    </div>
                                                </div>

                                                <div className="pointer-events-none absolute -inset-y-6 -left-24 w-64 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* right: form */}
                        <motion.div
                            variants={fadeIn("left", 0.35)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="relative">
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/35 via-white/10 to-accent/25 blur-sm opacity-60 pointer-events-none" />

                            <div className="glass p-7 md:p-10 relative overflow-hidden">
                                <motion.div
                                    initial={{ x: "-40%", opacity: 0.35 }}
                                    animate={{ x: "120%", opacity: 0.35 }}
                                    transition={{
                                        duration: 6.5,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                    className="pointer-events-none absolute top-0 left-0 h-[2px] w-1/3 bg-accent/60 blur-[1px]"
                                />

                                <div className="mb-7">
                                    <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                                        Message Console
                                    </div>
                                    <div className="mt-2 text-white/70">
                                        Send a signal — I’ll respond.
                                    </div>
                                </div>

                                {/* status message */}
                                {status.message ? (
                                    <div
                                        className={`mb-6 text-sm md:text-base rounded-xl px-4 py-3 border ${
                                            status.type === "success"
                                                ? "border-emerald-400/30 text-emerald-200 bg-emerald-400/10"
                                                : "border-red-400/30 text-red-200 bg-red-400/10"
                                        }`}>
                                        {status.message}
                                    </div>
                                ) : null}

                                <motion.form
                                    variants={fadeIn("up", 0.1)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="flex flex-col gap-6 w-full"
                                    onSubmit={handleSubmit}
                                    autoComplete="off"
                                    name="contact">
                                    <div className="flex flex-col sm:flex-row gap-6 w-full">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="input"
                                            disabled={isLoading}
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="input"
                                            disabled={isLoading}
                                            required
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="input"
                                        disabled={isLoading}
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Your Message..."
                                        className="textarea min-h-[150px]"
                                        disabled={isLoading}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="btn rounded-full border border-white/50 max-w-[210px] px-10 py-3 transition-all duration-300 flex items-center justify-center gap-x-2 hover:border-accent group disabled:opacity-50 relative overflow-hidden"
                                        disabled={isLoading}>
                                        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.14),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] duration-[900ms]" />

                                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                            {isLoading
                                                ? "Sending..."
                                                : "Send Message"}
                                        </span>
                                        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-xl" />
                                    </button>
                                </motion.form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
