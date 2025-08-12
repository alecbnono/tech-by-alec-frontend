import { NavLink } from "react-router-dom";

function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex justify-center pt-10">
            <div className="flex items-center justify-evenly gap-2 bg-slate-950 border-2 border-slate-50 p-[5px] text-lg rounded-[15px] w-full max-w-[650px]">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded-[10px] grow ${isActive
                                ? "bg-violet-500 text-slate-100"
                                : "text-slate-100 hover:bg-violet-950 transition-colors duration-300"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
