import { $api } from "../../../../API/api";

export const cart = {
  getCartItems: async () => {
    const { data } = await $api.get('/cart/cart-items/');
    return data;
  },
 
  clearCart: async () => {
    const { data } = await $api.delete('/cart/cart/clear/');
    return data;
  },
 
  updateCartItem: async (product_id, quantity) => {
    const { data } = await $api.put(`/cart/cart-items/${product_id}/`, {product_id, quantity });
    return data;
  },
 
  deleteCartItem: async (product_id,) => {
    const { data } = await $api.delete(`/cart/cart-items/${product_id}/`);
    return data;
  },
  createCartItem: async () => {
    const { data } = await $api.post(`/cart/cart/clear/`);
    return data;
  },
 
}