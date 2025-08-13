import TextBox from "../components/TextBox";
import about from "../data/about";

function About() {
    return (
        <div className="flex flex-col py-20 z-2 justify-center gap-20 w-full">
            <h1 className="font-bold text-6xl">About</h1>
            <section className="flex flex-col gap-10">
                {about.map((item) => (
                    <TextBox title={item.title} text={item.text} image={item.image} />
                ))}
            </section>
        </div>
    );
}

export default About;
