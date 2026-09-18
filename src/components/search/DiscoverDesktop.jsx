import React from "react";
import { NavLink } from "react-router";

function DiscoverDesktop() {
    const links = [
        { name: "Discover", path: "/discover" },
        { name: "Browse", path: "/browse" },
        { name: "News", path: "/news" },
    ];

    return (
        <nav className="flex items-center gap-6">
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        `text-[13px] transition-colors duration-200 ${
                            isActive ? "text-white" : "text-[#85858a] hover:text-white"
                        }`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
}

export default DiscoverDesktop;