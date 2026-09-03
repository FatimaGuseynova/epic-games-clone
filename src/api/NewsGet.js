import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const NewsGet = async (page = 1) => {
    const response = await apiFetch(`${BASE_URL}/news?page=${page}`, {
        method: "GET",
    });

    const data = await response.json();

    return data;
};