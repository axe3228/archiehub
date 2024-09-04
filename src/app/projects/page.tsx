import Image from "next/image";
import Link from "next/link";

const project = () => {

    interface CardProps {
        image: string;
        title: string;
        desc: string;
        url: string;
    }

    const Card = ({image, title, desc, url}: CardProps) => (
        <Link href={url} target={`${url && "_blank"}`} className="md:w-[44%] w-full mb-10 flex">
            <div className="border border-white/[0.17] p-8 rounded-lg 
            bg-white/[0.08]">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={200}
                />
                <p className="mt-4 font-bold">{title}</p>
                <p className="text-[14px]">{desc}</p>
            </div>
        </Link>
    )

    return (
        <div className="pt-8 pb-5 px-6">
            <div className="flex flex-wrap justify-evenly">
                <Card image="/images/projects/harmony-web.png" title="Harmony Web" desc="create at Cogitate (2023-2024)" 
                url="https://harmonyschoolsonlinestore.com/district-office/central-office" />
                <Card image="/images/projects/partnersync-hub.png" title="Partner Sync Hub" desc="create at Cogitate (2024)" url="https://simplewaste.com/" />
                <Card image="/images/projects/hts-tech.png" title="HTS Tech" desc="create at Cogitate (2024)" url="" />
                <Card image="/images/projects/simple-waste.png" title="Onboarding Portal" desc="create at Cogitate (2023)" url="https://simplewaste.com/" />
            </div>
        </div>
    );
}
 
export default project;