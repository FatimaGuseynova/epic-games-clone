import { useState } from "react";

function GenresAdmin() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const addGenre = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setMessage("Введите название жанра");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const response = await fetch("http://localhost:3000/api/genres", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                }),
            });

            if (!response.ok) {
                throw new Error("Не удалось добавить жанр");
            }

            const data = await response.json();

            console.log(data);

            setMessage("Жанр успешно добавлен");
            setName("");

        } catch (error) {
            console.error(error);
            setMessage("Ошибка при добавлении");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl">

            <h2 className="text-3xl font-bold mb-2">
                Genres
            </h2>

            <p className="text-[#8f8f96] mb-8">
                Add a new game genre
            </p>

            <form
                onSubmit={addGenre}
                className="bg-[#1b1b20] border border-[#29292f] rounded-xl p-6"
            >

                <label className="block text-sm mb-2">
                    Genre name
                </label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Action"
                    className="w-full bg-[#25252b] border border-[#35353d] rounded-lg px-4 py-3 outline-none focus:border-white"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 disabled:opacity-50"
                >
                    {loading ? "Adding..." : "Add Genre"}
                </button>

                {message && (
                    <p className="mt-4 text-sm">
                        {message}
                    </p>
                )}

            </form>

        </div>
    );
}

export default GenresAdmin;