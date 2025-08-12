import { useState } from "react";
import orgs from "../data/orgs";
import studies from "../data/studies";
import ExperienceEntry from "./ExperienceEntry";

function ExperienceTable() {
    const [experience, setExperience] = useState("Organizations");

    return (
        <div className="flex flex-col gap-10 animation-opacity duration-300">
            <div className="flex items-center justify-center gap-2 p-1 border-2 border-white rounded-[16px]">
                <button
                    className={`px-3 py-2 rounded-[10px] px-3 py-2 w-[50%] 
                        ${experience === "Organizations" ? "text-black bg-violet-300" : "text-white bg-slate-950 hover:bg-violet-950 transition-colors duration-300"} `}
                    onClick={() => setExperience("Organizations")}
                >
                    Organizations
                </button>
                <button
                    className={`px-3 py-2 rounded-[10px] px-3 py-2 w-[50%]
                        ${experience === "Studies" ? "text-black bg-violet-300" : "text-white bg-slate-950 hover:bg-violet-950 transition-colors duration-300"} `}
                    onClick={() => setExperience("Studies")}
                >
                    Studies
                </button>
            </div>
            <div className="relative text-wrap z-1 border-2 border-white rounded-[16px] px-5 py-2">
                <div className="absolute top-0 left-[49px] -z-10 h-full w-full border-l-2 border-white"></div>
                <div className={`${experience === "Organizations" ? "" : "hidden"}`}>
                    {orgs.map((item) => {
                        return (
                            <ExperienceEntry
                                dateStart={item.dateStart}
                                dateEnd={item.dateEnd}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
                <div className={`${experience === "Studies" ? "" : "hidden"}`}>
                    {studies.map((item) => {
                        return (
                            <ExperienceEntry
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
        </div>
    );
}

export default ExperienceTable;
