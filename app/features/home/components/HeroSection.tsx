import { FaMapPin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { LuFileDown } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
    return (
        <div className="flex flex-col-reverse gap-4 items-center md:flex-row md:py-8 justify-between">
            <section className="flex flex-col items-start w-86">
                <div className="flex flex-col gap-2 items-start">
                    <h1 className="font-bold text-4xl md:text-5xl text-zinc-100">
                        Hi! I'm
                        <span
                        // className="bg-gradient-to-r from-sky-50 to-sky-200 text-transparent bg-clip-text"
                        > Alec</span>
                    </h1>
                    <p className="font-medium text-lg md:text-xl text-zinc-300">
                        <span>I build </span>
                        <span
                            className="bg-gradient-to-r from-violet-300 to-blue-300 text-transparent bg-clip-text"
                        >
                            <TypeAnimation
                                sequence={[
                                    "systems that matter.",
                                    2000,
                                    "solutions that scale.",
                                    2000,
                                    "ideas into reality.",
                                    2000,
                                ]}
                                cursor={true}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />

                        </span>
                    </p>
                    <div className="flex gap-10 justify-center text-md text-zinc-400">
                        <h3 className="flex gap-2 items-center">
                            <FaMapPin className="text-red-700" />
                            <span>Manila, Philippines</span>
                        </h3>
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-left text-zinc-300">
                        CS Student @ DLSU working on real-world systems across full-stack, DevOps, and data with a focus on nation-building.
                    </p>
                </div>

                <div className="flex gap-3 justify-center pt-3 text-zinc-400 items-center">
                    <div className="resume-btn">
                        <a target="_blank" href="Resume.pdf" className="h-fit">
                            <Button className="resume-glass-btn p-3 rounded-[8px] border-0 text-zinc-100 cursor-pointer">
                                <span>Resume</span>
                                <LuFileDown size={32} />
                            </Button>
                        </a>
                    </div>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alecnono/"
                        className="h-fit rounded-sm p-1 hover:text-zinc-50 transition-colors duration-300"
                    >
                        <LuLinkedin className="text-2xl" />
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/alecbnono/"
                        className="h-fit rounded-sm p-1 hover:text-zinc-50 transition-colors duration-300"
                    >
                        <LuGithub className="text-2xl" />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:alecbnono@gmail.com"
                        className="h-fit rounded-sm p-1 hover:text-zinc-50 transition-colors duration-300"
                    >
                        <LuMail className="text-2xl" />
                    </a>
                </div>
            </section>
            <div className="glass-photo-outer relative h-64 w-48 md:h-72 md:w-54 rotate-[2.5deg] -translate-y-2 shrink-0">
                <div className="glass-photo-frame relative h-full w-full">
                    <img src="/about/profile-picture.png" alt="" className="h-full w-full rounded-[11px] object-cover" />
                    <div className="glass-photo-sheen-1" />
                    <div className="glass-photo-sheen-2" />
                    <div className="glass-photo-rim" />
                </div>
            </div>

        </div>
    );
}

