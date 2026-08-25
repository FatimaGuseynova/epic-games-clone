const BASE_URL = "http://localhost:3000/api";

export const getUsers = async () => {

    const loginResponse = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "mehemmedemciyev146@gmail.com",
            password: "admin123!",
        }),
    });

    const loginData = await loginResponse.json();

    console.log("LOGIN RESPONSE:", loginData);

    if (!loginResponse.ok) {
        throw new Error(loginData.message || "Login failed");
    }

    const token = loginData.token.accessToken;

    console.log("ADMIN ACCESS TOKEN:", token);

    localStorage.setItem("accessToken", token);

    const usersResponse = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const usersData = await usersResponse.json();

    console.log("USERS RESPONSE:", usersData);

    if (!usersResponse.ok) {
        throw new Error(usersData.message || "Failed to get users");
    }

    return usersData;
};