import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const EventsGet = async () => {
  const response = await apiFetch(`${BASE_URL}/events`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};
