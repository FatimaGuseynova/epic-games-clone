import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const SubscriptionsGet = async () => {
  const response = await apiFetch(`${BASE_URL}/subscriptions`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};