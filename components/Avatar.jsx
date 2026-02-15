import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            src="/profile.png"
            alt="Durga Devi K"
            fill
            className="object-contain object-bottom"
            quality={95}
            priority
            sizes="(min-width: 1280px) 900px, 800px"
        />
    );
};

export default Avatar;
