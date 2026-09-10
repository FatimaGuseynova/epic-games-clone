import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const UsersGet = async () => {
    const accessToken = localStorage.getItem("accessToken");

    const response = await apiFetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to get users");
    }

    return data;
};