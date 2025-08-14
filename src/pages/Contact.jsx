import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <section className="flex flex-col gap-20 py-20">
      <h1 className="font-bold text-6xl">Contact</h1>
      <div className="flex flex-col gap-5">
        <div className="h-75 flex gap-15 rounded-xl border-2 border-white p-5 items-center">
          <img
            src="/about/profile-picture.png"
            alt=""
            className="h-full rounded-full"
          />
          <div className="text-left">
            <h1 className="font-bold text-4xl">Alec Nono</h1>
            <p>Software Engineer</p>
            <p>Computer Science Student</p>
          </div>
        </div>
        <div className="h-75 flex flex-col justify-between rounded-xl border-2 border-white p-5">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <MdOutlineEmail />
              <a href="mailto:alecbnono@gmail.com" target="_blank" className="">
                alecbnono@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/alecnono/" target="_blank">
                linkedin.com/in/alecnono
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaGithub />
              <a href="https://github.com/alecbnono" target="_blank">
                github.com/alecbnono
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <FaGlobeAsia />
              <a href="/" target="_blank">
                techbyalec.dev
              </a>
            </div>
          </div>
          <div>
            <a href="" className="py-2 px-3 border-2 border-white rounded-xl">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
