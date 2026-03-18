import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "~/components/Footer";
import BackgroundLayout from "./BackgroundLayout";

export default function MainLayout() {
    return (
        <div className="relative bg-slate-950 overflow-hidden font-helvetica">
            <BackgroundLayout />
            <div className="relative w-screen z-10 overflow-hidden">
                <div className="flex justify-center">
                    <div className="min-h-screen max-w-[650px] w-full text-white text-center mx-5 md:mx-0">
                        <Navbar />
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

