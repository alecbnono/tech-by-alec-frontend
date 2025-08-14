import { FaMapPin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-bold text-8xl">
        Hi! I'm{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-violet-200 text-transparent bg-clip-text">
          Alec
        </span>
      </h1>
      <div className="flex gap-10 justify-center ">
        <h1 className="pl-3 font-medium text-xl text-slate-50">
          <TypeAnimation
            sequence={[
              "CS Student @ DLSU",
              1000,
              "Software Engineer",
              1000,
              "DOST Scholar",
              1000,
              "Fraghead",
              1000,
            ]}
            cursor={true}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="flex gap-10 justify-center text-lg text-slate-300">
        <h3 className="flex gap-2 items-center">
          <FaMapPin className="text-red-700" />
          <span>Manila, Philippines</span>
        </h3>
      </div>
      <div className="flex gap-3 justify-center pt-3 text-slate-200">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alecnono/"
          className="border-2 border-slate-100 rounded-[50%] p-2 text-slate-100 hover:bg-violet-500 hover:border-violet-500 hover:text-slate-50 transition-colors duration-300"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          target="_blank"
          href="https://github.com/alecbnono/"
          className="border-2 border-slate-100 rounded-[50%] p-2 text-slate-100 hover:bg-violet-500 hover:border-violet-500 hover:text-slate-50 transition-colors duration-300"
        >
          <FaGithub className="text-4xl" />
        </a>
        <a
          target="_blank"
          href="mailto:alecbnono@gmail.com"
          className="border-2 border-slate-100 rounded-[50%] p-2 text-slate-100 hover:bg-violet-500 hover:border-violet-500 hover:text-slate-50 transition-colors duration-300"
        >
          <MdOutlineEmail className="text-4xl" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/alecbnono/"
          className="border-2 border-slate-100 rounded-[50%] p-2 text-slate-100 hover:bg-violet-500 hover:border-violet-500 hover:text-slate-50 transition-colors duration-300"
        >
          <FaInstagram className="text-4xl" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alecnono/"
          className="border-2 border-slate-100 rounded-[50%] p-2 text-slate-100 hover:bg-violet-500 hover:border-violet-500 hover:text-slate-50 transition-colors duration-300"
        >
          <IoDocumentTextOutline className="text-4xl" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
