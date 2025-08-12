import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-950 ">
            <div className="absolute z-0 left-0 right-0 top-30 opacity-[0.75]">
                <div className="relative left-50 top-30 mx-auto size-75 rounded-[50%] bg-indigo-500 mix-blend-soft-light"></div>
            </div>
            <div className="absolute z-0 left-0 right-0 top-30 opacity-[0.75]">
                <div className="relative right-50 top-30 mx-auto size-75 rounded-[50%] bg-purple-800 mix-blend-soft-light"></div>
            </div>
            <div className="absolute z-0 left-0 right-0 top-30 opacity-[0.75]">
                <div className="relative mx-auto size-75 rounded-[50%] bg-violet-500 mix-blend-soft-light"></div>
            </div>
            <div className="relative w-screen backdrop-blur-3xl">
                <div className="flex justify-center h-full">
                    <div className="max-w-[650px] w-full text-white text-center">
                        <Navbar />
                        <main>
                            <Outlet></Outlet>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
