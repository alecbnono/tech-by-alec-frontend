import contacts from "../data/contacts";
import ContactLink from "../components/ContactLink";

function Contact() {
  return (
    <section className="flex flex-col gap-20 py-20">
      <h1 className="font-bold text-6xl">Contact</h1>
      <div className="flex flex-col gap-5">
        <div className="md:h-75 flex flex-col md:flex-row gap-5 justify-center md:gap-15 rounded-xl border-2 border-white p-5 items-center bg-slate-950/50">
          <img
            src="/about/profile-picture.png"
            alt=""
            className="max-w-40 max-h-40 md:max-h-65 md:max-w-65 md:flex-1 rounded-full mx-auto md:mx-0 aspect-square"
          />
          <div className="text-lg text-slate-400 text-center md:text-left">
            <h1 className="font-bold text-5xl text-slate-50">Alec Nono</h1>
            <p>Computer Science Student</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="h-75 flex flex-col gap-5 md:flex-row items-center justify-evenly rounded-xl border-2 border-white p-5 bg-slate-950/50">
          <div className="flex flex-col gap-3">
            {contacts.map((item) => {
              return (
                <ContactLink
                  icon={item.icon}
                  display={item.display}
                  link={item.link}
                />
              );
            })}
          </div>
          <div>
            <a
              href="/Resume.pdf"
              className="py-3 px-4 border-2 border-white rounded-xl text-xl hover:border-violet-400 hover:bg-violet-400 hover:text-violet-950"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
