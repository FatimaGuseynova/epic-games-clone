const BASE_URL = "http://localhost:3000/api";

export const GenresGet = async () => {

    const Genre = await fetch(`${BASE_URL}/genres`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const GenreGet = await Genre.json();

    return GenreGet;




}