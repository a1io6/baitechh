import { $api } from "../../../../API/api";

export const users = {
  getUsers: async () => {
    const { data } = await $api.get('/api/profile/all/');
    return data;
  },

  deleteUser: async (id) => {
    const { data } = await $api.delete(`/api/users/${id}/`); 
    return data;
  }
};