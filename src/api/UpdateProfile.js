const BASE_URL = "http://localhost:3000/api";

export const UpdateProfile = async (data) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const response = await fetch(`${BASE_URL}/users/updateProfile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(result?.message || "Failed to update profile");
    }

    return result;
};