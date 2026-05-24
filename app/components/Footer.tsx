import { NavLink } from "react-router";

export default function Footer() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const d = new Date();
    return (
        <>
            <div className="flex gap-15 md:gap-20 p-7.5 mb-5 w-full items-end justify-between glass rounded-xl">
                <h2 className="font-semibold md:text-2xl text-zinc-50">Looking for more?</h2>
                <div className="flex flex-col gap-5 ">
                    <h5 className="font-semibold text-zinc-300 text-sm uppercase tracking-wide">Explore</h5>
                    <div className="flex flex-col items-end">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={`px-2 py-0.5 rounded-[10px] text-zinc-200 hover:bg-[rgba(20,15,45,0.6)] transition-all duration-300`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full pt-5 pb-10 text-zinc-400 text-xs">
                <div className="flex flex-col">
                    <p className="text-center">
                        &copy; {d.getFullYear()} Tech by Alec. All Rights Reserved.
                    </p>
                    <p className="text-center">Designed and Developed by Alec Nono</p>
                </div>
            </div>
        </>
    );
}

