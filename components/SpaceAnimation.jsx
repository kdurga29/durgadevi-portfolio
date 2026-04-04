// components/SpaceAnimation.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SpaceAnimation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const dots = Array.from({ length: 100 });

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {dots.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: "3px",
                        height: "3px",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.6,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
