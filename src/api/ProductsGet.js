import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const ProductsGet = async (page = 1) => {
    const response = await apiFetch(`${BASE_URL}/products?page=${page}`, {
        method: "GET",
    });

    const data = await response.json();

    return data;
};