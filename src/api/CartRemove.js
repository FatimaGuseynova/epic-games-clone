export const CartRemove = async (cartId) => {
    const token = localStorage.getItem("accessToken")

    if (!token) {
        throw new Error("Access token not found")
    }

    const response = await fetch("http://localhost:3000/api/carts", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            cartId
        })
    })

    if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.message || "Failed to remove product from cart")
    }

    return response.json()
}