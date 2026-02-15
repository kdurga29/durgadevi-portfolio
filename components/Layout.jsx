import { Sora } from "next/font/google";
import Head from "next/head";
import Nav from "../components/Nav";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
    return (
        <main
            className={`page bg-black text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-x-hidden min-h-screen`}>
            <div className="star-field" />

            <Head>
                <title>Durga Devi K | Portfolio</title>
                <meta
                    name="description"
                    content="B.Tech Textile student | Full-stack developer & AI enthusiast skilled in Next.js, React, Python, OpenCV, and more."
                />
                <meta name="theme-color" content="#000000" />
            </Head>

            <Nav />
            

            <div className="relative z-10">{children}</div>
        </main>
    );
};

export default Layout;
