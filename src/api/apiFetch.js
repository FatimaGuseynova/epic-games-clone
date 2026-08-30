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

    const data = await response.json();

    if (!response.ok) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        throw new Error(data.message || "Session expired");
    }

    const newAccessToken = data.accessToken;

    if (!newAccessToken) {
        throw new Error("Access token not found in refresh response");
    }

    localStorage.setItem("accessToken", newAccessToken);

    return newAccessToken;
};

export const apiFetch = async (url, options = {}) => {
    let token = localStorage.getItem("accessToken");

    let response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });


    if (response.status === 401) {
        token = await refreshAccessToken();

        response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    }

    return response;
};