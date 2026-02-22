import { $api } from "../../../../API/api";


export const certificatesget = {
  getCertificates: async () => {
    const { data } = await $api.get('/banners/banners/?category=certificates_and_licenses');
    return data;
  },
}