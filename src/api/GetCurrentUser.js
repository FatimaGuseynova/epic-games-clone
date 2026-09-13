const BASE_URL = "http://localhost:3000/api";

const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
        throw new Error("Refresh token not found");
    }

    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refreshToken,
        }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        throw new Error(data?.message || "Session expired");
    }

    const newAccessToken = data.accessToken;

    if (!newAccessToken) {
        throw new Error("Access token not found in refresh response");
    }

    localStorage.setItem("accessToken", newAccessToken);

    return newAccessToken;
};

export const getCurrentUser = async () => {
    let token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    let verifyResponse = await fetch(
        `${BASE_URL}/auth/verify-token/${encodeURIComponent(token)}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    );

    if (verifyResponse.status === 401) {
        token = await refreshAccessToken();

        verifyResponse = await fetch(
            `${BASE_URL}/auth/verify-token/${encodeURIComponent(token)}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            }
        );
    }

    if (!verifyResponse.ok) {
        throw new Error("Token verification failed");
    }

    const verifyData = await verifyResponse.json();

    if (!verifyData.valid || !verifyData.userId) {
        throw new Error("Invalid token or user ID not found");
    }

    const userId = verifyData.userId;

    console.log("Current user ID:", userId);

    const userResponse = await fetch(
        `${BASE_URL}/users/${userId}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (userResponse.status === 401) {
        token = await refreshAccessToken();

        const retryResponse = await fetch(
            `${BASE_URL}/users/${userId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (!retryResponse.ok) {
            throw new Error("Failed to get user");
        }

        const userData = await retryResponse.json();

        console.log("Current user:", userData);

        return userData;
    }

    if (!userResponse.ok) {
        throw new Error("Failed to get user");
    }

    const userData = await userResponse.json();

    console.log("Current user:", userData);

    return userData;
};