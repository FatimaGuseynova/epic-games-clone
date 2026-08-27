import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";


export const FeaturesPost = async (params) => {
  const response = await apiFetch(`${BASE_URL}/features`, {
    method: "POST",
    body: JSON.stringify(params),

  });

  console.log("STATUS:", response.status);

  const data = await response.json();

  console.log("RESPONSE:", data);

  return data;
};