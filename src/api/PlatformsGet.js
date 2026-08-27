import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const PlatformGet = async () => {
  const response = await apiFetch(`${BASE_URL}/platforms`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};