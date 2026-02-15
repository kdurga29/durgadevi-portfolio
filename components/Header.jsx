import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="relative z-40 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="
                        flex items-center justify-end
                        py-6
                        md:py-8
                    ">
                    {/* socials only */}
                    <div className="flex items-center">
                        <Socials />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
