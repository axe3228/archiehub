'use client';
import { HOME_PAGE, ABOUT_PAGE, CONTACT_ME_PAGE, PROJECTS_PAGE } from "@/constants/routes";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname()
    const liClass = "font-medium hover:text-light-violet"
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="flex justify-between items-center w-full py-5 sticky top-0 bg-black shadow-md z-50 relative
        md:border-b-0 border-b md:px-0 px-6">
            <a href={HOME_PAGE} className="font-bold text-[18px]">ArchieHub</a>
            <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src={"/icons/hamburger.png"}
                    alt={"burger menu"}
                    width={32}
                    height={32}
                />
            </button>
            <ul className="md:flex hidden space-x-8">
                <li className={`${liClass} ${pathname === HOME_PAGE ? 'text-light-violet' : 'white'}`}>
                    <a href={HOME_PAGE}>Home</a>
                </li>
                <li className={`${liClass} ${pathname === ABOUT_PAGE ? 'text-light-violet' : 'white'}`}>
                    <a href={ABOUT_PAGE}>About</a>
                </li>
                <li className={`${liClass} ${pathname === PROJECTS_PAGE ? 'text-light-violet' : 'white'}`}>
                    <a href={PROJECTS_PAGE}>Projects</a>
                </li>
                <li className={`${liClass} ${pathname === CONTACT_ME_PAGE ? 'text-light-violet' : 'white'}`}>
                    <a href={CONTACT_ME_PAGE}>Contact Me</a>
                </li>
            </ul>

            <ul className={`${isOpen ? 'md:hidden flex' : 'hidden'} flex-col absolute bottom-[-181px] left-0 w-full bg-black`}>
                <li className={`${liClass} ${pathname === HOME_PAGE ? 'text-light-violet' : 'white'} 
                border-b py-2.5 px-6`}>
                    <a href={HOME_PAGE}>Home</a>
                </li>
                <li className={`${liClass} ${pathname === ABOUT_PAGE ? 'text-light-violet' : 'white'} 
                border-b py-2.5 px-6`}>
                    <a href={ABOUT_PAGE}>About</a>
                </li>
                <li className={`${liClass} ${pathname === PROJECTS_PAGE ? 'text-light-violet' : 'white'} 
                border-b py-2.5 px-6`}>
                    <a href={PROJECTS_PAGE}>Projects</a>
                </li>
                <li className={`${liClass} ${pathname === CONTACT_ME_PAGE ? 'text-light-violet' : 'white'} 
                border-b py-2.5 px-6`}>
                    <a href={CONTACT_ME_PAGE}>Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;