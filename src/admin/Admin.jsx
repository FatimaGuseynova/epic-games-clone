import { useState } from "react";
import Sidebar from "./components/Sidebar";
import GenresAdmin from "./components/GenresAdmin";

function Admin() {
    const [activePage, setActivePage] = useState("genres");

    return (
        <div className="min-h-screen bg-[#121216] text-white flex">
            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            <main className="flex-1 p-8">
                {activePage === "genres" && <GenresAdmin />}
            </main>
        </div>
    );
}

export default Admin;