import { $api } from "../../../../API/api";


export const bannerget = {
  getBanner: async () => {
    const { data } = await $api.get('/banners/banners/?category=event');
    return data;
  },
}