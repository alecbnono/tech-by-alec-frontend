import { NavLink } from "react-router-dom";

function Footer() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const d = new Date();
    return (
        <>
            <div className="flex gap-20 p-7.5 w-full justify-end ">
                <div className="flex flex-col gap-5 ">
                    <h5 className="font-semibold">Explore</h5>
                    <div className="flex flex-col items-end">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={`px-2 py-0.5 rounded-[10px] text-slate-200 hover:bg-violet-950 transition-colors duration-300`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-5 text-slate-400">
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

export default Footer;
