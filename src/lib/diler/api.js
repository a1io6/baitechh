import { $api } from "../../../API/api";

export const diller = {
  createDiller: async (formData) => {
    const { data } = await $api.post("/products/dealer/", {
      name: formData.fullName,
      phone: formData.phone,
      gmail: formData.email,
    });
    return data;
  },
};