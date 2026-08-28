function Sidebar({ activePage, setActivePage }) {
    const menuItems = [
        {
            id: "genres",
            label: "Genres",
        },
        {
            id: "features",
            label: "Features",
        },
        {
            id: "types",
            label: "Types",
        },
        {
            id: "platforms",
            label: "Platforms",
        },
        {
            id: "subscriptions",
            label: "Subscriptions",
        },
        {
            id: "games",
            label: "Games",
        },
        {
            id: "events",
            label: "Events",
        }
    ];

    return (
        <aside className="w-64 min-h-screen bg-[#18181c] border-r border-[#29292f] p-5">
            <h1 className="text-2xl font-bold mb-10">
                Epic Admin
            </h1>

            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePage(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition ${activePage === item.id
                                ? "bg-[#2f2f36]"
                                : "hover:bg-[#24242a]"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;