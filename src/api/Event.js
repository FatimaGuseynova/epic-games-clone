import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";


export const EventsPost = async (params) => {
  const response = await apiFetch(`${BASE_URL}/events`, {
    method: "POST",
    body: JSON.stringify(params),

  });

  console.log("STATUS:", response.status);

  const data = await response.json();

  console.log("RESPONSE:", data);

  return data;
};