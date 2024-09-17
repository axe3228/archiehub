import Image from "next/image";
import Link from "next/link";

const project = () => {

    interface CardProps {
        image: string;
        title: string;
        desc: string;
        url?: string;
    }

    const CardLink = ({image, title, desc, url}: CardProps) => (
        <Link href={url ?? ''} target={`${url && "_blank"}`} className="md:w-[44%] w-full mb-10 flex">
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

    const Card = ({image, title, desc}: CardProps) => (
        <div className="md:w-[44%] w-full mb-10 flex">
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
        </div>
    )

    return (
        <div className="pt-8 pb-5 px-6">
            <div className="flex flex-wrap justify-evenly">
                <CardLink image="/images/projects/harmony-web.png" title="Harmony Web" desc="@ Cogitate (2024)" 
                url="https://harmonyschoolsonlinestore.com/district-office/central-office" />
                <CardLink image="/images/projects/partnersync-hub.png" title="Partner Sync Hub" desc="@ Cogitate (2024)" url="https://simplewaste.com/" />
                <Card image="/images/projects/hts-tech.png" title="HTS Tech" desc="@ Cogitate (2024)" />
                <CardLink image="/images/projects/simple-waste.png" title="Onboarding Portal" desc="@ Cogitate (2023)" url="https://simplewaste.com/" />
                <CardLink image="/images/projects/cogitate.png" title="Cogitate" desc="@ Cogitate (2023)" url="https://www.cogitate.io/" />
                <CardLink image="/images/projects/negum-tempo-jp.png" title="Negum Tempo" desc="@ Grow Forward JP Inc. (2022)" url="https://negum-tenpo.com/" />
                <CardLink image="/images/projects/growforwardjp.png" title="Grow Forward JP Inc." desc="@ Grow Forward JP Inc. (2021)" url="https://growforwardjp.com/" />
                <CardLink image="/images/projects/negumjp.png" title="Negum" desc="@ Grow Forward JP Inc. (2021)" url="https://negum-jp.com/" />
            </div>
        </div>
    );
}
 
export default project;