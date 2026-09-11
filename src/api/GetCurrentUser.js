export const getCurrentUser = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("Access token not found");
    }

    const verifyResponse = await fetch(
        `http://localhost:3000/api/auth/verify-token/${encodeURIComponent(token)}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    );

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
        `http://localhost:3000/api/users/${userId}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!userResponse.ok) {
        throw new Error("Failed to get user");
    }

    const userData = await userResponse.json();

    console.log("Current user:", userData);

    return userData;
};