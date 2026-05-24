import { NavLink, useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Navbar() {
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex justify-center pt-5 md:pt-10">
            <Tabs value={location.pathname} className="grow">
                <TabsList className="flex items-center justify-evenly gap-1 md:gap-2 glass p-[5px] text-sm md:text-lg rounded-[15px] w-full">
                    {navItems.map((item) => (
                        <TabsTrigger
                            key={item.path}
                            value={item.path}
                            asChild
                        >
                            <NavLink
                                to={item.path}
                                className="py-1 rounded-[10px] flex-1 grow px-3 text-zinc-100/80 text-lg hover:text-zinc-100 hover:bg-[rgba(20,15,45,0.6)] transition-all duration-300 data-active:bg-[rgba(45,35,95,0.72)] data-active:text-zinc-100"
                            >
                                {item.name}
                            </NavLink>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </nav>
    );
}

export default Navbar;
