import HeroSection from "../components/HeroSection";
import ExperienceTable from "../components/ExperienceTable";
import TechStack from "../components/TechStack";

function Home() {
    return (
        <div className="flex flex-col py-20 z-2 justify-center gap-20 w-full">
            <HeroSection />
            <section>
                <ExperienceTable />
            </section>
            <section>
                <TechStack />
            </section>
        </div>
    );
}

export default Home;
