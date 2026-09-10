import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const UpdateProfile = async (data) => {
    const response = await apiFetch(`${BASE_URL}/users/updateProfile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        console.error("Backend error:", result);
        throw new Error(result.message || "Failed to update profile");
    }

    return result;
};