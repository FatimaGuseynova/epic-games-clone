import { apiFetch } from "./apiFetch";

const BASE_URL = "http://localhost:3000/api";

export const ProductsGet = async () => {
  const response = await apiFetch(`${BASE_URL}/products`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};