import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const liClass = 'flex items-center space-x-2';
    const SocIcon = ({src, alt}: any) => (
        <div>
            <Image
              src={src}
              alt={alt}
              width={20}
              height={20}
            />
        </div>
    )

    return (
        <footer className="flex flex-col items-center mb-4">
            <ul className="flex flex-wrap justify-evenly md:space-x-10">
                <li>
                    <Link href="https://www.instagram.com/nara_archie/?hl=en" target="_blank" className={liClass}>
                        <SocIcon src='/icons/insta.png' alt='Instagram' />
                        <p>Instagram</p>
                    </Link>
                </li>
                <li className={`px-2`}>
                    <Link href="https://www.facebook.com/lionheart1231" target="_blank" className={liClass}>
                        <SocIcon src='/icons/fb.png' alt='Facebook' />
                        <p>Facebook</p>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/archie-habaradas-b9712b208/" target="_blank" className={liClass}>
                        <SocIcon src='/icons/in.png' alt='LinkedIn' />
                        <p>LinkedIn</p>
                    </Link>
                </li>
            </ul>
            <p className="mt-1.5">© Archie Habaradas 2024</p>
        </footer>
    );
}
 
export default Footer;