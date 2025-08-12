import HeroSection from "../components/HeroSection";
import ExperienceTable from "../components/ExperienceTable";

function Home() {
    return (
        <div className="flex flex-col py-20 z-2 justify-center gap-20 w-full">
            <HeroSection />
            <section>
                <ExperienceTable />
            </section>
        </div>
    );
}

export default Home;
