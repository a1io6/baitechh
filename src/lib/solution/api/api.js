import { $api } from "../../../../API/api";


export const solutionService = {
  getBanners: async () => {
    const { data } = await $api.get('/banners/banners/?category=solution');
    return data.results;
  },
  getBannersbyid: async (id) => {
    const { data } = await $api.get(`/banners/banners/${id}`);
    return data;
    
  },
}