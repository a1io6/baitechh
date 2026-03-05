import { $api } from "../../../../API/api";

export const cart = {
  getCartItems: async () => {
    const { data } = await $api.get("/cart/cart-items/");
    return data;
  },

  createCartItem: async (product_id, quantity = 1) => {
    const { data } = await $api.post("/cart/cart-items/", {
      product_id,
      quantity,
    });
    return data;
  },

  updateCartItem: async (id, product_id, quantity) => {
    const { data } = await $api.put(`/cart/cart-items/${id}/`, {
      product_id,
      quantity,
    });
    return data;
  },

  deleteCartItem: async (id) => {
    const { data } = await $api.delete(`/cart/cart-items/${id}/`);
    return data;
  },

  clearCart: async () => {
    const { data } = await $api.delete("/cart/cart/clear/");
    return data;
  },
};
