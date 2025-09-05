import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BackgroundLayout from "./BackgroundLayout";

function MainLayout() {
  return (
    <div className="relative bg-slate-950 overflow-hidden font-helvetica">
      <div className="relative w-screen z-10 overflow-hidden">
        <div className="flex justify-center">
          <div className="min-h-screen max-w-[650px] w-full text-white text-center mx-5 md:mx-0">
            <Navbar />
            <main>
              <Outlet></Outlet>
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <BackgroundLayout />
    </div>
  );
}

export default MainLayout;
