const API_URL = 'http://localhost:3000/api'

export const Genres = async () => {
    const response = await fetch(`${API_URL}/genres`)
    const text = await response.json()

    return text

}

const postGenres = async (params) => {
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