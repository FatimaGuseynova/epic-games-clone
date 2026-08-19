let BASE_URL = "http://localhost:3000/api";



export const postGenres = async (params) => {
    let responsive = await fetch(`${API_URL}/genres`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "content-type": "application/json"
        }
    })
    let data = await responsive.json()
    return data

}