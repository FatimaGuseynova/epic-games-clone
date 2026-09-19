export const CartsGet = async () => {
    const token = localStorage.getItem("accessToken")

    if (!token) {
        throw new Error("Access token not found")
    }

    const response = await fetch("http://localhost:3000/api/carts", {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.message || "Failed to get cart")
    }

    return response.json()
}