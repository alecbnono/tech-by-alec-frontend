import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="relative bg-slate-950 overflow-hidden">
      <div className="relative w-screen z-10 overflow-hidden">
        <div className="flex justify-center">
          <div className="max-w-[650px] w-full text-white text-center">
            <Navbar />
            <main>
              <Outlet></Outlet>
            </main>
            <Footer />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-violet-800/75
                    blur-3xl mix-blend-soft-light 
                    translate-y-30"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-55 translate-x-50"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-55 -translate-x-50"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-150 rounded-full bg-violet-600/33
                    blur-3xl mix-blend-soft-light 
                        translate-y-120 "
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-290 translate-x-70"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-240 -translate-x-70"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-150 rounded-full bg-violet-600/33
                    blur-3xl mix-blend-soft-light 
                        translate-y-325 "
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-490 translate-x-70"
        ></div>
        <div
          className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-440 -translate-x-70"
        ></div>
      </div>
    </div>
  );
}

export default MainLayout;
