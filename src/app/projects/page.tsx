import Image from "next/image";
import Link from "next/link";
import { Projects } from '@/constants/projects'

const project = () => {

    interface CardProps {
        image: string;
        title: string;
        company: string;
        desc: string;
        url?: string;
    }

    const CardLink = ({image, title, company, desc, url}: CardProps) => (
        <Link href={url ?? ''} target={`${url && "_blank"}`} className="md:w-[44%] w-full mb-10 flex
        transform transition duration-200 md:hover:scale-110">
            <div className="border border-white/[0.17] rounded-lg 
            bg-white/[0.08]">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={200}
                    className="rounded-t-lg"
                />
                <div className="mt-4 px-5 pb-5">
                    <p className="font-bold">{title}</p>
                    <p className="text-[12px] my-1">{company}</p>
                    <p className="text-[12px] opacity-70">{desc}</p>
                </div>
            </div>
        </Link>
    )

    const Card = ({image, title, company, desc}: CardProps) => (
        <div className="md:w-[44%] w-full mb-10 flex transform transition duration-200 
            md:hover:scale-110">
            <div className="border border-white/[0.17] rounded-lg 
            bg-white/[0.08]">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={200}
                    className="rounded-t-lg"
                />
                <div className="mt-4 px-5 pb-5">
                    <p className="font-bold">{title}</p>
                    <p className="text-[12px] my-1">{company}</p>
                    <p className="text-[12px] opacity-70">{desc}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="pt-8 pb-5 px-6">
            <div className="flex flex-wrap justify-evenly">
                {
                    Projects.map((project: any) => {
                        if (project.haveLink) {
                            return (
                                <CardLink
                                key={project.id}
                                image={project.image}
                                title={project.title} 
                                url={project.url}
                                company={project.company}
                                desc={project.desc} />
                            );
                        } else {
                            return (
                                <Card
                                key={project.id}
                                image={project.image}
                                title={project.title} 
                                url={project.url}
                                company={project.company}
                                desc={project.desc} />
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}
 
export default project;