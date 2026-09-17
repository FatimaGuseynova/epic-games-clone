const BASE_URL = "http://localhost:3000/api";

export const WishlistToggle = async (productId) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const response = await fetch(`${BASE_URL}/wishlist/toggle`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            productId: Number(productId)
        })
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(result?.message || "Failed to toggle wishlist");
    }

    return result;
};