import Image from "next/image";

export interface BadgeProps {
    title: string;
    src: string;
    bgc: string;
    color?: string;
}

const About = () => {

    const Badge = ({title, src, bgc, color}: BadgeProps) => (
        <div className={`${bgc} inline-block px-2 py-1 mr-3 mb-3 flex items-center`}>
            <Image
              src={src}
              alt={title}
              width={20}
              height={20}
            />
            <p className={`${color ?? "text-[#fff]"} ml-2 font-medium text-[14px]`}>{title}</p>
        </div>
    )

    const TechStack = ({customClass}: any) => (
        <div className={`${customClass} space-y-3 mt-6`}>
            <div className="flex space-x-2 items-end">
                <Image
                    src="/icons/tech-stack.png"
                    alt="Tech Stack"
                    width={35}
                    height={35} />
                <p className="font-bold">Tech Stack:</p>
            </div>
            <div className="flex items-center flex-wrap">
                <Badge title='HTML' src='/icons/about/html.png' bgc='bg-[#e34c26]'/>
                <Badge title='CSS' src='/icons/about/css.png' bgc='bg-[#2965f1]'/>
                <Badge title='TYPESCRIPT' src='/icons/about/typescript.png' bgc='bg-[#007ACC]'/>
                <Badge title='JAVASCRIPT' src='/icons/about/javascript.png' bgc='bg-[#323330]'/>
                <Badge title='PHP' src='/icons/about/php.png' bgc='bg-[#777BB4]'/>
                <Badge title='JAVA' src='/icons/about/java.png' bgc='bg-[#B07219]'/>
                <Badge title='VB.NET' src='/icons/about/visualbasic.png' bgc='bg-[#945DB7]'/>
                <Badge title='NODE.JS' src='/icons/about/node.png' bgc='bg-[#43853D]'/>
                <Badge title='NEXT.JS' src='/icons/about/nextjs.png' bgc='bg-[#363734]'/>
                <Badge title='EXPRESS.JS' src='/icons/about/expressjs.png' bgc='bg-[#404D59]'/>
                <Badge title='REACT' src='/icons/about/react.png' bgc='bg-[#20232A]'/>
                <Badge title='TAILWINDCSS' src='/icons/about/tailwindcss.png' bgc='bg-[#38B2AC]'/>
                <Badge title='ANGULAR' src='/icons/about/angular.png' bgc='bg-[#DD0031]'/>
                <Badge title='ANDROID STUDIO' src='/icons/about/android-studio.png' bgc='bg-[#49824F]'/>
                <Badge title='HEROKU' src='/icons/about/heroku.png' bgc='bg-[#430098]'/>
                <Badge title='FIREBASE' src='/icons/about/firebase.png' bgc='bg-[#0718AC]'/>
                <Badge title='MYSQL' src='/icons/about/mysql.png' bgc='bg-[#D16400]'/>
                <Badge title='GraphQL' src='/icons/about/graphql.png' bgc='bg-[#e535ab]'/>
                <Badge title='GIT' src='/icons/about/devicon_git.png' bgc='bg-[#F05033]'/>
            </div>
        </div>
    )

    return (
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center grow 
        md:pt-10 pt-6 pb-10 md:px-0 px-6 flex-wrap lg:flex-nowrap">
            <Image
                src={"/images/archie.jpg"}
                alt={"archie"}
                width={500}
                height={1000}
                className="lg:w-[500px] md:w-[40%] rounded-lg md:mr-8 mb-6"
            />
            <div className="md:w-[54%]">
                <div className="space-y-3">
                    <div className="flex space-x-2 items-end">
                        <Image
                            src="/icons/about-me.png"
                            alt="About Me Icon"
                            width={35}
                            height={35} />
                        <p className="font-bold">About Me:</p>
                    </div>
                    <p className="font-medium">Hey there! I&#39;m Archie, 
                    your friendly neighborhood web developer!</p>
                    <p className="opacity-80">
                        With a background in both front-end and back-end development, I specialize in crafting seamless web experiences 
                        using the latest technologies. Over the past five years, I&#39;ve worked with a range of clients to build responsive, 
                        performance-driven sites and applications. My skill set includes expertise in HTML, CSS, JavaScript, and popular 
                        frameworks like Next.js and Angular.js.
                    </p>
                    <p className="opacity-80">
                        I believe in a user-centered approach, focusing on delivering clean, intuitive designs and efficient code. My commitment 
                        to continuous learning keeps me at the forefront of industry trends, ensuring that my work is not only functional but 
                        also cutting-edge.
                    </p>
                    <p className="opacity-80">
                        When I&#39;m not coding away in my digital lair, you can find me juggling coffee cups and brainstorming the next big idea for a website.
                    </p>
                    <p className="opacity-80">
                        Take a look at my portfolio to see how I can help bring your digital vision to life. I love turning creative concepts into reality 
                        and making the internet a more colorful place, one pixel at a time. Let&#39;s build something awesome together!
                    </p>
                </div>
                <TechStack customClass='hidden lg:block'/>
            </div>
            <TechStack customClass='block lg:hidden'/>
        </div>
    );
}
 
export default About;