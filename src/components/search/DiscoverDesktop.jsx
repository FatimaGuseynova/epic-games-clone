import { Link } from 'react-router'
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router";

function DiscoverDropdown() {
    
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Discover");

    const options = ["Discover", "Browse", "News"];

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };
    const links = [
        {
            name: "Discover",
            path: "/discover",
        },
        {
            name: "Browse",
            path: "/browse",
        },
        {
            name: "News",
            path: "/news",
        },
    ];

    return (
        <div>
            <div className="max-[1280px]:hidden">
                <nav className="flex items-center gap-6">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[10px] transition-colors duration-200 ${isActive
                                    ? "text-white"
                                    : "text-[#85858a] hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="relative inline-block max-[1023px]:hidden min-[1280px]:hidden">

                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 text-sm text-white"
                >
                    {selected}

                    <IoIosArrowDown
                        className={`text-sm transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                            }`}
                    />
                </button>

                {open && (
                    <div className="absolute left-0 top-full mt-3 w-28 bg-[#18181c] rounded-sm shadow-lg py-2 z-50">

                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`
                                block w-full
                                text-left
                                px-3
                                py-2
                                text-xs
                                transition-colors
                                duration-150
                                ${option === selected
                                        ? "text-white"
                                        : "text-[#85858a]"
                                    }
                                hover:text-white
                                hover:bg-[#29292e]
                            `}
                            >
                                {option}
                            </button>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}

export default DiscoverDropdown;