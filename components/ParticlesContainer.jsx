import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className="w-full h-full absolute translate-z-0 z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: true },
                background: { color: { value: "" } },
                fpsLimit: 90,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 180, duration: 0.6 }, // nodes push away gently
                    },
                },
                particles: {
                    color: { value: "#ffffff" }, // bright white glowing particles
                    links: {
                        color: "#ffffff",
                        distance: 220, // much longer distance → very few connections
                        enable: true,
                        opacity: 0.08, // extremely low opacity → almost no visible lines
                        width: 0.5,
                    },
                    collisions: { enable: false }, // no collisions for cleaner scatter
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "out" },
                        random: true,
                        speed: 0.4, // very slow drift
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 1200 }, // spread over larger area
                        value: 180, // more particles but scattered
                    },
                    opacity: {
                        value: { min: 0.3, max: 1 },
                        animation: {
                            enable: true,
                            speed: 1.2,
                            minimumValue: 0.3,
                            sync: false,
                        },
                    },
                    shape: { type: "circle" },
                    size: {
                        value: { min: 0.8, max: 2.5 }, // small glowing dots
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.8,
                            sync: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesContainer;
