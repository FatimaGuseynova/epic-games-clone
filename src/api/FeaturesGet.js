import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const FeatureGet = async () => {
  const response = await apiFetch(`${BASE_URL}/features`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};
