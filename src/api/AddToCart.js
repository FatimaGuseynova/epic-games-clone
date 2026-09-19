const BASE_URL = "http://localhost:3000/api";

export const AddToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const response = await fetch(`${BASE_URL}/carts/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            productId
        })
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || "Failed to add product to cart");
    }

    return await response.json();
};