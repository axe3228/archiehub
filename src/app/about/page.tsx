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

    return (
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center grow md:pt-10 pt-6 pb-10 md:px-0 px-6">
            <div className="w-max md:mr-8 mb-6">
                <Image
                src={"/images/archie.jpg"}
                alt={"archie"}
                width={500}
                height={1000}
                className="rounded-lg"
                />
            </div>
            <div className="md:w-[54%]">
                <div className="space-y-3">
                    <p className="font-bold">Greetings! I&#39;m Archie Habaradas, 
                        your friendly web developer who is passionate on creating dynamic, user-friendly websites and application.</p>
                    <p>
                        With a background in both front-end and back-end development, I specialize in crafting seamless web experiences 
                        using the latest technologies. Over the past five years, I&#39;ve worked with a range of clients to build responsive, 
                        performance-driven sites and applications. My skill set includes expertise in HTML, CSS, JavaScript, and popular 
                        frameworks like Next.js and Angular.js.
                    </p>
                    <p>
                        I believe in a user-centered approach, focusing on delivering clean, intuitive designs and efficient code. My commitment 
                        to continuous learning keeps me at the forefront of industry trends, ensuring that my work is not only functional but 
                        also cutting-edge.
                    </p>
                    <p>
                        When I&#39;m not coding, I&#39;m often exploring new tech innovations or working on personal projects. Protecting my mental health is
                        also my top priority which is why i sometimes go out with my family and friends to unwind.
                    </p>
                    <p>
                        Take a look at my portfolio to see how I can help bring your digital vision to life. Feel free to reach out if you&#39;d like to 
                        discuss potential collaborations or just chat about the latest in web development!
                    </p>
                </div>
                <div className="space-y-3 mt-6">
                    <p className="font-bold">What i know: </p>
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
                        <Badge title='BOOTSTRAP' src='/icons/about/bootstrap.png' bgc='bg-[#563D7C]'/>
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
            </div>
            
        </div>
    );
}
 
export default About;