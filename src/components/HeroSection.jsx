import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="font-bold text-8xl">
                Hi! I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-800 text-transparent bg-clip-text">
                    Alec
                </span>
            </h1>
            <div className="flex gap-10 justify-center text-lg text-slate-200">
                <h3>Software Engineer</h3>
                <h3>Manila, Philippines</h3>
            </div>
            <div className="flex gap-10 justify-center text-lg text-slate-400">
                <h3>Let’s build something great together.</h3>
            </div>
            <div className="flex gap-3 justify-center pt-3 text-slate-200">
                <a
                    href="https://www.linkedin.com/in/alecnono/"
                    className="border-2 rounded-[50%] p-2 hover:text-violet-500 text-slate-50 transition-colors duration-300"
                >
                    <FaLinkedin className="text-4xl" />
                </a>
                <a
                    href="https://github.com/alecbnono/"
                    className="border-2 rounded-[50%] p-2 hover:text-violet-500 text-slate-50 transition-colors duration-300"
                >
                    <FaGithub className="text-4xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/alecnono/"
                    className="border-2 rounded-[50%] p-2 hover:text-violet-500 text-slate-50 transition-colors duration-300"
                >
                    <IoDocumentTextOutline className="text-4xl" />
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
