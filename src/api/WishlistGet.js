const BASE_URL = "http://localhost:3000/api";

export const WishlistGet = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const response = await fetch(`${BASE_URL}/wishlist`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || "Failed to get wishlist");
    }

    return data;
};