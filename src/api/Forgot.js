let BASE_URL = "http://localhost:3000/api";
const token = localStorage.getItem("accessToken")


export const ForgotPass = async (params) => {
    let responsive = await fetch(`${BASE_URL}/auth/forget-password`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            'Authorization': `Bearer ${token}`,
            "content-type": "application/json"
        }
    })
    let data = await responsive.json()
    return data

}