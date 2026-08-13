function Sidebar({ activePage, setActivePage }) {
    return (
        <aside className="w-64 min-h-screen bg-[#18181c] border-r border-[#29292f] p-5">
            
            <h1 className="text-2xl font-bold mb-10">
                Epic Admin
            </h1>

            <nav className="space-y-2">

                <button
                    onClick={() => setActivePage("genres")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                        activePage === "genres"
                            ? "bg-[#2f2f36]"
                            : "hover:bg-[#24242a]"
                    }`}
                >
                    Genres
                </button>

                <button
                    onClick={() => setActivePage("games")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                        activePage === "games"
                            ? "bg-[#2f2f36]"
                            : "hover:bg-[#24242a]"
                    }`}
                >
                    Games
                </button>

            </nav>
        </aside>
    );
}

export default Sidebar;