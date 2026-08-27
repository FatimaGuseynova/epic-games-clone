import { apiFetch } from "./apiFetch";

let BASE_URL = "http://localhost:3000/api";


export const GenresPost = async (params) => {
    let responsive = await apiFetch(`${BASE_URL}/genres`, {
        method: "POST",
        body: JSON.stringify(params),
   
    })
    let data = await responsive.json()
    return data

}