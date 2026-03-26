import { useState } from "react";
import orgs from "@/data/orgs";
import studies from "@/data/studies";
import ExperienceEntry from "./ExperienceEntry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperienceTable() {
    const [experience, setExperience] = useState("Organizations");

    return (
        <div className="flex flex-col gap-10 animation-opacity duration-300">

            <Tabs defaultValue="organizations" className="w-full">
                <TabsList className="flex items-center justify-evenly gap-1 md:gap-2 bg-zinc-900/50 border-2 border-zinc-700 p-[5px] text-sm md:text-lg rounded-[15px] w-full">
                    <TabsTrigger className="py-1 rounded-[10px] flex-1 grow px-3 text-zinc-100 transition-colors duration-300 data-active:bg-indigo-700 data-active:text-zinc-100 cursor-pointer" value="organizations">Organizations</TabsTrigger>
                    <TabsTrigger className="py-1 rounded-[10px] flex-1 grow px-3 text-zinc-100 transition-colors duration-300 data-active:bg-indigo-700 data-active:text-zinc-100 cursor-pointer" value="studies">Studies</TabsTrigger>
                </TabsList>
                <TabsContent value="organizations">
                    <div className="relative text-wrap z-1 border-2 border-zinc-700 rounded-[16px] px-5 py-2 bg-slate-950/50">
                        <div className="absolute top-0 left-[49px] -z-10 h-full w-full border-l-2 border-dotted border-zinc-400"></div>
                        <div className="flex flex-col gap-2">
                            {orgs.map((item) => {
                                return (
                                    <ExperienceEntry
                                        key={item.title}
                                        dateStart={item.dateStart}
                                        dateEnd={item.dateEnd}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="studies">
                    <div className="relative text-wrap z-1 border-2 border-zinc-700 rounded-[16px] px-5 py-2 bg-slate-950/50">
                        <div className="absolute top-0 left-[49px] -z-10 h-full w-full border-l-2 border-dotted border-zinc-400"></div>
                        <div className="flex flex-col gap-2">
                            {studies.map((item) => {
                                return (
                                    <ExperienceEntry
                                        key={item.title}
                                        dateStart={item.dateStart}
                                        dateEnd={item.dateEnd}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div >
    );
}

