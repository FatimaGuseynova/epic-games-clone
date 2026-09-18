const BASE_URL = "http://localhost:3000/api";

export const DeleteWishlist = async (id) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("Access token not found");
  }

  const response = await fetch(`${BASE_URL}/wishlist/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete wishlist item: ${response.status}`);
  }

  return response.json();
};