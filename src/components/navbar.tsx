'use client';
import { HOME_PAGE, ABOUT_PAGE, CONTACT_ME_PAGE, PROJECTS_PAGE } from "@/constants/routes";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname()
    const liClass = "font-medium hover:text-primary"
    const animationSlideUp = "transition ease-in-out delay-80 group-hover:-translate-y-full"
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full bg-black sticky top-0 shadow-md z-30 relative">
            <nav className="flex justify-between items-center py-5 md:border-b-0 border-b md:px-10 
            px-6 max-w-[1440px] mx-auto">
                <a href={HOME_PAGE} className="flex items-end">
                    <Image
                        src={"/icons/a.png"}
                        alt={"Logo"}
                        width={29}
                        height={29}
                    />
                    <p className="font-bold text-[18px] leading-[17px]">rchieHub</p>
                </a>
                <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Image
                        src={"/icons/hamburger.png"}
                        alt={"burger menu"}
                        width={32}
                        height={32}
                    />
                </button>
                <ul className="md:flex hidden space-x-8">
                    <li className="font-medium group">
                        <Link href={HOME_PAGE} className="flex flex-col overflow-hidden h-5">
                            <span className={`${pathname === HOME_PAGE ? 'text-primary' : 'white'} ${animationSlideUp}`}>Home</span>
                            <span className={`${animationSlideUp} text-primary`}>Home</span>
                        </Link>
                    </li>
                    <li className="font-medium group">
                        <Link href={ABOUT_PAGE} className="flex flex-col overflow-hidden h-5">
                            <span className={`${pathname === ABOUT_PAGE ? 'text-primary' : 'white'} ${animationSlideUp}`}>About</span>
                            <span className={`${animationSlideUp} text-primary`}>About</span>
                        </Link>
                    </li>
                    <li className="font-medium group">
                        <Link href={PROJECTS_PAGE} className="flex flex-col overflow-hidden h-5">
                            <span className={`${pathname === PROJECTS_PAGE ? 'text-primary' : 'white'} ${animationSlideUp}`}>Projects</span>
                            <span className={`${animationSlideUp} text-primary`}>Projects</span>
                        </Link>
                    </li>
                    <li className="font-medium group">
                        <Link href={CONTACT_ME_PAGE} className="flex flex-col overflow-hidden h-5">
                            <span className={`${pathname === CONTACT_ME_PAGE ? 'text-primary' : 'white'} ${animationSlideUp}`}>Contact Me</span>
                            <span className={`${animationSlideUp} text-primary`}>Contact Me</span>
                        </Link>
                    </li>
                </ul>

                <ul className={`${isOpen ? 'md:hidden flex' : 'hidden'} flex-col absolute bottom-[-181px] left-0 w-full bg-black`}>
                    <li className={`${liClass} ${pathname === HOME_PAGE ? 'text-primary' : 'white'} 
                    border-b py-2.5 px-6`}>
                        <Link href={HOME_PAGE} onClick={() => setIsOpen(!isOpen)}>Home</Link>
                    </li>
                    <li className={`${liClass} ${pathname === ABOUT_PAGE ? 'text-primary' : 'white'} 
                    border-b py-2.5 px-6`}>
                        <Link href={ABOUT_PAGE} onClick={() => setIsOpen(!isOpen)}>About</Link>
                    </li>
                    <li className={`${liClass} ${pathname === PROJECTS_PAGE ? 'text-primary' : 'white'} 
                    border-b py-2.5 px-6`}>
                        <Link href={PROJECTS_PAGE} onClick={() => setIsOpen(!isOpen)}>Projects</Link>
                    </li>
                    <li className={`${liClass} ${pathname === CONTACT_ME_PAGE ? 'text-primary' : 'white'} 
                    border-b py-2.5 px-6`}>
                        <Link href={CONTACT_ME_PAGE} onClick={() => setIsOpen(!isOpen)}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}
 
export default Navbar;