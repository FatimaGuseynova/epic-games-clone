const BASE_URL = "http://localhost:3000/api";

export const UpdateBalance = async (balance) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const response = await fetch(`${BASE_URL}/users/increaseBalance`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            balance: Number(balance)
        })
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(result?.message || "Failed to update balance");
    }

    return result;
};