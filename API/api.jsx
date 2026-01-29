import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = 'https://ayla-diandrous-unobscenely.ngrok-free.dev'; // prod
// const BASE_URL = 'http://193.176.239.188/api/dashboard/'; // test
export const WSS_URL = 'baitech';

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = Cookies.get("access");

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});