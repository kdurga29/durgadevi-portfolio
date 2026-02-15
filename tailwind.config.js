module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: ["bg-black", "bg-dot-stars"],
    theme: {
        extend: {
            colors: {
                primary: "#000000", // solid black background
                secondary: "#0a0a0a", // very dark for cards/glass
                accent: "#00f0ff", // neon cyan
                "text-primary": "#e0f7ff",
                "text-secondary": "#a5f3ff",
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"], // keep your font
            },
            boxShadow: {
                neon: "0 0 20px rgba(0, 240, 255, 0.5)", // fixed shadow-neon
                "neon-strong": "0 0 35px rgba(0, 240, 255, 0.7)",
            },
            backgroundImage: {
                "dot-stars":
                    "radial-gradient(circle, white 1px, transparent 1px)",
            },
            backgroundSize: {
                "dot-stars": "50px 50px", // adjusted spacing for nicer stars
            },
        },
    },
    plugins: [],
};
