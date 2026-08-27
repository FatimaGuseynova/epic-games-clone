const BASE_URL = "http://localhost:3000/api";

export const loginUsers = async (params) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};