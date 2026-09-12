let BASE_URL = "http://localhost:3000/api";

export const NewPassword = async (params) => {
    let responsive = await fetch(`${BASE_URL}/auth/forget-password/confirm`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "content-type": "application/json",
        }
    });

    let data = await responsive.json();
    return data;
}